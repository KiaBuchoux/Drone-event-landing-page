const menuBtn = document.querySelector(".menu-btn")
const menuList = document.querySelector("ul")


menuBtn.addEventListener("click", ()=>{
    menuList.style.transform="translateX(0)"
})

document.querySelector(".exit-button").addEventListener("click", ()=>menuList.style.transform="translateX(100%)")