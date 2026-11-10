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

// Engagement events for GoatCounter: time actually spent looking at the page,
// and whether the visitor scrolled to the bottom. Shows up as e.g. "time-2m quadruped".
(function () {
  var page = location.pathname.split('/').pop().replace('.html', '') || 'home';
  if (page === 'index') page = 'home';
  var sent = {};

  function send(name) {
    if (sent[name]) return;
    var gc = window.goatcounter;
    if (!gc || !gc.count) return; // script not loaded yet (or blocked); retry next tick
    sent[name] = true;
    gc.count({ path: name + ' ' + page, title: name + ' on ' + page, event: true });
  }

  var marks = [[30, 'time-30s'], [60, 'time-1m'], [120, 'time-2m'], [300, 'time-5m']];
  var seconds = 0;
  var timer = setInterval(function () {
    if (document.visibilityState !== 'visible') return;
    seconds++;
    marks.forEach(function (m) { if (seconds >= m[0]) send(m[1]); });
    if (sent['time-5m']) clearInterval(timer);
  }, 1000);

  window.addEventListener('scroll', function () {
    var bottom = window.scrollY + window.innerHeight;
    if (bottom >= document.documentElement.scrollHeight - 200) send('scrolled-to-end');
  }, { passive: true });
})();

// Lightbox: photos in case-study media rows open full screen instead of in a new tab.
(function () {
  var links = document.querySelectorAll('a.ph');
  if (!links.length) return;
  var lb = document.createElement('div');
  lb.className = 'lb';
  lb.hidden = true;
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Image viewer');
  lb.innerHTML = '<button type="button" class="lb-close">Close ✕</button><figure><img alt=""><figcaption></figcaption></figure>';
  document.body.appendChild(lb);
  var img = lb.querySelector('img'), cap = lb.querySelector('figcaption'), btn = lb.querySelector('.lb-close'), last = null;

  function open(a) {
    last = a;
    var thumb = a.querySelector('img'), fig = a.closest('figure'), fc = fig && fig.querySelector('figcaption');
    img.src = a.getAttribute('href');
    img.alt = thumb ? thumb.alt : '';
    cap.textContent = fc ? fc.textContent : '';
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    btn.focus();
  }
  function close() {
    lb.hidden = true;
    img.removeAttribute('src');
    document.body.style.overflow = '';
    if (last) last.focus();
  }
  Array.prototype.forEach.call(links, function (a) {
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      open(a);
    });
  });
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target === btn || e.target.tagName === 'FIGURE') close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) close(); });
})();
