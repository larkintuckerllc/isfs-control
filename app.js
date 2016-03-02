(function() {
  'use strict';
  var ALL_CHANNELS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var BASE_URL = 'http://192.168.1.2:3000';
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
    thr0w.setBase('http://localhost');
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
        url: BASE_URL + '/apps/isfs-steering'
      });
    }
  }
})();
