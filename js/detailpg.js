// ---------------------------
// 쿼리로 상세 상품 선택 (sid 우선, 없으면 pid/id)
function getProductFromQuery(list) {
  const params = new URLSearchParams(location.search);

  // 1) sid = encodeURIComponent(`${brand}|${name}`)
  const sid = params.get('sid');
  if (sid) {
    const key = decodeURIComponent(sid);
    const foundIndex = list.findIndex(
      x => `${x.brand}|${x.name}` === key
    );
    if (foundIndex !== -1) {
      return { product: list[foundIndex], index: foundIndex };
    }
  }

  // 2) 백업: pid 또는 id (숫자 인덱스)
  const raw = params.get('pid') ?? params.get('id') ;
  const idx = parseInt(raw, 10);
  if (!Number.isNaN(idx) && idx >= 0 && idx < list.length) {
    return { product: list[idx], index: idx };
  }

  // 3) 최후: 0번
  return { product: list[0], index: 0 };
}

const { product: PRODUCT, index: PRODUCT_INDEX } = getProductFromQuery(detailList);



// KRW 통화 포맷
const krw = new Intl.NumberFormat('ko-KR', {
  style: 'currency',
  currency: 'KRW',
  maximumFractionDigits: 0
});

// 안전 쿼리
const $  = (sel, scope = document) => scope.querySelector(sel);
const $$ = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));

// ---------------------------
// 1) 공통: 페이지에 상품 데이터 주입
document.addEventListener('DOMContentLoaded', () => {
  if (!PRODUCT) return;

  // 좌측 이미지(메인) & 상세 이미지
  const mainImg = $('.top__left__space figure img');
  if (mainImg && PRODUCT.image) {
    mainImg.src = PRODUCT.image;
    mainImg.alt = `${PRODUCT.brand} ${PRODUCT.name} 상세 이미지`;
  }
// 상세 이미지가 있으면 그걸 쓰고, 없으면 기존 이미지 사용
const detailImg = $('.tab-all .middle figure img');
if (detailImg) {
  const detail = PRODUCT.detailImages; // 문자열 or 배열 가능
  
  // detailImages가 "문자열"이면 그대로 넣고, 배열이면 첫 번째 이미지 사용
  if (detail) {
    if (Array.isArray(detail)) {
      detailImg.src = detail[0]; 
    } else {
      detailImg.src = detail; // 문자열일 경우 그대로
    }
  } else {
    // detailImages가 없으면 기존처럼 메인 이미지 사용
    detailImg.src = PRODUCT.image;
  }

  detailImg.alt = `${PRODUCT.brand} ${PRODUCT.name} 상세 이미지`;
}

// 제품안내 주입: .product__info 안에 info(문단) → 없으면 specs(표) → 둘 다 없으면 유지
const infoBox = document.querySelector('.product__info');
if (infoBox) {
  if (PRODUCT.info) {
    infoBox.innerHTML = PRODUCT.info
      .trim()
      .replace(/\n/g, '<br>'); // 줄바꿈 유지
  } 
}
  // 우측 패널 + 바텀시트: 두 스코프에 동일 로직 적용
  const scopes = [
    document.querySelector('.top__right__space'),
    document.querySelector('#buy-sheet .sheet-panel') // 바텀시트 내부
  ].filter(Boolean);

  scopes.forEach(scope => mountDetail(scope, PRODUCT));
});

// ---------------------------
// 2) 스코프별(PC/시트) 마운트
function mountDetail(scope, product) {
  if (!scope) return;

  // 태그 채우기 (.tag > span*3)
  const tagWrap = $('.tag', scope);
  if (tagWrap && product.tags) {
    tagWrap.innerHTML = '';
    const { scent, mood, lasting } = product.tags;
    [mood, scent, lasting].forEach(txt => {
      if (!txt) return;
      const span = document.createElement('span');
      span.textContent = txt;
      tagWrap.appendChild(span);
    });
  }

  // 제목 영역 (.title p:nth-of-type(1..3))
  const titleWrap = $('.title', scope);
  if (titleWrap) {
    // 초기 구조 보장
    if (!titleWrap.children.length) {
      titleWrap.innerHTML = `
        <p class="brand"></p>
        <p class="name"></p>
        <p class="price"></p>
      `;
    }
    const p1 = titleWrap.children[0];
    const p2 = titleWrap.children[1];
    const p3 = titleWrap.children[2];

    if (p1) p1.textContent = product.brand || '';
    if (p2) p2.textContent = product.name || '';
    // 기본 가격은 첫 번째 variant 기준
    const basePrice = product.variants?.[0]?.price || 0;
    if (p3) p3.textContent = basePrice ? krw.format(basePrice) : '';
  }

  // 옵션 선택 select(.choose select) - variants로 채우기
  const selectEl = $('.choose select', scope);
  if (selectEl) {
    selectEl.innerHTML = '';
    (product.variants || []).forEach((v, i) => {
      const opt = document.createElement('option');
      opt.value = v.size;
      opt.textContent = v.size;
      opt.setAttribute('data-price', String(v.price));
      if (i === 0) opt.selected = true;
      selectEl.appendChild(opt);
    });
  }

  // 수량 박스(.upanddown > span -, 숫자, +) 없으면 생성
  let updown = $('.upanddown', scope);
  if (!updown) {
    const ctn = document.createElement('div');
    ctn.className = 'upanddown';
    ctn.innerHTML = `<span>-</span><span>1</span><span>+</span>`;
    // 기본 위치는 .choose 뒤 / 없으면 .title 뒤
    const anchor = $('.choose', scope) || $('.title', scope) || scope;
    anchor.parentNode.insertBefore(ctn, anchor.nextSibling);
    updown = ctn;
  }

  // 요약 영역(.cost__left / .cost__right) — 오른쪽 3개 li(사이즈/수량/총액) 보장
  const costRight = $('.cost__right', scope);
  if (costRight) {
    let ul = $('ul', costRight);
    if (!ul) {
      ul = document.createElement('ul');
      costRight.appendChild(ul);
    }
    if (ul.children.length < 3) {
      ul.innerHTML = `
        <li></li>
        <li></li>
        <li></li>
      `;
    }
  }

  // 이벤트 & 렌더 연결
  initOrderInteractions(scope);
  renderOrder(scope);
}

// ---------------------------
// 3) 상호작용(수량 ±, 옵션 변경) 설치
function initOrderInteractions(scope) {
  const selectEl  = $('.choose select', scope);
  const updown    = $('.upanddown', scope);
  const minusBtn  = updown?.children?.[0] || null;
  const qtySpan   = updown?.children?.[1] || null;
  const plusBtn   = updown?.children?.[2] || null;

  // 초기 수량 보정
  if (qtySpan) {
    const n = parseInt(qtySpan.textContent.trim(), 10);
    qtySpan.textContent = String(Number.isNaN(n) ? 1 : clamp(n, 1, 99));
  }

  if (minusBtn && qtySpan) {
    minusBtn.addEventListener('click', () => {
      const current = parseInt(qtySpan.textContent.trim(), 10) || 1;
      const next = clamp(current - 1, 1, 99);
      qtySpan.textContent = String(next);
      renderOrder(scope);
    });
  }
  if (plusBtn && qtySpan) {
    plusBtn.addEventListener('click', () => {
      const current = parseInt(qtySpan.textContent.trim(), 10) || 1;
      const next = clamp(current + 1, 1, 99);
      qtySpan.textContent = String(next);
      renderOrder(scope);
    });
  }
  if (selectEl) {
    selectEl.addEventListener('change', () => {
      renderOrder(scope);
    });
  }
}
// ---------------------------
// 4) 렌더(사이즈/수량/총액 업데이트)
function renderOrder(scope) {
  const selectEl  = $('.choose select', scope);
  const updown    = $('.upanddown', scope);
  const qtySpan   = updown?.children?.[1] || null;

  const costRight = $('.cost__right', scope);
  const rightLis  = costRight ? costRight.querySelectorAll('ul li') : null;
  if (!rightLis || rightLis.length < 3) return;

  const sizeLabel = getSelectedLabel(selectEl);
  const unitPrice = getSelectedPrice(selectEl);
  const qty       = clamp(parseInt(qtySpan?.textContent.trim(), 10) || 1, 1, 99);

  rightLis[0].textContent = sizeLabel || '-';
  rightLis[1].textContent = `${qty}개`;
  rightLis[2].textContent = `총 ${krw.format(unitPrice * qty)}`;

  // 상단 가격 표시(.title p:nth-of-type(3))도 동기화
  const priceP = $('.title p:nth-of-type(3)', scope);
  if (priceP) {
    priceP.textContent = krw.format(unitPrice);
  }
}

// ---------------------------
// helpers
function getSelectedLabel(select) {
  if (!select) return '';
  const opt = select.options[select.selectedIndex];
  return (opt?.text || opt?.value || '').trim();
}
function getSelectedPrice(select) {
  if (!select) return 0;
  const opt = select.options[select.selectedIndex];
  const dataVal = opt?.getAttribute('data-price');
  if (dataVal && !Number.isNaN(+dataVal)) return +dataVal;

  // detailList 기반(현재 PRODUCT)에서 매칭
  const size = (opt?.value || opt?.text || '').trim();
  const v = (PRODUCT.variants || []).find(x => x.size === size);
  if (v) return v.price;

  // 최후: 라벨에서 숫자 추출
  const guess = parseInt(size.replace(/[^\d]/g, ''), 10);
  return Number.isNaN(guess) ? 0 : guess;
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
