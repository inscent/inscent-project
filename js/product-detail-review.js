// product-detail-review.js (예시)
const reviewData = {
  "1": [ // id=1 제품의 리뷰들
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
  "2": [],
};

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const productId = params.get('id'); // 주소의 id값
  const reviews = reviewData[productId] || []; // 리뷰 없으면 빈 배열

  const reviewWrap = document.querySelector('.review__wrap');
  if (!reviewWrap) return;

  // 기존 내용 지우고 새로 채우기
  reviewWrap.innerHTML = reviews.map(r => `
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
        <div class="review__left__2">
          <figure>
            <img src="./img/thumb-up.svg" alt="도움됨"><span>도움돼요</span>
            <img src="./img/thumb-down.svg" alt="도움안됨"><span>도움안돼요</span>
          </figure>
        </div>
      </div>
      <img class="review-img" src="${r.img}" alt="후기 이미지">
    </div>
  `).join('');
});
