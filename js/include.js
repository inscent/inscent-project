document.addEventListener("DOMContentLoaded",function(){

  fetch('/header.html')
  .then(res => res.text())
  .then(html => {
    const wrap = document.querySelector('.header-wrap');
    if (!wrap) throw new Error('.header-wrap 를 찾을 수 없어요.');
    // 헤더 주입
    wrap.insertAdjacentHTML('beforeend', html);

    // 헤더가 들어간 "지금" 즉시 초기화
    initHeaderUI();
    initSideMenu();        // (탭/모바일 사이드 메뉴)
    initSearchOverlay();   // (검색 오버레이)
  })
  .catch(err => console.log('헤더 추가 에러 : ', err));

/* =========================
   헤더 UI 전반
   ========================= */
function initHeaderUI() {
  // 공통 엘리먼트
  const threeLine     = document.querySelector('.icon__header__all');
  const allDep1       = document.querySelectorAll('.all__dep1');
  const menuAll       = document.querySelector('.header__all');
  const allInner      = document.querySelector('.header__all__inner');
  const header        = document.querySelector('header');
  const gnbItems      = document.querySelectorAll('.header__gnb > ul > li');
  const banner        = document.querySelector('.carousel');
  const gnbContainer  = document.querySelector('.gnb__container');
  const item2deps     = document.querySelectorAll('.gnb__container .inner__inner__frame');
  const gnb           = document.querySelector('.header__gnb');
  const container     = document.querySelector('.carousel__container');

  // 안전 가드: 헤더가 없다면 리턴
  if (!header) return;

  // 상단 띠배너 무한복제(중복 바인딩 방지)
  if (container && !container.dataset.cloned) {
    container.insertAdjacentHTML('beforeend', container.innerHTML);
    container.dataset.cloned = 'true';
  }

  let closeTimer = null;
  let lastScrollY = 0;

  // 스크롤 헤더 동작
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (banner && gnbContainer) {
      if (currentScroll > 50 && currentScroll > lastScrollY) {
        banner.classList.add('hide');
        header.style.top = '0';
        gnbContainer.style.top = '62px';
      } else if (currentScroll < 50) {
        banner.classList.remove('hide');
        header.style.top = '38px';
        gnbContainer.style.top = '100px';
      }
    }

    if (currentScroll > 0) {
      header.classList.add('scrolled');
    } else {
      if (gnbContainer && !gnbContainer.classList.contains('on') && menuAll && !menuAll.classList.contains('active')) {
        header.classList.remove('scrolled');
      }
    }

    lastScrollY = currentScroll;
  });

  // 전체메뉴(햄버거)
  if (threeLine && menuAll && allInner && gnbContainer) {
    threeLine.addEventListener('click', () => {
      menuAll.classList.toggle('active');
      header.classList.toggle('scrolled');
      allDep1.forEach(m => m.classList.toggle('active'));
      gnbContainer.classList.remove('on');
      item2deps.forEach(item => item.classList.remove('on'));
    });

    [menuAll, allInner].forEach(el => {
      el?.addEventListener('mouseleave', () => {
        if (menuAll.classList.contains('active')) {
          menuAll.classList.remove('active');
          if (window.scrollY === 0 && (!gnbContainer.classList.contains('on'))) {
            header.classList.remove('scrolled');
          }
          allDep1.forEach(m => m.classList.remove('active'));
        }
      });
    });

    // all 메뉴에 마우스 올라가면 배경 고정
    menuAll.addEventListener('mouseenter', () => {
      header.classList.add('scrolled');
    });

    [menuAll, allInner].forEach(el => {
      el?.addEventListener('mouseleave', () => {
        if (menuAll.classList.contains('active')) {
          menuAll.classList.remove('active');
          allDep1.forEach(m => m.classList.remove('active'));
          if (window.scrollY === 0 && gnbContainer && !gnbContainer.classList.contains('on')) {
            header.classList.remove('scrolled');
          }
        } else if (window.scrollY === 0 && gnbContainer && !gnbContainer.classList.contains('on')) {
          header.classList.remove('scrolled');
        }
      });
    });
  }

  // GNB 2뎁스 오픈
  if (gnbItems.length && gnbContainer) {
    gnbItems.forEach((li, index) => {
      li.addEventListener('mouseover', () => {
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
        if (menuAll?.classList.contains('active')) {
          menuAll.classList.remove('active');
          allDep1.forEach(m => m.classList.remove('active'));
        }
        header.classList.add('scrolled');
        item2deps.forEach(item => item.classList.remove('on'));
        if (item2deps[index]) item2deps[index].classList.add('on');
        gnbContainer.classList.add('on');
      });
    });

    header.addEventListener('mouseenter', () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
    });

    gnbContainer.addEventListener('mouseleave', () => {
      if (gnbContainer.classList.contains('on')) {
        closeTimer = setTimeout(() => {
          gnbContainer.classList.remove('on');
          item2deps.forEach(item => item.classList.remove('on'));
          if (window.scrollY === 0) header.classList.remove('scrolled');
          closeTimer = null;
        }, 10);
      }
    });
  }

  // 전체메뉴 안쪽 패딩을 GNB 정렬선에 맞춤
  // if (gnb && allInner) {
  //   const left = gnb.getBoundingClientRect().left;
  //   allInner.style.paddingLeft = left + 'px';
  // }
}

/* =========================
   탭/모바일 사이드 메뉴
   ========================= */
function initSideMenu() {
  const openBtn = document.getElementById('openBtn');
  const sideMenu = document.getElementById('sideMenu');
  const overlay  = document.getElementById('overlay');

  if (!openBtn || !sideMenu || !overlay) return;

  const closeMenu = () => {
    sideMenu.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sideMenu.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  });

  overlay.addEventListener('click', closeMenu);
}

/* =========================
   검색 오버레이 (추가분)
   ========================= */
function initSearchOverlay() {
  const searchOverlay = document.getElementById('search__overlay');
  const searchOpenBtn = document.getElementById('searchOpenBtn');
  const searchInput   = document.getElementById('search__input');
  const searchClose   = document.querySelector('.search__close');

  if (!searchOverlay || !searchOpenBtn) return;

  function openSearch() {
    searchOverlay.classList.add('search-open');
    searchOpenBtn.setAttribute('aria-expanded', 'true');
    // 다음 렌더 프레임에 포커스 → 스크롤 점프 최소화
    requestAnimationFrame(() => searchInput?.focus());
  }
  function closeSearch() {
    searchOverlay.classList.remove('search-open');
    searchOpenBtn.setAttribute('aria-expanded', 'false');
  }

  // 열기
  searchOpenBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch();
  });

  // 닫기(X)
  if (searchClose) {
    searchClose.addEventListener('click', closeSearch);
  }

  // ESC로 닫기 (페이지 전역 1회 바인딩)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();
  }, { once: false });
}

/* =========================
   푸터
   ========================= */
fetch('/footer.html')
  .then(res => res.text())
  .then(html => {
    const fw = document.querySelector('.footer-real-wrap');
    if (!fw) throw new Error('.footer-real-wrap 를 찾을 수 없어요.');
    fw.insertAdjacentHTML('beforeend', html);
  })
  .catch(err => console.log('푸터 추가 에러 : ', err));


})
