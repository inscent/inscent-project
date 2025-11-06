document.addEventListener("DOMContentLoaded", () => {
  const searchOverlay = document.getElementById("search__overlay");
  const searchOpenBtn = document.getElementById("searchOpenBtn");
  const searchInput   = document.getElementById("search__input");
  const searchClose   = document.querySelector(".search__close"); // 선택(있을 때만)

  function openSearch() {
    searchOverlay.classList.add("search-open");
    searchOpenBtn?.setAttribute("aria-expanded", "true");
    // 다음 프레임에 포커스 주면 스크롤 점프 방지됨
    requestAnimationFrame(() => searchInput?.focus());
  }
  function closeSearch() {
    searchOverlay.classList.remove("search-open");
    searchOpenBtn?.setAttribute("aria-expanded", "false");
  }

  // 열기
  if (searchOpenBtn) {
    searchOpenBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // 토글로 쓰고 싶으면 아래 두 줄을 교체:
      // searchOverlay.classList.toggle("search-open");
      // searchOpenBtn.setAttribute("aria-expanded",
      //   searchOverlay.classList.contains("search-open") ? "true" : "false");
      openSearch();
    });
  }

  // 닫기(X)
  if (searchClose) {
    searchClose.addEventListener("click", closeSearch);
  }

  // ESC로 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSearch();
  });
});
