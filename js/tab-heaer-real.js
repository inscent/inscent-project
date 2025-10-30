document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');

    openBtn.addEventListener('click', () => {
      sideMenu.classList.add('open');
      overlay.classList.add('show');
      document.body.style.overflow = 'hidden';
    sideMenu.addEventListener('mouseleave', () => {
    closeMenu();
});
    });

    function closeMenu() {
      sideMenu.classList.remove('open');
      overlay.classList.remove('show');
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

})