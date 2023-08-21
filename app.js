const menuButton = document.getElementById ("menu-button")
const navbar = document.querySelector("nav")

const closeMenu = document.querySelector(".close")
const openMenu = document.querySelector(".menu")

    menuButton.addEventListener("click", () => {
 if (navbar.classList.contains(open)){
    navbar.classList.remove("open")
    closeMenu.Style.display = "none"
    openMenu.Style.display = "block"
 }
 else {
    navbar.classList.add("open")
    closeMenu.Style.display = "block"
    openMenu.Style.display = "none"
 }
})