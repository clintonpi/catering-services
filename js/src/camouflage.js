(() => {
  const navbar = document.querySelector('#navbar'),
    toggle = document.querySelector('#burger-toggle'),
    navbarStyle = navbar.style;

  toggle.checked = false;

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      navbarStyle.backgroundColor = 'rgb(212, 38, 37)';
      navbarStyle.backgroundImage = 'url(../images/edge-skew.png)';
    } else {
      navbarStyle.backgroundColor = 'transparent';
      navbarStyle.backgroundImage = 'none';
    }
  });
})();
