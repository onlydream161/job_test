const menuIcon = document.querySelector('.header__menu-burger')
const menuBody = document.querySelector('.menu__body');
const buttonsOpenPopup = document.querySelectorAll('.button__open-popup');
const buttonClosePopup = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');


if(buttonsOpenPopup.length>0){
    buttonsOpenPopup.forEach((el)=>{
        el.addEventListener('click',()=>{
            menuBody.classList.toggle('_active');
            menuIcon.classList.toggle('_active');
            popup.classList.add('popup_opened')
        })
    })
}

if(menuIcon){
    menuIcon.addEventListener('click',(e)=>{
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active')
    })
}
 
buttonClosePopup.addEventListener('click',()=>{
    popup.classList.remove('popup_opened')
})
new Swiper('.swiper',{
    navigation:{
        nextEl: '.swiper__pogination-next',
        prevEl: '.swiper__pogination-prev'
    },
    pagination:{
        el: '.swiper-pagination',
        type: 'fraction',
    }
 });


