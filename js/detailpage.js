document.addEventListener("DOMContentLoaded",()=>{
    let informationTitles = document.querySelectorAll(".choice li .information")

    informationTitles.forEach(title => {
        title.addEventListener('click',function(){
            let listItem = this.parentElement;
            listItem.classList.toggle('active');
        })
    })

})