let list=document.querySelector(".pro");
let listCard=document.querySelector(".listCard");
let total=document.querySelector(".total");
let body=document.querySelector("body");


let products=[
    {
        id:"101",
        image:"assets/images/products/chain-saw.jpg",
        brand:"Husqvarna",
        title:"Husqvarna 125 Chainsaw",
        price:"6990"
    },
    {
        id:"102",
        image:"assets/images/products/garden-saw1.jpg",
        brand:"Garth",
        title:"Garth Wood Cutter Pruning Saw - 27 mm",
        price:"199"
    },
    {
        id:"103",
        image:"assets/images/products/spray-pump2.jpg",
        brand:"Shakti",
        title:"Shakti Battery Spray 12V Pump",
        price:"2649"
    },
    {
        id:"104",
        image:"assets/images/products/honda-brush-cutter.png",
        brand:"Honda",
        title:"Honda U2NT UMK-450T Petrol Brush Cutter",
        price:"34999"
    },
    {
        id:"105",
        image:"assets/images/products/honda-power-spray.jpg",
        brand:"Honda",
        title:"Honda 16 Liters Mild Steel Power Sprayer, Automatic",
        price:"28500"
    },
    {
        id:"106",
        image:"assets/images/products/power-spray-gun2.jpg",
        brand:"Honda",
        title:"Honda U2NT UMK-450T Petrol Brush Cutter",
        price:"1599"
    },
    {
        id:"107",
        image:"assets/images/products/power-tiller2.jpg",
        brand:"Really",
        title:"Really 2000 RPM 12 HP Power Tiller",
        price:"84899"
    },
    {
        id:"108",
        image:"assets/images/products/tractor1.jpg",
        brand:"John",
        title:"John Deere 6120M Tractor",
        price:"998799"
    },
    {
        id:"109",
        image:"assets/images/products/garden-saw2.jpg",
        brand:"Garth",
        title:"Garth Wood Cutter Pruning Saw - 27 mm",
        price:"199"
    },
    {
        id:"110",
        image:"assets/images/products/spray-pump1.jpg",
        brand:"Kisan Tools",
        title:"Kisan Tools Spray 14V Pump",
        price:"2999"
    },
    {
        id:"111",
        image:"assets/images/products/power-weeder3.jpg",
        brand:"kisankraft",
        title:"kisankraft power-weeder 11HP",
        price:"80000"
    },
    {
        id:"112",
        image:"assets/images/products/power-weeder2.jpg",
        brand:"Mitsuyama",
        title:"Mitsuyama 7 HP 4000W 212CC 4 Stroke Power Weeder",
        price:"31490"
    },
    {
        id:"113",
        image:"assets/images/products/garden-spray2.jpg",
        brand:"Ugaoo",
        title:"Ugaoo Pressure Spray Pump 1L",
        price:"249"
    },
    {
        id:"114",
        image:"assets/images/products/honda-power-spray2.jpg",
        brand:"Honda",
        title:"Honda 2HP 79.7CC 4 Stroke Petrol Water Pump",
        price:"22990"
    },
    {
        id:"115",
        image:"assets/images/products/husqvarna-brush-cutter.jpg",
        brand:"Husqvarna",
        title:"Husqvarna 1.2 hp 0.9 kW Petrol Brush Cutter",
        price:"18596"
    },
    {
        id:"116",
        image:"assets/images/products/power-spray-gun1.jpg",
        brand:"Honda",
        title:"Honda power spray gun",
        price:"1499"
    },
    {
        id:"117",
        image:"assets/images/products/power-tiller1.jpg",
        brand:"Mitsubeshi",
        title:"Mitsubeshi power tiller 13HP",
        price:"170000"
    },
    {
        id:"118",
        image:"assets/images/products/kisanKraft-brush-cutter.jpg",
        brand:"Husqvarna",
        title:"Husqvarna 1.2 hp 0.9 kW Petrol Brush Cutter",
        price:"9699"
    },
    {
        id:"119",
        image:"assets/images/products/power-tiller3.jpg",
        brand:"Kubota",
        title:"Kubota Power Tiller PEM140DI",
        price:"190000"
    },
    {
        id:"120",
        image:"assets/images/products/oleo-mac-brush-cutter.jpg",
        brand:"Oleo-mac",
        title:"Oleo-mac 1.8 hp 0.9 kW Petrol Brush Cutter 746T",
        price:"57999"
    },
    {
        id:"121",
        image:"assets/images/products/power-weeder1.jpg",
        brand:"Varsha",
        title:"Varsha 9hp Multi Function Power Weeder",
        price:"130000"
    },
    {
        id:"122",
        image:"assets/images/products/garden-spray1.jpg",
        brand:"Ugaoo",
        title:"Ugaoo Pressure Spray Pump 1L",
        price:"699"
    },
    {
        id:"123",
        image:"assets/images/products/spade.jpg",
        brand:"Mr.Khedut",
        title:"Mr.Khedut Iron Wooden Handle Garden Spade",
        price:"199"
    },
    {
        id:"124",
        image:"assets/images/products/pickmattock.jpg",
        brand:"Gardex",
        title:"Gardex Pick Mattock Fiber Handle",
        price:"279"
    }
];

let listCards=[];

const initApp=()=>{
    products.forEach((value,key)=>{
        let newDiv=document.createElement("div");
        newDiv.classList.add("feature-product");
        newDiv.innerHTML=`
        <img src="${value.image}" alt="">
                    <div class="product-description">
                        <div class="product-brand">${value.brand}</div>
                        <div class="product-name">${value.title}</div>
                        <div class="product-star">
                            <i class="fas fa-star star-color"></i>
                            <i class="fas fa-star star-color"></i>
                            <i class="fas fa-star star-color"></i>
                            <i class="fas fa-star star-color"></i>
                            <i class="fas fa-star star-color"></i>
                        </div>
                        <div class="product-price">₹ ${value.price}</div>
                    </div>
                    <button class="add-to-cart" onclick="addToCard(${key})"><i class="fa-solid fa-cart-shopping cart-color"></i></button>`;

        list.appendChild(newDiv)
    })
}

initApp();

const addToCard=(key)=>{
    if(listCards[key]==null){
        listCards[key]=JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity=1;
    }

    reloadCard();
}

const reloadCard=()=>{
    listCard.innerHTML="";
    // let count=0;
    let totalPrice=0;

    listCards.forEach((value,key)=>{
        
        totalPrice=totalPrice + parseInt(value.price);
        // count=count + value.quantity;

        if(value != null){
            let newDiv=document.createElement("li");
            newDiv.classList.add("cart-item")
            newDiv.innerHTML=`<div class="cart-img-container"><img src="${value.image}" alt=""></div>
                    <div class="cart-item-title">${value.title}</div>
                    <span class="cart-item-price">₹ ${value.price}</span>
                    <i class="fa-solid fa-remove delete-icon" onclick="deleteItem(${key})"></i>`;
            
            listCard.prepend(newDiv);
        }

        total.innerText = `₹ ${totalPrice}`;
        
    })
}

const deleteItem=(key)=>{
    listCards.pop(listCards[key]);
}
