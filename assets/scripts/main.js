let hamburger = document.getElementById("hamburger");
let menu_mobile = document.getElementById("menu_mobile");

hamburger.addEventListener('click',function(){
    menu_mobile.classList.toggle('show');
});