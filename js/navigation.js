// navigation
const list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink));

// Menu toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let navbar_container = document.querySelector('.navbar_container')
let main = document.querySelector('.main');
let toggle2 = document.querySelector('.toggle2');

toggle.onclick = function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    navbar_container.classList.toggle('active');
}
let toggle_item = document.querySelector('.toggle_item');
let openToggle = false;

toggle_item.addEventListener('click', ()=>{
    if(!openToggle){
        toggle_item.classList.add('open');
        openToggle = true;
    }else{
        toggle_item.classList.remove('open');
        openToggle = false;
    }
})