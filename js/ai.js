document.addEventListener("DOMContentLoaded",()=>{

    const firstFirst = document.querySelector("#firstfirst")
    firstFirst.addEventListener("click",()=>{
        swiper1.slideTo(1)    
    })
    
    document.querySelectorAll(".ai-query-step-1>li").forEach(li=>{
        li.addEventListener("click",()=>{
            swiper1.slideTo(2)
        })
    })

    document.querySelectorAll(".ai-query-step-2>li").forEach(li=>{
        li.addEventListener("click",()=>{
            swiper1.slideTo(3)
        })
    })

    document.querySelectorAll(".ai-query-step-3>li").forEach(li=>{
        li.addEventListener("click",()=>{
            swiper1.slideTo(4)
        })
    })
    
    document.querySelectorAll(".ai-query-step-4>li").forEach(li=>{
        li.addEventListener("click",()=>{
            swiper1.slideTo(5)
        })
    })

    document.querySelectorAll(".ai-query-step-5>li").forEach(li=>{
        li.addEventListener("click",()=>{
            swiper1.slideTo(6)
        })
    })
    
    document.querySelector(".go-to-first").addEventListener("click",()=>{
            swiper1.slideTo(0)
        })
   
})