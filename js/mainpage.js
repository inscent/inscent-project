// /js/main-page.js
document.addEventListener('DOMContentLoaded', () => {
  /* 요소 */
  const listEl   = document.querySelector('.new-list');
  const cats     = document.querySelector('.new-category');
  const rankList = document.getElementById('rank-list');

  /* 데이터 */
  const newProducts = [
    { brand: "Tamburins", name: "탬버린즈 퍼퓸 리미티드 퍼피", price: 250000, image: "./img/product-list/new/inscent-tamburins-limited-puppy_M-01.jpg", category: "PERFUME" },
    { brand: "Tamburins", name: "탬버린즈 퍼퓸 리미티드 선샤인", price: 250000, image: "./img/product-list/new/inscent-tamburins-limited-sunshine_M-02.jpg", category: "PERFUME" },
    { brand: "Byredo",    name: "바이레도 알토 아스트랄 오 드 퍼퓸", price: 355000, image: "./img/product-list/new/inscent-byredo-astral-oud_M.jpg", category: "PERFUME" },
    { brand: "Yves Saint",name: "입생로랑 베이비캣 오 드 빠르펭", price: 360000, image: "./img/product-list/new/inscent-yves-saint-laurent-babycat_M-04.jpg", category: "PERFUME" },
    { brand: "Diptyque",  name: "딥티크 플레르 드 뽀 오 드 뚜왈렛", price: 196000, image: "./img/product-list/new/inscent-diptyque-fleur-de-peau_M.jpg", category: "PERFUME" },
    { brand: "Le Labo",   name: "르라보 오스만투스 19", price: 73000, image: "./img/product-list/new/inscent-le-labo-osmanthus19_M-06.jpg", category: "PERFUME" },
    { brand: "Byredo", name: "바이레도 유자 트리 핸드 로션", price: 91000, image: "./img/product-list/new/01body-byredo-yuzu-tree-hand-lotion.jpg", category: "BODY" },
    { brand: "Acqua Di Parma", name: "아쿠아 디 파르마 핸드 앤 바디 로션 부옹조르노", price: 129000, image: "./img/product-list/new/02body-acquadiparma-buongiorno-hand-body-lotion.jpg", category: "BODY" },
    { brand: "Jo Malone", name: "조말론 라임 바질 앤 만다린 바디 앤 핸드 로션", price: 59000, image: "./img/product-list/new/03body-jomalone-lime-basil-mandarin-body-hand-lotion.jpg", category: "BODY" },
    { brand: "Diptyque", name: "딥디크 프레쉬 로션 포 더 바디", price: 126000, image: "./img/product-list/new/04body-diptyque-fresh-lotion-body.jpg", category: "BODY" },
    { brand: "Diptyque", name: "딥디크 플레르 드 포 핸드 앤 바디 로션", price: 91000, image: "./img/product-list/new/05body-diptyque-fleur-de-peau-hand-body-lotion.jpg", category: "BODY" },
    { brand: "Tamburins", name: "탬버린즈 샤워리 바디 로션 포그", price: 39000, image: "./img/product-list/new/06body-tamburins-showery-fog.jpg", category: "BODY" },
    { brand: "Tamburins", name: "탬버린즈 샤워리 바디 로션 님버스", price: 39000, image: "./img/product-list/new/07body-tamburins-showery-nimbus.jpg", category: "BODY" },
  ];

  const rankingProducts = [
    { brand: "Maison Margiela", name: "메종 마르지엘라 레플리카 레이지 선데이 모닝 오 드 뚜왈렛", price: 98000, image: "./img/product-list/ranking/M_750/01-inscent-maisonmargiela-replica-lazy-sundaymorning_m.jpg", category: "PERFUME" },
    { brand: "Diptyque", name: "딥티크 오르페옹 오 드 퍼퓸", price: 269000, image: "./img/product-list/ranking/M_750/02-inscent-diptyque-ambre-eau-de-parfum_m.jpg", category: "PERFUME" },
    { brand: "Lanvin", name: "랑방 에끌라 드 아르페쥬 오 드 퍼퓸", price: 64000, image: "./img/product-list/ranking/M_750/03-inscent-lanvin-eclat-darpege-eau-de-parfum_m.jpg", category: "PERFUME" },
    { brand: "Jennifer Lopez", name: "제니퍼로페즈 글로우 바이제이로 EDT", price: 55000, image: "./img/product-list/ranking/M_750/04-inscent-jenniferlopez-glow-by-jlo-edt_m.jpg", category: "PERFUME" },
    { brand: "Santa Maria Novella", name: "산타마리아노벨라 피렌체 1221 에디션 오드코롱", price: 145000, image: "./img/product-list/ranking/M_750/05-inscent-santamarianovella-pfirenze1221-edt_m.jpg", category: "PERFUME" },
    { brand: "Daniel's Truth", name: "다니엘 트루스 오일 퍼퓸 밤쉘", price: 54000, image: "./img/product-list/ranking/M_750/06-inscent-danielstruth-oil-perfume-babel_m.jpg", category: "PERFUME" },
    { brand: "Diptyque", name: "딥티크 플레르 드 뽀 오 드 퍼퓸", price: 269000, image: "./img/product-list/ranking/M_750/07-inscent-diptyque-fleur-depeau-eau-de-parfum_m.jpg", category: "PERFUME" },
    { brand: "Jo Malone", name: "조 말론 블랙베리 앤 베이 코롱", price: 110000, image: "./img/product-list/ranking/M_750/08-inscent-jomalone-blackberry-and-bay-cologne_m.jpg", category: "PERFUME" },
    { brand: "Clean", name: "클린 웜 코튼 EDP", price: 57000, image: "./img/product-list/ranking/M_750/09-inscent-clean-warm-cotton-edp_m.jpg", category: "PERFUME" },
    { brand: "Byredo", name: "바이레도 블랑쉬 오 드 퍼퓸", price: 280000, image: "./img/product-list/ranking/M_750/10-inscent-byredo-blanche-eau-de-parfum_m.jpg", category: "PERFUME" },
  ];

  /* 렌더: 신상품 */
  function renderNew(items) {
    listEl.innerHTML = items.map(item => `
      <li class="product-box swiper-slide">
        <a href="#">
          <figure>
            <div class="thumb">
              <img src="${item.image}" alt="${item.brand} ${item.name}">
            </div>
            <figcaption>
              <p class="brand">${item.brand}</p>
              <h4 class="name">${item.name}</h4>
              <p class="price">₩${item.price.toLocaleString()}</p>
            </figcaption>
          </figure>
        </a>
        <button type="button" class="btn-heart" aria-label="찜하기">
          <img src="./img/icons/heart-icon.svg" alt="좋아요 버튼">
        </button>
      </li>
    `).join('');
  }

  /* 렌더: 랭킹 */
  function renderRanking(items, target) {
    target.innerHTML = items.map((item, idx) => `
      <li class="product-box${idx===0 ? ' is-first' : ''}">
        <a href="#">
          <figure>
            <div class="thumb">
              <img src="${item.image}" alt="${item.brand} ${item.name}">
              ${idx===0 ? `
                <button type="button" class="btn-heart-big" aria-label="찜하기">
                  <img src="./img/icons/heart-icon.svg" alt="">
                </button>` : ''
              }
            </div>
            <figcaption>
              <p class="brand">${item.brand}</p>
              <h4 class="name">${item.name}</h4>
              <p class="price">₩${item.price.toLocaleString()}</p>
            </figcaption>
          </figure>
        </a>
        ${idx!==0 ? `
          <button type="button" class="btn-heart" aria-label="찜하기">
            <img src="./img/icons/heart-icon.svg" alt="">
          </button>` : ''
        }
      </li>
    `).join('');
  }

  /* 초기 렌더 */
  const initial = newProducts.filter(p => p.category === 'PERFUME');
  renderNew(initial);
  renderRanking(rankingProducts.slice(0, 9), rankList);

  /* 스와이프 초기화 (반응형 설정 포함) */
  const newSwiper = new Swiper('.new-track', {
    loop: true,
    speed: 500,
    grabCursor: true,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    slidesPerView: 3.2,
    spaceBetween: 24,
    breakpoints: {
      1280: { slidesPerView: 3.2, spaceBetween: 24 },
      1024: { slidesPerView: 2.5, spaceBetween: 20 },
       768: { slidesPerView: 2,   spaceBetween: 14 },
       640: { slidesPerView: 2,   spaceBetween: 14 },
         0: { slidesPerView: 2,   spaceBetween: 12 },
    },
  });

  /* 하트 토글 */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-heart, .btn-heart-big');
    if (!btn) return;
    btn.classList.toggle('is-active');
  });

  /* 카테고리 필터 */
  if (cats) {
    cats.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      e.preventDefault();
      const category = a.textContent.trim().toUpperCase();
      const filtered = newProducts.filter(p => p.category === category);
      renderNew(filtered.length ? filtered : newProducts);
      // Swiper가 새 DOM을 인식하도록
      const swiperEl = document.querySelector('.new-track').swiper;
      if (swiperEl) {
        swiperEl.update();
        swiperEl.slideToLoop(0, 0);
      }
    });
  }
});
