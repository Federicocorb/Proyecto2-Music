const NavBoton = document.querySelector(".boton-logo")
const NavMenu = document.querySelector(".nav-menu")
NavBoton.addEventListener("click", () => {
    NavMenu.classList.toggle('Navmenu_visible')
})