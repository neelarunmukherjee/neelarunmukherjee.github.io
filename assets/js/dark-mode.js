(function () {
  function applyIcon(theme) {
    var icon = document.querySelector('#theme-toggle i');
    if (!icon) { return; }
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }

  function init() {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    applyIcon(current);

    var btn = document.getElementById('theme-toggle');
    if (!btn) { return; }

    btn.addEventListener('click', function (event) {
      event.preventDefault();
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      applyIcon(next);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
