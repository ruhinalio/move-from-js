const burger= document.querySelector(".fa-bars")
const closePage= document.querySelector(".fa-xmark")
const navLinks= document.querySelector(".nav-links")

burger.addEventListener("click", ()=>{
    burger.classList.remove("active")
    closePage.classList.add("active")
    navLinks.classList.add("active")
})

closePage.addEventListener("click", ()=>{
    closePage.classList.remove("active")
    burger.classList.add("active")
    navLinks.classList.remove("active")
})