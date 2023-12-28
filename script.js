const menu = document.getElementById('sidemenu')
const header = document.querySelector(".headersection");
const body = document.querySelector(".body");
bar = document.getElementById("bars")
function openmenu(){

menu.style.right = "0"
bar.style.opacity = "0" 
}

function closemenu(){
    
    menu.style.right = "-200px"
    bar.style.opacity = "1"  
    header.style.top = "-80px" 
}




let lastScrollTop = 0;
window.addEventListener("scroll",function(){
    let scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        header.style.top = "-80px"
    }
    else{
        header.style.top = "0"
    }
    lastScrollTop =scrollTop
})


menu.addEventListener("click",closemenu)
body.addEventListener("click",closemenu)