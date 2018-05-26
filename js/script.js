(function () {
  
  // navbar camouflage
  var toggle = document.querySelector('#burger-toggle'),
      ourServices = document.querySelector('#our-services'),    
      ourServicesTop = document.querySelector('#our-services').offsetTop;

  toggle.checked = false;

  function camouflage() {
    var navbarStyle = document.querySelector('#navbar').style,
        ourServicesMiddle = ourServicesTop + ourServices.offsetHeight / 2,
        atMiddle = window.pageYOffset < ourServicesMiddle ? true : false;

    if (window.pageYOffset === 0 && !toggle.checked) {
      navbarStyle.backgroundColor = 'transparent';
      navbarStyle.backgroundImage = 'none';
    } else if ((window.pageYOffset > 0 && atMiddle) || (toggle.checked && atMiddle)) {
      navbarStyle.backgroundColor = 'rgb(212, 38, 37)';
      navbarStyle.backgroundImage = 'url(./images/edge-skew.png)';
    } else if (!atMiddle) {
      navbarStyle.backgroundColor =  'rgb(190, 31, 36)';
      navbarStyle.backgroundImage = 'url(./images/background-repeat.png)';
    }
  }

  // show back to top button
  function showBtn() {
    var topBtn = document.querySelector('#top-btn');

    if (window.pageYOffset < ourServicesTop / 2) {
      topBtn.style.bottom = '-50px';
    } else {
      topBtn.style.bottom = '20px';
    }
  }

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
  
  toggle.addEventListener('change', camouflage);
  window.addEventListener('scroll', debounce(function() {
    camouflage();
    showBtn();
  }, 500));
  
})();
