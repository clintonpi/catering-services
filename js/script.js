(function () {
  
  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  // navbar camouflage
  var toggle = document.querySelector('#burger-toggle');

  (function() {
    toggle.checked = false;
  })();

  function camouflage() {
    var navbarStyle = document.querySelector('#navbar').style,
      ourServices = document.querySelector('#our-services'),
      otherServices = document.querySelector('#other-services'),
      ourServicesTop = ourServices.offsetTop,
      otherServicesTop = otherServices.offsetTop;

    if (window.pageYOffset === 0 && !toggle.checked) {
      navbarStyle.backgroundColor = 'transparent';
      navbarStyle.backgroundImage = 'none';
    } else if ((window.pageYOffset > 0 && window.pageYOffset < otherServicesTop - ourServicesTop / 2) || (toggle.checked && !(window.pageYOffset >= otherServicesTop - ourServicesTop / 2))) {
      navbarStyle.backgroundColor = 'rgb(212, 38, 37)';
      navbarStyle.backgroundImage = 'url(./images/edge-skew.png)';
    } else if (window.pageYOffset >= otherServicesTop - ourServicesTop / 2) {
      navbarStyle.backgroundColor =  'rgb(190, 31, 36)';
      navbarStyle.backgroundImage = 'url(./images/background-repeat.png)';
    }
  }

  // show back to top button
  function showBtn() {
    topBtn = document.querySelector('#top-btn');
    if (window.pageYOffset === 0) {
      topBtn.style.display = 'none';
    } else {
      topBtn.style.display = 'block';
    }
  }

  toggle.addEventListener('change', camouflage);
  window.addEventListener('scroll', debounce(function() {
    camouflage();
    showBtn();
  }, 500));
  
})();
