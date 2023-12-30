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


const popup = document.querySelector(".popup");

const okayBtn = document.querySelector(".okay");
const sendBtn = document.querySelector(".btn-submit");


function showpopup(){
    popup.style.bottom = "20%"
}
function closepopup(){
    popup.style.bottom = "-50%"
}

okayBtn.addEventListener("click",closepopup)

const scriptURL = 'https://script.google.com/macros/s/AKfycbzmBj7oYyN_kcLW94A7cKw8clG_qEhaPbbYyDJc-Ayqzh-I_c25L6lFtj8urtBgGdHPHg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
    showpopup();
      
  })