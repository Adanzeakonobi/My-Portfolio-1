/*function changeButton() {
    const hamburgerButton = document.getElementById('hamburger-btn');
    if (hamburgerButton.getAttribute('src') == ./icons/Union.png) {
        hamburgerButton.setAttribute('src' ./icons/quit_image.png);
    }
    else {
        hamburgerButton.setAttribute('src' ./icons/Union.png);
    }
}
functiontoggle() {
    const mobile-Menu = document.getElementById('mobile-menu-list');
mobile-Menu.classList.toggle('toggle-navbar');
changeButton();
}*/

const togglebutton=document.querySelector(".navbar-menu img")
console.log(togglebutton)
const m_menu=document.querySelecttor(".mobile-menu")

togglebutton.addEventListener("click", () => {
    m-menu.classList.toggle("active")
})
