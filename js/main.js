/* Centre pediatrique Le Saule - comportements communs a toutes les pages. */
(function () {
  var burger = document.querySelector('.cpls-burger');
  var headerInner = document.querySelector('.cpls-header-inner');
  if (burger && headerInner) {
    burger.addEventListener('click', function () {
      headerInner.classList.toggle('cpls-nav-open');
    });
  }
})();

(function () {
  var dropdown = document.querySelector('.cpls-nav-dropdown');
  var toggle = dropdown ? dropdown.querySelector('.cpls-nav-dropdown-toggle') : null;
  if (!dropdown || !toggle) return;
  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
