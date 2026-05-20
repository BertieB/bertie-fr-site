// Mobile sidebar toggle
(function () {
  var toggle = document.getElementById('menuToggle');
  var sidebar = document.getElementById('sidebar');
  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', sidebar.classList.contains('open'));
  });

  // Close sidebar when a nav link is clicked on mobile
  sidebar.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
      }
    });
  });

  // Close sidebar on outside click
  document.addEventListener('click', function (e) {
    if (window.innerWidth <= 768 &&
        !sidebar.contains(e.target) &&
        e.target !== toggle) {
      sidebar.classList.remove('open');
    }
  });
})();
