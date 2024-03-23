let cart=document.querySelector(".cart-icon");
let cartWindow=document.querySelector(".card");
let closeShopping=document.querySelector(".closeShopping");


cart.addEventListener("click",()=>{
    cartWindow.classList.toggle("display-cart");
    cartWindow.classList.toggle("hide-cart");
})

closeShopping.addEventListener("click",()=>{
    cartWindow.classList.toggle("display-cart");
    cartWindow.classList.toggle("hide-cart");
})

// for(let cartBtn of addToCartButton){
//     cartBtn.addEventListener("click",()=>{
//         let imgSrc=cartBtn.parentElement.firstElementChild.src;
//         imgSrc=imgSrc.slice(22);
//         let price=cartBtn.parentElement.getElementsByClassName("product-price");
        
//         price=price[0].innerText;

//         let li=document.createElement("li");
//         li.classList.add("cart-item");
//         li.innerHTML=`<div class="cart-img-container"><img src="${imgSrc}" alt=""></div>
//         <span class="cart-item-price">${price}</span>
//         <input type="number" class="quantity" value="1" min="1" max="5">
//         <i class="fa-solid fa-remove delete-icon"></i>`;

//         listCard.prepend(li);

        

//     });
// };