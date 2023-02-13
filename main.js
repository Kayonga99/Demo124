// const lable = document.querySelectorAll
const popUpp = document.querySelector(".menu")
const openMenu = document.querySelector(".parent")
// console.log(openMenu);
const closeMenu = document.querySelector(".close")


openMenu.addEventListener("click", () => {
    popUpp.style.display = "flex";
    openMenu.style.display = "none"
})



closeMenu.addEventListener("click", () => {
    popUpp.style.display = "none"; 
    openMenu.style.display = "flex"

})