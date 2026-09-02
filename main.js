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
const cardList= document.querySelector('.card-list');


cartIcon.addEventListener('click',()=> cartTab.classList.add('cart-tab-active'));
closebtn.addEventListener('click',()=> cartTab.classList.remove('cart-tab-active'));

let productList=[];

const showCart=()=>{
    productList.forEach(product => {
        const orderCart= document.createElement('div');
        orderCart.classList.add('order-cart');
    
        orderCard.innerHTML=`
        <div class="card-image">
            <img src="images/burger.png">
        </div>
        <div class="Double Beef Burger">
            <h4>299</h4>
            <h4 class=price>299</h4>
            <a href="#" class="btn">Add to Cart</a>
        </div>
        `;
        cartTab.appendChild(orderCart);
    })
}

const initApp=()=>{
    fetch('products.json').then
    (response=>response.jason()).then
    (data=>{
        productList=data;
        showCart();
    })
}
initApp();
