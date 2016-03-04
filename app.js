(function() {
  'use strict';
  var ALL_CHANNELS = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  var BASE_EXTERNAL = 'http://10.242.84.109';
  var BASE_INTERNAL = 'http://192.168.1.2';
  var thr0w = window.thr0w;
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    var controlEl = document.getElementById('control');
    var accountEl = document.getElementById('account');
    document.getElementById('account__login__form')
      .addEventListener('submit', login);
    document.getElementById('logout')
      .addEventListener('click', logout);
    document.getElementById('supply')
      .addEventListener('click', supply);
    document.getElementById('photoshoot')
      .addEventListener('click', photoshoot);
    document.getElementById('left_control')
      .addEventListener('click', leftControl);
    document.getElementById('left_conference')
      .addEventListener('click', leftConference);
    document.getElementById('left_isfs')
      .addEventListener('click', leftISFS);
    document.getElementById('left_center_control')
      .addEventListener('click', leftCenterControl);
    document.getElementById('left_center_conference')
      .addEventListener('click', leftCenterConference);
    document.getElementById('right_center_control')
      .addEventListener('click', rightCenterControl);
    document.getElementById('right_center_conference')
      .addEventListener('click', rightCenterConference);
    document.getElementById('right_control')
      .addEventListener('click', rightControl);
    document.getElementById('right_conference')
      .addEventListener('click', rightConference);
    thr0w.setBase(BASE_EXTERNAL);
    if (thr0w.authenticated()) {
      controlEl.style.display = 'block';
    } else {
      accountEl.style.display = 'block';
    }
    function login(e) {
      e.preventDefault();
      var passwordEl = document
        .getElementById('account__login__form__password');
      var username = document.getElementById('account__login__form__username')
        .value;
      var password = passwordEl.value;
      if (username && password) {
        thr0w.login(username, password, callback);
      }
      function callback(error) {
        if (!error) {
          accountEl.style.display = 'none';
          controlEl.style.display = 'block';
        } else {
          passwordEl.value = '';
        }
      }
    }
    function logout() {
      thr0w.logout();
      window.location.reload();
    }
    function supply() {
      thr0w.thr0w(ALL_CHANNELS, {
        action: 'update',
        url: BASE_INTERNAL + '/apps/isfs-steering'
      });
    }
    function photoshoot() {
      thr0w.thr0w(ALL_CHANNELS, {
        action: 'update',
        url: BASE_INTERNAL + '/apps/isfs-photoshoot'
      });
    }
    function leftControl() {
      thr0w.thr0w([16], {
        action: 'control'
      });
    }
    function leftConference() {
      thr0w.thr0w([16], {
        action: 'update',
        url:
          'https://hangouts.google.com/hangouts/_/larkintuckerllc.com/isfswall'
      });
    }
    function leftISFS() {
      thr0w.thr0w([16], {
        action: 'update',
        url: 'http://isfs.institute.ufl.edu'
      });
    }
    function leftCenterControl() {
      thr0w.thr0w([17], {
        action: 'control'
      });
    }
    function leftCenterConference() {
      thr0w.thr0w([17], {
        action: 'update',
        url:
          'https://hangouts.google.com/hangouts/_/larkintuckerllc.com/isfswall'
      });
    }
    function rightCenterControl() {
      thr0w.thr0w([18], {
        action: 'control'
      });
    }
    function rightCenterConference() {
      thr0w.thr0w([18], {
        action: 'update',
        url:
          'https://hangouts.google.com/hangouts/_/larkintuckerllc.com/isfswall'
      });
    }
    function rightControl() {
      thr0w.thr0w([19], {
        action: 'control'
      });
    }
    function rightConference() {
      thr0w.thr0w([19], {
        action: 'update',
        url:
          'https://hangouts.google.com/hangouts/_/larkintuckerllc.com/isfswall'
      });
    }
  }
})();
