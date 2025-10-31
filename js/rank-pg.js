/* =========================
   데이터 (네가 보낸 그대로)
   ========================= */
const finalList = [
  // 
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
];

/* =========================
   설정 & 상태
   ========================= */
const VISIBLE_CATEGORIES = ["PERFUME","BODY","HAIR","ETC"];
const INCLUDE_ALL = true;               // ALL 탭 사용 여부
const PAGE_SIZE   = 10;                 // 페이지당 10개
const state = { active: INCLUDE_ALL ? "ALL" : "PERFUME", page: 1 };

/* =========================
   유틸
   ========================= */
const $ = (sel) => document.querySelector(sel);

function countByCategory(items){
  return items.reduce((acc, cur)=>{
    if (VISIBLE_CATEGORIES.includes(cur.category)) {
      acc[cur.category] = (acc[cur.category] || 0) + 1;
    }
    return acc;
  }, {});
}

function getFilteredItems(all){
  return (state.active === "ALL")
    ? all.filter(it => VISIBLE_CATEGORIES.includes(it.category))
    : all.filter(it => it.category === state.active);
}

/* =========================
   렌더: 리스트 (클래스명 유지)
   ========================= */
function renderList(items, offset=0, targetSelector="#rank-list"){
  const target = $(targetSelector);
  if (!target) return;

  target.innerHTML = items.map((item, idx) => `
    <li class="product-box">
      <a href="#">
      <div class="rank-num">${offset + idx + 1}</div>
        <figure>
          <div class="thumb">
            <img src="${item.image}" alt="${item.brand} ${item.name}" loading="lazy"onerror="this.src='./img/err-img.jpg'">
          </div>
          <figcaption>
            <p class="brand">${item.brand}</p>
            <h4 class="name">${item.name}</h4>
            <p class="price">₩${(item.price ?? 0).toLocaleString()}</p>
            <div class="rating">
              <img src="./img/icons/star.svg" alt="별점">
              <span>${(item.rating ?? 0).toFixed(2)}</span>
            </div>
          </figcaption>
        </figure>
      </a>
    </li>
  `).join('');
}

/* =========================
   렌더: 필터 탭
   ========================= */
function renderFilter(items, targetSelector="#rank-filter"){
  const target = $(targetSelector);
  if (!target) return;

  const counts = countByCategory(items);
  const total  = Object.values(counts).reduce((a,b)=>a+b,0);

  const tabs = INCLUDE_ALL
    ? [{ key:"ALL", label:"ALL", count: total }, ...VISIBLE_CATEGORIES.map(cat => ({ key:cat, label:cat, count:counts[cat]||0 }))]
    : VISIBLE_CATEGORIES.map(cat => ({ key:cat, label:cat, count:counts[cat]||0 }));

  target.innerHTML = tabs.map(t => `
    <li>
      <button
        class="rank-filter-btn${state.active===t.key ? ' is-active' : ''}"
        type="button"
        data-cat="${t.key}"
        aria-pressed="${state.active===t.key ? 'true' : 'false'}">
        ${t.label} <span class="count">${t.count}</span>
      </button>
    </li>
  `).join('');
}

/* =========================
   렌더: 페이지네이션
   ========================= */
function renderPager(totalItems, targetSelector="#rank-pager"){
  const target = $(targetSelector);
  if (!target) return;

  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
  state.page = Math.min(state.page, totalPages);

  const mkBtn = (label, page, {active=false, disabled=false}={}) => `
    <li>
      <button ${disabled?'disabled':''}
              class="${active?'is-active':''}"
              type="button"
              data-page="${page}">
        ${label}
      </button>
    </li>
  `;

  const cur = state.page;
  let html = '';

  // Prev
  html += mkBtn('‹', Math.max(1, cur-1), { disabled: cur===1 });

  // 숫자 버튼
  for (let p=1; p<=totalPages; p++){
    html += mkBtn(String(p), p, { active: p===cur });
  }

  // Next
  html += mkBtn('›', Math.min(totalPages, cur+1), { disabled: cur===totalPages });

  target.innerHTML = html;

  // 이벤트 위임
  target.onclick = (e) => {
    const btn = e.target.closest('button[data-page]');
    if (!btn || btn.disabled) return;
    state.page = Number(btn.dataset.page);
    apply(); // 다시 렌더
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

/* =========================
   컨트롤: 적용(필터 + 페이지)
   ========================= */
function apply(){
  const filtered = getFilteredItems(finalList);
  const total  = filtered.length;
  const start  = (state.page - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  renderList(pageItems, start, "#rank-list");
  renderFilter(finalList, "#rank-filter");
  renderPager(total, "#rank-pager");

  const filterRoot = $("#rank-filter");
  if (!filterRoot.dataset.bound) {
    filterRoot.addEventListener("click", (e)=>{
      const btn = e.target.closest(".rank-filter-btn");
      if (!btn) return;
      state.active = btn.dataset.cat;
      state.page = 1;
      apply();
    });
    filterRoot.dataset.bound = "1";
  }
}

/* =========================
   부팅
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  apply(); // 기본: ALL 1페이지
});
