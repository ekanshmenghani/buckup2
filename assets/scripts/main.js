let hamburger = document.getElementById("hamburger");
let menu_mobile = document.getElementById("menu");
let wallet = document.getElementById("wallet");
// let login_box = document.getElementById("login");
let pop_up = document.getElementById("pop_up");
let cancel = document.getElementById("cancel");
let body = document.getElementById("body");

hamburger.addEventListener('click',function(){
    menu_mobile.classList.toggle('show');
});




wallet.addEventListener('click',function(){
    pop_up.classList.add('show');
    body.classList.add('out_focus');
    document.body.style.overflow='hidden';

});
cancel.addEventListener('click',function(){
    pop_up.classList.remove('show');
    body.classList.remove('out_focus');
    document.body.style.overflow = 'auto';
});


