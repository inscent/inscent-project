document.addEventListener("DOMContentLoaded", () => {
  const threeLine = document.querySelector(".icon__header__all");
  const allDep1 = document.querySelectorAll(".all__dep1");
  const menuAll = document.querySelector(".header__all");
  const allInner = document.querySelector(".header__all__inner");
  const header = document.querySelector("header");
  const gnbItems = document.querySelectorAll(".header__gnb > ul > li");
  const banner = document.querySelector(".carousel"); // 띠배너
  const gnbContainer = document.querySelector(".gnb__container");
  const item2deps = document.querySelectorAll(".gnb__container .inner__inner__frame");

  let lastScrollY = 0;

  // ▷ 띠배너 자연스러운 애니메이션 복제
  const container = document.querySelector(".carousel__container");
  if (container && !container.dataset.cloned) {
    container.innerHTML += container.innerHTML;
    container.dataset.cloned = "true";
  }

  // ▷ 스크롤 이벤트
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50 && currentScroll > lastScrollY) {
      banner.classList.add("hide");
      header.style.top = "0";
    } else if (currentScroll < 50) {
      banner.classList.remove("hide");
      header.style.top = "38px";
    }

    if (currentScroll > 0) header.classList.add("scrolled");
    else if (!menuAll.classList.contains("active")) header.classList.remove("scrolled");

    lastScrollY = currentScroll;
  });

  // ▷ 전체 메뉴 토글 (햄버거 클릭)
  threeLine.addEventListener("click", () => {
    menuAll.classList.toggle("active");
    header.classList.toggle("scrolled");
    allDep1.forEach((menu) => menu.classList.toggle("active"));
  });

  // ▷ 전체 메뉴 hover 벗어나면 닫기 (메뉴 열려 있을 때만)
  [menuAll, allInner].forEach(el => {
    el.addEventListener('mouseleave', () => {
      if (menuAll.classList.contains('active')) {
        menuAll.classList.remove('active');
        header.classList.remove('scrolled');
        allDep1.forEach((menu) => menu.classList.remove('active'));
      }
    });
  });

  // ▷ GNB 메뉴 hover 시 자기 메뉴만 나오게
  gnbItems.forEach((li, index) => {
    li.addEventListener("mouseenter", () => {
      item2deps.forEach(item => item.classList.remove("on"));
      item2deps[index].classList.add("on");
      header.classList.add("scrolled");
      gnbContainer.classList.add("on");
      
    });
  });

  // ▷ GNB 메뉴 hover 시 자기 메뉴만 나오게
gnbItems.forEach((li, index) => {
  li.addEventListener("mouseenter", () => {
    // 🔹 햄버거 전체 메뉴가 열려있으면 닫기
    if (menuAll.classList.contains("active")) {
      menuAll.classList.remove("active");
      allDep1.forEach((menu) => menu.classList.remove("active"));
    }

    item2deps.forEach(item => item.classList.remove("on"));
    item2deps[index].classList.add("on");
    header.classList.add("scrolled");
    gnbContainer.classList.add("on");
  });
});

  // ▷ GNB 영역 벗어나면 메뉴 닫기
  gnbContainer.addEventListener("mouseleave", () => {
    item2deps.forEach(item => item.classList.remove("on"));
    gnbContainer.classList.remove("on");
    if (!menuAll.classList.contains("active") && window.scrollY === 0) {
      header.classList.remove("scrolled");
    }
  });

  // ▷ 마우스 이동시 header 배경 유지
  const commonFrame = document.querySelector('.gnb__container .common-frame');
  document.addEventListener('mousemove', (e) => {
    const t = e.target;
    if (header.contains(t) || (commonFrame && commonFrame.contains(t))) {
      header.classList.add('scrolled');
    } else {
      if (!menuAll || !menuAll.classList.contains('active')) {
        header.classList.remove('scrolled');
      }
    }
  });

  // ▷ header__all__inner padding 맞추기
//   const gnb = document.querySelector(".header__gnb");
//   if (gnb && allInner) {
//     allInner.style.paddingLeft = gnb.getBoundingClientRect().left + "px";
//   }
// });

// test

})

