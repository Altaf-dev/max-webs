const MENU_BTN = document.querySelector('.mobile-btn')
const MENU = document.querySelector('.header__menu')



MENU_BTN.onclick = function () {
    MENU_BTN.classList.toggle('btn-close')
    MENU.classList.toggle('menu-open')
}


$(document).ready(function () {
    $(".phone-mask").mask("9 (999) 999-99-99");
});

