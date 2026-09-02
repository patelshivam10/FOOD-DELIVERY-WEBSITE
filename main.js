var swiper = new Swiper('.mySwiper', {
    loop:true,
    navigation: {
        nextEl: '#next',
        prevEl: '#prev',
    },
});


const cartIcon= document.querySelector('.cart-icon');
const cartTab= document.querySelector('.cart-tab');
const closebtn= document.querySelector('.close-btn');


cartIcon.addEventListener('click',()=> cartTab.classList.add('cart-tab-active'));
closebtn.addEventListener('click',()=> cartTab.classList.remove('cart-tab-active'));

