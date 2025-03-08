
let menu = document.querySelector(".fa-bars");
let navbarlinks = document.querySelector(".navbar .container .row  .naihati .nav-menu .menu-top");

menu.onclick = function (){
    menu.classList.toggle("fa-xmark");
    navbarlinks.classList.toggle("active");
}