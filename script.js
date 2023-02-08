//Ocultar-Mostrar Menu
let navToggle = document.querySelector(".toggle");
let navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible")
});



//Botton ir arriba

const btn_scrolltop = document.getElementById("boton-ir-arriba")
btn_scrolltop.addEventListener('click',() => {
    window.scrollTo(0, 0)
}) 

window.onscroll = () => {
   if (window.scrollY < 400) {
    btn_scrolltop.classList.remove("boton-ir-arriba-m")
   } else {
    btn_scrolltop.classList.add("boton-ir-arriba-m")
   }
}