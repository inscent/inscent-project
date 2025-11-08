fetch('/header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector(".header-copy-wrap").innerHTML += data
        // 성공 시 이벤트 추가

        /////////////////////////투명 헤더에 들어가는 기능들 inscent에 맞게 수정//////////////////////////////
    
        const threeLine = document.querySelector(".icon__header__all");
        const allDep1 = document.querySelectorAll(".all__dep1");
        const menuAll = document.querySelector(".header__all");
        const allInner = document.querySelector(".header__all__inner");
        const header = document.querySelector("header");
        const gnbItems = document.querySelectorAll(".header__gnb > ul > li");
        const banner = document.querySelector(".carousel");
        const gnbContainer = document.querySelector(".gnb__container");
        const item2deps = document.querySelectorAll(".gnb__container .inner__inner__frame");
        const gnb = document.querySelector(".header__gnb"); 
        
    
        let closeTimer = null; 

        let lastScrollY = 0;

        const container = document.querySelector(".carousel__container");
        if (container && !container.dataset.cloned) {
            container.innerHTML += container.innerHTML;
            container.dataset.cloned = "true";
        }

        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;


            if (currentScroll > 50 && currentScroll > lastScrollY) {
                if (banner) banner.classList.add("hide"); 
                header.style.top = "0";
                gnbContainer.style.top = "62px";
            } else if (currentScroll < 50) {
                if (banner) banner.classList.remove("hide");
                header.style.top = "38px";
                gnbContainer.style.top = "100px";
            }


            if (currentScroll > 0) {
                header.classList.add("scrolled"); 
            } else {
                if (!gnbContainer.classList.contains("on") && !menuAll.classList.contains("active")) { 
                    header.classList.remove("scrolled");
                }
            }

            lastScrollY = currentScroll;
        });


        threeLine.addEventListener("click", () => {
            menuAll.classList.toggle("active");
            header.classList.toggle("scrolled");
            allDep1.forEach((menu) => menu.classList.toggle("active"));
            gnbContainer.classList.remove("on"); 
            item2deps.forEach(item => item.classList.remove("on")); 
        });


        [menuAll, allInner].forEach(el => {
            el.addEventListener('mouseleave', () => {
                if (menuAll.classList.contains('active')) {
                    menuAll.classList.remove('active');
                    
                    if (!gnbContainer.classList.contains("on") && window.scrollY === 0) { 
                        header.classList.remove("scrolled");
                    }
                    
                    allDep1.forEach((menu) => menu.classList.remove("active"));
                }
            });
        });
        
    
        gnbItems.forEach((li, index) => {
            li.addEventListener("mouseover", () => {
                console.log('mouseover');
            
                if (closeTimer) {
                    clearTimeout(closeTimer);
                    closeTimer = null;
                }
                
            
                if (menuAll.classList.contains("active")) {
                    menuAll.classList.remove("active");
                    allDep1.forEach((menu) => menu.classList.remove("active"));
                }

            
                header.classList.add("scrolled"); 

            
                item2deps.forEach(item => item.classList.remove("on"));
                item2deps[index].classList.add("on");
                gnbContainer.classList.add("on");
            });
        });
        
    
        header.addEventListener("mouseenter", () => {
            if (closeTimer) {
                clearTimeout(closeTimer);
                closeTimer = null;
            }
        });

    
        // header.addEventListener("mouseleave", () => {
        
        //     if (gnbContainer.classList.contains("on")) {
        //         closeTimer = setTimeout(() => {
                    
                
        //             gnbContainer.classList.remove("on"); 
        //             item2deps.forEach(item => item.classList.remove("on"));
                    
                
        //             if (window.scrollY === 0) {
        //                 header.classList.remove("scrolled");
        //             }
        //             closeTimer = null;
        //         }, 10); 
        //     }
        // });

        gnbContainer.addEventListener("mouseleave", () => {
        
            if (gnbContainer.classList.contains("on")) {
                closeTimer = setTimeout(() => {
                    
                
                    gnbContainer.classList.remove("on"); 
                    item2deps.forEach(item => item.classList.remove("on"));
                    
                
                    if (window.scrollY === 0) {
                        header.classList.remove("scrolled");
                    }
                    closeTimer = null;
                }, 10); 
            }
        });


        if (gnb && allInner) {
            allInner.style.paddingLeft = gnb.getBoundingClientRect().left + "px";
        }


        // header의 backgroundcolor가 .header__all__inner(전체메뉴)에 마우스가 올려져있는동안 파란색으로 고정됨
        // 1. 마우스가 .header__all에 진입하면 header에 scrolled 클래스 추가 (배경색 고정)
        menuAll.addEventListener('mouseenter', () => {
            // 이미 all 메뉴가 열려있든 닫혀있든 상관없이 배경색 유지
            header.classList.add("scrolled");
        });

        // 2. 마우스가 .header__all에서 벗어나면 원래의 닫힘 로직 수행 (색상 해제 로직 포함)
        [menuAll, allInner].forEach(el => {
            el.addEventListener('mouseleave', () => {
                if (menuAll.classList.contains('active')) {
                    // all 메뉴가 열려있었다면 닫습니다.
                    menuAll.classList.remove('active');
                    allDep1.forEach((menu) => menu.classList.remove("active"));
                    
                    // GNB 메뉴도 닫혀있고, 스크롤도 0일 때만 scrolled 클래스를 해제
                    if (!gnbContainer.classList.contains("on") && window.scrollY === 0) { 
                        header.classList.remove("scrolled");
                    }
                } else if (!gnbContainer.classList.contains("on") && window.scrollY === 0) {
                    // all 메뉴는 닫혀있지만, 마우스 오버로 잠깐 scrolled가 됐을 때 해제
                    header.classList.remove("scrolled");
                }
            });
        });





    // 여기서부터 탭메뉴!

    document.addEventListener("DOMContentLoaded", () => {
        const openBtn = document.getElementById('openBtn');
        const sideMenu = document.getElementById('sideMenu');
        const overlay = document.getElementById('overlay');

        function closeMenu() {
            sideMenu.classList.remove('open');
            overlay.classList.remove('show');
            document.body.style.overflow = '';
        }

        openBtn.addEventListener('click', (e) => {
        
            e.preventDefault(); 
            sideMenu.classList.add('open');
            overlay.classList.add('show');
            document.body.style.overflow = 'hidden';
            
        });

        overlay.addEventListener('click', closeMenu);

    })
})



        // 색깔 변하는거 근데 안씀 
    // function getBrightness(r, g, b) {
    //   return (r * 299 + g * 587 + b * 114) / 1000;
    // }

    // function isBrightColor(rgbString) {
    //   const [r, g, b] = rgbString.match(/\d+/g).map(Number);
    //   const brightness = getBrightness(r, g, b);
    //   return brightness > 128;
    // }

    // function checkBackgroundBelowHeader() {
    //   const header = document.querySelector("header");
    //   const sections = document.querySelectorAll("section, div");

    //   const headerBottom = header.getBoundingClientRect().bottom; 

    //   let targetElement = null;

    //   sections.forEach(el => {
    //     const rect = el.getBoundingClientRect();
    //     if (headerBottom >= rect.top && headerBottom < rect.bottom) {
    //       targetElement = el;
    //     }
    //   });

    //   if (targetElement) {
    //     const bgColor = window.getComputedStyle(targetElement).backgroundColor;
    //     const nums = bgColor.match(/\d+/g);
    //     if (!nums) return;

    //     if (isBrightColor(bgColor)) {
    //       header.classList.add("scrolled");
    //     } else {
    //       header.classList.remove("scrolled");
    //     }
    //   }
    // }

    // checkBackgroundBelowHeader()

            ///////////////////////////////////////////////////
        



        



.catch(error => console.log("헤더 추가 에러 : ",error))


fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector(".footer-real-wrap").innerHTML += data
    })
    .catch(error => console.log("푸터 추가 에러 : ",error))
