(function(){
  var btn = document.querySelector('.nav-toggle');
  var menu = document.getElementById('site-nav');
  if(!btn || !menu) return;

  function setOpen(open){
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('is-open', open);
  }

  btn.addEventListener('click', function(){
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', function(e){
    if(e.target.closest && e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') setOpen(false);
  });

  document.addEventListener('click', function(e){
    if(!menu.classList.contains('is-open')) return;
    if(menu.contains(e.target) || btn.contains(e.target)) return;
    setOpen(false);
  });

  window.addEventListener('resize', function(){
    if(window.innerWidth > 480) setOpen(false);
  });
})();
