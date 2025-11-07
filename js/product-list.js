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
/* ------------------ data (thumbList로 교체) ------------------ */
// window.thumbList(=product-thumb.js)가 먼저 로드되어 있어야 함
/* ------------------ data (thumbList로 교체) ------------------ */
// product-thumb.js가 먼저 로드되어 있어야 함 (HTML에서 순서 확인)
const SOURCE = (typeof thumbList !== 'undefined') ? thumbList : (window.thumbList || []);
if (!Array.isArray(SOURCE)) {
  console.error('[ERROR] thumbList가 로드되지 않았습니다. product-thumb.js 스크립트 순서를 확인하세요.');
}

const PRODUCTS = SOURCE.map((p, idx) => {
  const firstVariantPrice =
    Array.isArray(p.variants) && p.variants.length ? Number(p.variants[0].price) : null;
  const price = firstVariantPrice ?? (p.price != null ? Number(p.price) : 0);

  return {
    brand: p.brand,
    name: p.name,
    category: p.category,
    image: p.image,
    rating: p.rating,
    tags: p.tags || null,
    price,                 // ✅ 리스트/정렬/필터 공통 사용
    pid: idx,
    link: `./detailpg.html?pid=${idx}` // 필요 시 파일명 맞게 수정
  };
});


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

  // backdrop.addEventListener('click', closeFilter);

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
