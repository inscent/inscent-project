document.addEventListener("DOMContentLoaded", () => {
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



   function getBrightness(r, g, b) {
  return (r * 299 + g * 587 + b * 114) / 1000;
}

function isBrightColor(rgbString) {
  const [r, g, b] = rgbString.match(/\d+/g).map(Number);
  const brightness = getBrightness(r, g, b);
  return brightness > 128;
}

function checkBackgroundBelowHeader() {
  const header = document.querySelector("header");
  const sections = document.querySelectorAll("section, div");

  const headerBottom = header.getBoundingClientRect().bottom + window.scrollY;

  let targetElement = null;
  sections.forEach(el => {
    const rect = el.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const bottom = top + rect.height;
    if (headerBottom >= top && headerBottom < bottom) {
      targetElement = el;
    }
  });

  if (targetElement) {
    const bgColor = window.getComputedStyle(targetElement).backgroundColor;

    if (isBrightColor(bgColor)) {
      console.log("header 아래는 밝은 배경 🌞");
      // header.style.color = "black";
      // header.style.backgroundColor = "white";
      header.classList.add("scrolled")
    } else {
      console.log("header 아래는 어두운 배경 🌙");
      // header.style.color = "white";
      // header.style.backgroundColor = "transparent";
      header.classList.remove("scrolled")
    }
  }
}

window.addEventListener("scroll", checkBackgroundBelowHeader);
window.addEventListener("load", checkBackgroundBelowHeader); // 첫 로드 시도 포함


})