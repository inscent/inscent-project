// product-detail-review.js (예시)
const reviewData = {
  "0": [ // id=0 제품의 리뷰들
    {
      user: "gidtnwhgdk1212",
      rating: 5.0,
      date: "2025.10.21",
      text: "가을과 어울리는 따뜻한 향이에요...",
      img: "./img/review1.jpg"
    },
    {
      user: "good0912",
      rating: 5.0,
      date: "2025.10.15",
      text: "주변에서 남자스킨향이 난다...",
      img: "./img/review2.jpg"
    },
    {
      user: "뿌뿌",
      rating: 4.0,
      date: "2025.10.08",
      text: "플로리드한 느낌! 은은하게 잔향이 남아요",
      img: "./img/review3.jpg"
    }
  ],
  // 다른 상품도 이렇게 추가 가능
  "1": [],
};

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);

  const pid = params.get('pid'); // 상품 배열용 index
  const id  = params.get('id');  // 실제 상품 고유 id

  // ① pid 기반으로 리뷰 가져오기 (기존 방식)
  let reviews = reviewData[pid] || [];

  // ② id 기반으로 리뷰 가져오기 (둘 다 가능하도록)
  if (id && reviewData[id]) {
    reviews = reviewData[id];
  }

  const reviewWrap = document.querySelector('.review__wrap');
  if (!reviewWrap) return;

  reviewWrap.innerHTML = reviews.length > 0 ? 
    reviews.map(r => `
      <div class="review__page">
        <div class="review__left">
          <p>${r.user}</p>
          <div class="review__left__1">
            <figure>
              ${'★'.repeat(Math.round(r.rating))}${'☆'.repeat(5 - Math.round(r.rating))}
            </figure>
            <p>${r.rating.toFixed(1)}</p>
            <p>작성일 ${r.date}</p>
          </div>
          <p>${r.text}</p>
        </div>
        ${r.img ? `<img class="review-img" src="${r.img}" alt="후기 이미지">` : ''}
      </div>
    `).join('')
  : `<p class="no-review">아직 작성된 리뷰가 없습니다.</p>`;
});
