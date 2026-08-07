(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- reveal on scroll ---------- */
  var revs = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window && !reduce) {
    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (e) { 
        if (e.isIntersecting) { 
          e.target.classList.add('in'); 
          ro.unobserve(e.target); 
        } 
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    revs.forEach(function (el) { ro.observe(el); });
  } else {
    revs.forEach(function (el) { el.classList.add('in'); });
  }
})();
