document.addEventListener("DOMContentLoaded", () => {
    // 필요한 HTML 요소들을 가져옵니다. (ID 일치 확인)
    const searchIconLink = document.querySelector('.search__icon a'); 
    const searchOverlay = document.getElementById('search__overlay');
    const searchInput = document.getElementById('search__input'); 
    // 이미지에 닫기 버튼이 없으므로, 따로 closeBtn은 사용하지 않습니다.
    // 검색 아이콘을 다시 누르면 닫히도록 로직을 변경합니다.

    // 검색창 토글 함수
    function toggleSearch(e) {
        e.preventDefault(); 
        
        // search-open 클래스가 있으면 제거하고, 없으면 추가합니다.
        const isOpen = searchOverlay.classList.toggle('search-open');

        if (isOpen) {
            // 열렸을 때
            document.body.style.overflow = 'hidden'; // 스크롤 방지
            if (searchInput) {
                searchInput.focus(); // 입력 필드 포커스
            }
        } else {
            // 닫혔을 때
            document.body.style.overflow = ''; // 스크롤 허용
            if (searchInput) {
                searchInput.blur(); // 입력 필드 포커스 해제
            }
        }
    }

    // 3. 이벤트 리스너 등록

    if (searchIconLink) {
        searchIconLink.addEventListener('click', toggleSearch);
    }
    
    // ESC 키로 닫기
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('search-open')) {
            // ESC 키를 누르면 닫기 (토글 함수 재사용)
            toggleSearch(new Event('click')); // 임시 이벤트 객체를 전달하여 toggleSearch 호출
        }
    });
});