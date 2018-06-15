(() => {
  const toggle = document.querySelector('#burger-toggle'),
    ourServices = document.querySelector('#our-services'),
    ourServicesTop = document.querySelector('#our-services').offsetTop;

  // navbar camouflage
  const camouflage = () => {
    const navbarStyle = document.querySelector('#navbar').style,
      ourServicesMiddle = ourServicesTop + (ourServices.offsetHeight / 2),
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
  const showBtn = () => {
    const topBtn = document.querySelector('#top-btn');

    if (window.pageYOffset < ourServicesTop / 2) {
      topBtn.style.bottom = '-50px';
    } else {
      topBtn.style.bottom = '20px';
    }
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds.
  const debounce = (callback, time) => {
    let interval;
    return (...args) => {
      clearTimeout(interval);
      interval = setTimeout(() => {
        interval = null;
        callback(...args);
      }, time);
    };
  };

  toggle.checked = false;

  toggle.addEventListener('change', camouflage);
  window.addEventListener('scroll', debounce(() => {
    camouflage();
    showBtn();
  }, 250));
})();
