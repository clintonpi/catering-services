'use strict';

(function () {
  var toggle = document.querySelector('#burger-toggle'),
      ourServices = document.querySelector('#our-services'),
      ourServicesTop = document.querySelector('#our-services').offsetTop;

  // navbar camouflage
  var camouflage = function camouflage() {
    var navbarStyle = document.querySelector('#navbar').style,
        ourServicesMiddle = ourServicesTop + ourServices.offsetHeight / 2,
        atMiddle = window.pageYOffset < ourServicesMiddle;

    if (window.pageYOffset === 0 && !toggle.checked) {
      navbarStyle.backgroundColor = 'transparent';
      navbarStyle.backgroundImage = 'none';
    } else if ((window.pageYOffset > 0 || toggle.checked) && atMiddle) {
      navbarStyle.backgroundColor = 'rgb(212, 38, 37)';
      navbarStyle.backgroundImage = 'url(./images/edge-skew.png)';
    } else if (!atMiddle) {
      navbarStyle.backgroundColor = 'rgb(190, 31, 36)';
      navbarStyle.backgroundImage = 'url(./images/background-repeat.png)';
    }
  };

  // show back to top button
  var showBtn = function showBtn() {
    var topBtn = document.querySelector('#top-btn');

    if (window.pageYOffset < ourServicesTop / 2) {
      topBtn.style.bottom = '-50px';
    } else {
      topBtn.style.bottom = '20px';
    }
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds.
  var debounce = function debounce(callback, time) {
    var interval = void 0;
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      clearTimeout(interval);
      interval = setTimeout(function () {
        interval = null;
        callback.apply(undefined, args);
      }, time);
    };
  };

  toggle.checked = false;

  toggle.addEventListener('change', camouflage);
  window.addEventListener('scroll', debounce(function () {
    camouflage();
    showBtn();
  }, 250));
})();