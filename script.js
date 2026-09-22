(function () {
  var toggle = document.querySelector('.contact-toggle');
  var panel = document.querySelector('.contact-panel');
  if (!toggle || !panel) return;

  function open() {
    panel.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }
  function close() {
    panel.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function isOpen() {
    return panel.classList.contains('open');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    isOpen() ? close() : open();
  });
  document.addEventListener('click', function (e) {
    if (isOpen() && !panel.contains(e.target) && e.target !== toggle) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) { close(); toggle.focus(); }
  });
})();
