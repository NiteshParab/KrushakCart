
let inputImage=document.querySelector(".add-img-container img");
let inputUrl=document.querySelector(".add-img-container input");
let inputBrandName=document.querySelector(".add-product-brand input");
let inputProductName=document.querySelector(".add-product-name input");
let inputProductPrice=document.querySelector(".add-product-price input");
let inputProductDescription=document.querySelector(".add-product-des input");
let addButton=document.querySelector(".add-button");

let container=document.querySelector(".product")
console.log(container)
// let productImage=document.querySelector(".feature-product img");
// let productBrand=document.querySelector(".product description .product-brand");
// let productName=document.querySelector(".product description .product-name");
// let productPrice=document.querySelector(".product description .product-price");


inputUrl.addEventListener("change",()=>{
    let imageUrl=inputUrl.value.slice(12);
    inputImage.src=`/assets/images/products/${imageUrl}`;
});


function createProduct(){
    let myProduct=`<img src="/assets/images/products/${inputUrl.value.slice(12)}" 
                    alt="${inputProductName.value}">
                        <div class="product-description">
                            <div class="product-brand">${inputBrandName.value}</div>
                            <div class="product-name">${inputProductName.value}</div>
                            <div class="product-star">
                                <i class="fas fa-star star-color"></i>
                                <i class="fas fa-star star-color"></i>
                                <i class="fas fa-star star-color"></i>
                                <i class="fas fa-star star-color"></i>
                                <i class="fas fa-star star-color"></i>
                            </div>
                            <div class="product-price">₹ ${inputProductPrice.value}</div>
                        </div>
                        <button class="add-to-cart"><i class="fa-solid fa-cart-shopping    cart-color"></i></button>`;
    
    let div=document.createElement("div");
    div.classList.add("feature-product");
    div.innerHTML=myProduct;

    console.log(div)
    // productContainer.append(div);
    // console.log(productContainer)
    
}

addButton.addEventListener("click",()=>{
    createProduct();
})







