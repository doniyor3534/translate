const btn = document.querySelector(".navbtn")

btn.addEventListener("click",()=>{
    if(btn.className !== "navbtn active"){
        btn.classList.add('active')
    }else{
        btn.classList.remove('active')
    }
})