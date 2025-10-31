/* =========================================================
   PRODUCT LIST PAGE - FINAL INTEGRATED JS (WITH PREV/NEXT)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const $  = (sel, scope = document) => scope.querySelector(sel);
  const $$ = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));
  const on = (el, ev, fn, opt) => { if (el) el.addEventListener(ev, fn, opt); };
  const normalize = (txt) => (txt || '').trim().toUpperCase().replace(/\./g, '');

  const productGrid = $('.product-grid');
  const cateWrap    = $('.p-cate');
  const resetBtn    = $('.btn-reset');
  const viewBtn     = $('.btn-view');
  const accItems    = $$('.acc-item');
  const sortWrap    = $('.sort-wrap');
  const pager       = $('.pager');

  const ITEMS_PER_PAGE = 16;
  let currentCategory = 'ALL';
  let priceRange = null;
  let currentPage = 1;
  let currentList = [];

  /* ------------------ data ------------------ */
  const PRODUCTS = [ 
  { brand: "Maison Margiela", name: "메종 마르지엘라 레플리카 레이지 선데이 모닝 오 드 뚜왈렛", price: 98000, rating: 4.89, image: "./img/product-list/rank-s/perfume/lst1-maisonmargiela-replica-lazy-sundaymorning.jpg", category: "PERFUME" },
  { brand: "Diptyque", name: "딥티크 오르페옹 오 드 퍼퓸", price: 269000, rating: 4.75, image: "./img/product-list/rank-s/perfume/lst2-diptyque-ambre-eau-de-parfum.jpg", category: "PERFUME" },
  { brand: "Lanvin", name: "랑방 에끌라 드 아르페쥬 오 드 퍼퓸", price: 64000, rating: 4.58, image: "./img/product-list/rank-s/perfume/lst3-lanvin-eclat-darpege-eau-de-parfum.jpg", category: "PERFUME" },
  { brand: "Jennifer Lopez", name: "제니퍼로페즈 글로우 바이제이로 EDT", price: 55000, rating: 4.56, image: "./img/product-list/rank-s/perfume/lst4-jenniferlopez-glow-by-jlo-edt.jpg", category: "PERFUME" },
  { brand: "Santa Maria Novella", name: "산타 마리아 노벨라 피렌체 1221 에디션 오 드 코롱", price: 145000, rating: 4.48, image: "./img/product-list/rank-s/perfume/lst5-santamarianovella-pfirenze1221-edt.jpg", category: "PERFUME" },
  { brand: "Daniel's Truth", name: "다니엘 트루스 오일 퍼퓸 밤쉘", price: 54000, rating: 4.44, image: "./img/product-list/rank-s/perfume/lst6-danielstruth-oil-perfume-babel.jpg", category: "PERFUME" },
  { brand: "Diptyque", name: "딥티크 플레르 드 뽀 오 드 퍼퓸", price: 269000, rating: 4.38, image: "./img/product-list/rank-s/perfume/lst7-diptyque-fleur-depeau-eau-de-parfum.jpg", category: "PERFUME" },
  { brand: "Jo Malone", name: "조 말론 블랙베리 앤 베이 코롱", price: 110000, rating: 4.32, image: "./img/product-list/rank-s/perfume/lst8-jomalone-blackberry-and-bay-cologne.jpg", category: "PERFUME" },
  { brand: "Clean", name: "클린 웜 코튼 EDP", price: 57000, rating: 4.22, image: "./img/product-list/rank-s/perfume/lst9-clean-warm-cotton-edp.jpg", category: "PERFUME" },
  { brand: "Byredo", name: "바이레도 블랑쉬 오 드 퍼퓸", price: 280000, rating: 4.16, image: "./img/product-list/rank-s/perfume/lst10-byredo-blanche-eau-de-parfum.jpg", category: "PERFUME" },
  { brand: "Le Labo", name: "르라보 상탈 33 오 드 퍼퓸", price: 225000, rating: 4.88, image: "./img/product-list/rank-s/perfume/lst11-lelabo-santal33.jpg", category: "PERFUME" },
  { brand: "Le Labo", name: "르라보 어나더 13 오 드 퍼퓸", price: 253000, rating: 4.85, image: "./img/product-list/rank-s/perfume/lst12-lelabo-another13.jpg", category: "PERFUME" },
  { brand: "Creed", name: "크리드 어벤투스 오 드 퍼퓸", price: 384000, rating: 4.83, image: "./img/product-list/rank-s/perfume/lst13-creed-aventus.jpg", category: "PERFUME" },
  { brand: "Byredo", name: "바이레도 집시 워터 오 드 퍼퓸", price: 180000, rating: 4.78, image: "./img/product-list/rank-s/perfume/lst14-byredo-gypsywater.jpg", category: "PERFUME" },
  { brand: "Tom Ford", name: "톰 포드 오드 우드 오 드 퍼퓸", price: 323000, rating: 4.77, image: "./img/product-list/rank-s/perfume/lst15-tomford-oudwood.jpg", category: "PERFUME" },
  { brand: "Byredo", name: "바이레도 모하비 고스트 오 드 퍼퓸", price: 185000, rating: 4.75, image: "./img/product-list/rank-s/perfume/lst16-byredo-mojaveghost.jpg", category: "PERFUME" },
  { brand: "Byredo", name: "바이레도 발 다프리크 오 드 퍼퓸", price: 175000, rating: 4.73, image: "./img/product-list/rank-s/perfume/lst17-byredo-baldafrique.jpg", category: "PERFUME" },
  { brand: "Dior", name: "디올 소바쥬 오 드 뚜왈렛", price: 114000, rating: 4.71, image: "./img/product-list/rank-s/perfume/lst18-dior-sauvage.jpg", category: "PERFUME" },
  { brand: "Tom Ford", name: "톰 포드 블랙 오키드 오 드 퍼퓸", price: 168000, rating: 4.66, image: "./img/product-list/rank-s/perfume/lst19-tomford-blackorchid.jpg", category: "PERFUME" },
  { brand: "Kilian", name: "킬리안 엔젤스 셰어", price: 232000, rating: 4.64, image: "./img/product-list/rank-s/perfume/lst20-kilian-angelsshare.jpg", category: "PERFUME" },

   // 🧴 BODY
  { brand: "Le Labo", name: "르라보 어나더 13 퍼퓨밍 바디 로션", price: 92000, rating: 4.83, image: "./img/product-list/rank-s/body/lst1-lelabo-bodylotion-another13.jpg", category: "BODY" },
  { brand: "Byredo", name: "바이레도 모하비 고스트 핸드 크림", price: 50000, rating: 4.76, image: "./img/product-list/rank-s/body/lst2-byredo-handcream-mojaveghost.jpg", category: "BODY" },
  { brand: "Byredo", name: "바이레도 블랑쉬 핸드 크림", price: 40000, rating: 4.74, image: "./img/product-list/rank-s/body/lst3-byredo-handcream-blanche.jpg", category: "BODY" },
  { brand: "Aesop", name: "이솝 레저렉션 아로마틱 핸드 밤", price: 36000, rating: 4.69, image: "./img/product-list/rank-s/body/lst4-aesop-resurrection-handbalm.jpg", category: "BODY" },
  { brand: "Byredo", name: "바이레도 발 다프리크 바디 로션", price: 80000, rating: 4.69, image: "./img/product-list/rank-s/body/lst5-byredo-bodylotion-baldaffrique.jpg", category: "BODY" },
  { brand: "Diptyque", name: "딥티크 핸드 & 바디 로션 플레르 드 뽀", price: 84000, rating: 4.68, image: "./img/product-list/rank-s/body/lst6-diptyque-bodylotion-fleurdepeau.jpg", category: "BODY" },
  { brand: "Dior", name: "디올 뉴 디올 르 밤 핸드 크림", price: 67000, rating: 4.67, image: "./img/product-list/rank-s/body/lst7-dior-handcream-lebaume.jpg", category: "BODY" },
  { brand: "Aesop", name: "이솝 레저렉션 아로마틱 핸드 워시", price: 47000, rating: 4.67, image: "./img/product-list/rank-s/body/lst8-aesop-resurrection-handwash.jpg", category: "BODY" },
  { brand: "Le Labo", name: "르라보 핸드 포마드 히노키", price: 38000, rating: 4.63, image: "./img/product-list/rank-s/body/lst9-lelabo-handpomade-hinoki.jpg", category: "BODY" },
  { brand: "Diptyque", name: "딥티크 퍼퓸 핸드 크림 도 손", price: 65000, rating: 4.63, image: "./img/product-list/rank-s/body/lst10-diptyque-handcream-doson.jpg", category: "BODY" },

  // 💇‍♀️ HAIR
  { brand: "Dior", name: "디올 미스 디올 블루밍 부케 헤어 미스트", price: 66000, rating: 4.75, image: "./img/product-list/rank-s/hair/lst11-dior-hairmist-missdior-bloomingbouquet.jpg", category: "HAIR" },
  { brand: "Chanel", name: "샤넬 코코 마드모아젤 헤어 미스트", price: 82000, rating: 4.74, image: "./img/product-list/rank-s/hair/lst12-chanel-hair-cocomademoiselle.jpg", category: "HAIR" },
  { brand: "Diptyque", name: "딥티크 헤어 미스트 플레르 드 뽀", price: 80000, rating: 4.73, image: "./img/product-list/rank-s/hair/lst13-diptyque-hairmist-fleurdepeau.jpg", category: "HAIR" },
  { brand: "Byredo", name: "바이레도 블랑쉬 헤어 퍼퓸", price: 62000, rating: 4.72, image: "./img/product-list/rank-s/hair/lst14-byredo-hair-blanche.jpg", category: "HAIR" },
  { brand: "Diptyque", name: "딥티크 헤어 미스트 오 로즈", price: 80000, rating: 4.71, image: "./img/product-list/rank-s/hair/lst15-diptyque-hairmist-eaurose.jpg", category: "HAIR" },
  { brand: "Chanel", name: "샤넬 가브리엘 샤넬 헤어 미스트", price: 80000, rating: 4.70, image: "./img/product-list/rank-s/hair/lst16-chanel-hair-gabrielle.jpg", category: "HAIR" },
  { brand: "Diptyque", name: "딥티크 헤어 미스트 로 파피에", price: 84000, rating: 4.68, image: "./img/product-list/rank-s/hair/lst17-diptyque-hairmist-lopapier.jpg", category: "HAIR" },
  { brand: "Saint Laurent", name: "입생로랑 리브르 헤어 미스트", price: 55000, rating: 4.66, image: "./img/product-list/rank-s/hair/lst18-ysl-hairmist-libre.jpg", category: "HAIR" },
  { brand: "Saint Laurent", name: "입생로랑 몽 파리 헤어 미스트", price: 58000, rating: 4.64, image: "./img/product-list/rank-s/hair/lst19-ysl-hairmist-monparis.jpg", category: "HAIR" },
  { brand: "Diptyque", name: "딥티크 헤어 미스트 오 데 썽", price: 74000, rating: 4.62, image: "./img/product-list/rank-s/hair/lst20-diptyque-hairmist-eaudessens.jpg", category: "HAIR" },

  // 🕯️ ETC
  { brand: "Diptyque", name: "딥티크 베이 룸 스프레이", price: 81000, rating: 4.71, image: "./img/product-list/rank-s/etc/lst21-diptyque-roomspray-baies.jpg", category: "ETC" },
  { brand: "Acqua Di Parma", name: "아쿠아 디 파르마 차량용 디퓨저 레더 케이스 다크 그레이", price: 250000, rating: 4.72, image: "./img/product-list/rank-s/etc/lst22-acquadiparma-cardiffuser-darkgrey.jpg", category: "ETC" },
  { brand: "Jo Malone", name: "조 말론 우드 세이지 앤 씨 솔트 리미티드 디퓨저", price: 119000, rating: 4.70, image: "./img/product-list/rank-s/etc/lst23-jomalone-diffuser-woodsage-limited.jpg", category: "ETC" },
  { brand: "Diptyque", name: "딥티크 차량용 디퓨저 케이스 & 리필 세트 로즈", price: 153000, rating: 4.73, image: "./img/product-list/rank-s/etc/lst24-diptyque-cardiffuser-rose.jpg", category: "ETC" },
  { brand: "Acqua Di Parma", name: "아쿠아 디 파르마 차량용 디퓨저 레더 케이스 로얄 블루", price: 449000, rating: 4.78, image: "./img/product-list/rank-s/etc/lst25-acquadiparma-cardiffuser-royalblue.jpg", category: "ETC" },
  { brand: "Jo Malone", name: "조 말론 라임 바질 앤 만다린 센트 서라운드 디퓨저", price: 130000, rating: 4.69, image: "./img/product-list/rank-s/etc/lst26-jomalone-diffuser-limebasil.jpg", category: "ETC" },
  { brand: "Diptyque", name: "딥티크 차량용 디퓨저 케이스 & 리필 세트 34번가 생제르망", price: 146000, rating: 4.71, image: "./img/product-list/rank-s/etc/lst27-diptyque-cardiffuser-34boulevard.jpg", category: "ETC" },
  { brand: "Acqua Di Parma", name: "아쿠아 디 파르마 차량용 디퓨저 레더 케이스 옐로우", price: 151000, rating: 4.75, image: "./img/product-list/rank-s/etc/lst28-acquadiparma-cardiffuser-yellow.jpg", category: "ETC" },
  { brand: "Diptyque", name: "딥티크 로즈 룸 스프레이", price: 127000, rating: 4.74, image: "./img/product-list/rank-s/etc/lst29-diptyque-roomspray-rose.jpg", category: "ETC" },
  { brand: "Acqua Di Parma", name: "아쿠아 디 파르마 차량용 디퓨저 레더 케이스 레드", price: 396000, rating: 4.77, image: "./img/product-list/rank-s/etc/lst30-acquadiparma-cardiffuser-red.jpg", category: "ETC" },
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

/* ------------------ pagination ------------------ */
  function renderPager(totalItems) {
    if (!pager) return;
    pager.innerHTML = '';

    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    if (totalPages <= 1) return;

    // ◀ 이전 버튼
    const prevLi = document.createElement('li');
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '‹';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderProducts(currentList);
        renderPager(totalItems);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    prevLi.appendChild(prevBtn);
    pager.appendChild(prevLi);

    // 번호 버튼
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.className = i === currentPage ? 'is-active' : '';
      btn.addEventListener('click', () => {
        currentPage = i;
        renderProducts(currentList);
        renderPager(totalItems);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      li.appendChild(btn);
      pager.appendChild(li);
    }

    // ▶ 다음 버튼
    const nextLi = document.createElement('li');
    const nextBtn = document.createElement('button');
    nextBtn.textContent = '›';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderProducts(currentList);
        renderPager(totalItems);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    nextLi.appendChild(nextBtn);
    pager.appendChild(nextLi);
  }

  /* ------------------ product render ------------------ */
  function renderProducts(items) {
    if (!productGrid) return;
    productGrid.innerHTML = '';

    currentList = items;
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const visibleItems = items.slice(start, end);

    visibleItems.forEach(p => {
      const li = document.createElement('li');
      li.className = 'product-card';
      li.dataset.category = p.category;
      li.innerHTML = `
        <a class="product-link" href="${p.link || '#'}">
          <figure class="thumb">
            <img src="${p.image}" alt="${p.brand} ${p.name}" loading="lazy"
                 onerror="this.src='https://via.placeholder.com/400x400?text=No+Image'">
          </figure>
          <figcaption class="meta">
            <p class="brand">${p.brand}</p>
            <h3 class="name">${p.name}</h3>
            <p class="price">₩${p.price.toLocaleString()}</p>
          </figcaption>
        </a>
        <button class="btn-like" type="button" aria-label="좋아요">
         <img src="./img/icons/heart-icon.svg" alt="좋아요 버튼">
        </button>`;
      productGrid.appendChild(li);
    });

    renderPager(items.length);

    // 좋아요 토글
    $$('.btn-like', productGrid).forEach(btn => {
      on(btn, 'click', () => btn.classList.toggle('is-active'));
    });
  }

  /* ------------------ filtering ------------------ */
  function applyFilters() {
    let list = PRODUCTS.slice();
    if (currentCategory !== 'ALL') {
      list = list.filter(p => p.category === currentCategory);
    }
    if (priceRange) {
      const min = Number(priceRange.min ?? -Infinity);
      const max = (priceRange.max === '' || priceRange.max == null) ? Infinity : Number(priceRange.max);
      list = list.filter(p => p.price >= min && p.price <= max);
    }
    currentPage = 1;
    renderProducts(list);
  }

  /* ------------------ sorting ------------------ */
  if (sortWrap) {
    sortWrap.addEventListener('click', (e) => {
      const btn = e.target.closest('.sort-btn');
      if (!btn) return;
      $$('.sort-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const sortType = btn.dataset.sort;
      let sorted = [...PRODUCTS];
      switch (sortType) {
        case 'new': sorted.reverse(); break;
        case 'review': sorted.sort((a,b)=>(b.reviews||0)-(a.reviews||0)); break;
        case 'low': sorted.sort((a,b)=>a.price-b.price); break;
        case 'high': sorted.sort((a,b)=>b.price-a.price); break;
      }
      currentPage = 1;
      renderProducts(sorted);
    });
  }

  /* ------------------ category ------------------ */
  if (cateWrap) {
    cateWrap.addEventListener('click', (e) => {
      const dd = e.target.closest('dd');
      if (!dd) return;
      const cat = (dd.dataset.cat || dd.textContent || '').toUpperCase().replace(/\./g, '').trim();
      if (!cat) return;
      $$('.p-cate dd').forEach(el => el.classList.remove('is-active'));
      dd.classList.add('is-active');
      currentCategory = cat;
      priceRange = null;
      currentPage = 1;
      applyFilters();
    });
  }

  /* ------------------ accordion ------------------ */
  accItems.forEach(item => {
    const head = $('.acc-head', item);
    const panel = $('.acc-panel', item);
    on(head, 'click', () => {
      const opening = !item.classList.contains('is-open');
      accItems.forEach(it => {
        it.classList.remove('is-open');
        const p = $('.acc-panel', it);
        if (p) p.style.maxHeight = '0px';
      });
      if (opening && panel) {
        item.classList.add('is-open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
  on(window, 'resize', () => {
    accItems.forEach(item => {
      if (item.classList.contains('is-open')) {
        const panel = $('.acc-panel', item);
        if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* ------------------ tag chips ------------------ */
  $$('.tag-list').forEach(list => {
    on(list, 'click', (e) => {
      const btn = e.target.closest('.tag');
      if (!btn) return;
      const single = list.dataset.group === 'single';
      if (single) {
        $$('.tag', list).forEach(t => t.classList.remove('is-active'));
        btn.classList.add('is-active');
      } else btn.classList.toggle('is-active');

      if (list.dataset.name === 'price') {
        const active = $('.tag.is-active', list);
        priceRange = active ? { min: active.dataset.min, max: active.dataset.max } : null;
        currentPage = 1;
        applyFilters();
      }
    });
  });

  /* ------------------ reset/view ------------------ */
  on(resetBtn, 'click', () => {
    $$('.tag.is-active').forEach(t => t.classList.remove('is-active'));
    priceRange = null;
    accItems.forEach(it => {
      it.classList.remove('is-open');
      const p = $('.acc-panel', it);
      if (p) p.style.maxHeight = '0px';
    });
    const all = $$('.p-cate dd').find(dd => normalize(dd.textContent) === 'ALL');
    $$('.p-cate dd').forEach(el => el.classList.remove('is-active'));
    if (all) all.classList.add('is-active');
    currentCategory = 'ALL';
    currentPage = 1;
    applyFilters();
  });

  on(viewBtn, 'click', () => {
    const payload = {};
    $$('.tag-list').forEach(list => {
      const name = list.dataset.name;
      const selected = [];
      $$('.tag.is-active', list).forEach(tag => {
        selected.push({
          label: tag.textContent.trim(),
          min: tag.dataset.min || null,
          max: tag.dataset.max || null,
        });
      });
      if (selected.length) payload[name] = selected;
    });
    console.log('[선택된 필터]', payload);
    currentPage = 1;
    applyFilters();
  });

  /* ------------------ init ------------------ */
  applyFilters();
});



// 필터 버튼
document.addEventListener('DOMContentLoaded', () => {
  const btnFilter = document.querySelector('.btn-filter-pc-hidden');
  const filterWrap = document.getElementById('filter-wrap');
  const backdrop = document.querySelector('.filter-backdrop');
  const mq = window.matchMedia('(max-width: 1024px)');
  const viewBtn = document.querySelector('.btn-view');

  function openFilter() {
    filterWrap.classList.add('is-open');
    backdrop.hidden = false;
    btnFilter.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('body-locked');
  }

  function closeFilter() {
    filterWrap.classList.remove('is-open');
    backdrop.hidden = true;
    btnFilter.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('body-locked');
  }

  viewBtn?.addEventListener('click', () => {
  // 필터 닫기
  filterWrap.classList.remove('is-open');
  backdrop.hidden = true;
  btnFilter.setAttribute('aria-expanded', 'false');
  document.documentElement.classList.remove('body-locked');

  // ⚙️ 이 아래에 실제 필터 적용 기능 호출 가능
  // applyFilter();  ← 네가 나중에 구현할 필터 로직 자리
});

  btnFilter.addEventListener('click', () => {
    const isOpen = filterWrap.classList.contains('is-open');
    isOpen ? closeFilter() : openFilter();
  });

  backdrop.addEventListener('click', closeFilter);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && filterWrap.classList.contains('is-open')) {
      closeFilter();
    }
  });

  // 반응형 전환 시 상태 초기화
  mq.addEventListener('change', () => {
    if (!mq.matches) {
      filterWrap.classList.remove('is-open');
      backdrop.hidden = true;
      document.documentElement.classList.remove('body-locked');
    }
  });
});
