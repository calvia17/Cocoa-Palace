/*---------------- REFERENCES -----------------------
Used code from the following youtube videos:
    https://www.youtube.com/watch?v=B20Getj_Zk4
    https://www.youtube.com/watch?v=PoTGs38DR9E
    https://www.youtube.com/watch?v=tEAl7L62GEw&t=2s
    https://www.youtube.com/watch?v=QNXQfdgIXLw&t=518s
    https://www.youtube.com/watch?v=IY5UN82FZ2Q&t=1251s
    https://www.youtube.com/watch?v=9HcxHDS2w1s&t=542s

Used code from the following sites:
    https://stackoverflow.com/
    https://www.w3schools.com/
    https://www.tutorialspoint.com/index.htm
*/

/* List of all the products available along with their price and quantity */
let products = [
    {
        name: 'Chocolate cake',
        tag: 'chocolate_cake',
        price: 50,
        inCart: 0,
        text: 'Chocolate cake<br>$50'
    },
    {
        name: 'Red velvet cake',
        tag: 'red_velvet_cake',
        price: 65,
        inCart: 0,
        text: 'Red velvet cake<br>$65'
    },
    {
        name: 'Fruit cake',
        tag: 'fruit_cake',
        price: 50,
        inCart: 0,
        text: 'Fruit cake<br>$50'
    },
    {
        name: 'Fudge cake',
        tag: 'fudge_cake',
        price: 65,
        inCart: 0,
        text: 'Fudge cake<br>$65'
    },

    {
        name: 'Mango cheese cake',
        tag: 'mango_cheese_cake',
        price: 50,
        inCart: 0,
        text: 'Mango cheese cake<br>$50'
    },
    {
        name: 'Chocolate coconut cake',
        tag: 'chocolate_coconut_cake',
        price: 65,
        inCart: 0,
        text: 'Chocolate coconut cake<br>$65'
    },
    {
        name: 'Vanilla fruit cake',
        tag: 'vanilla_fruit_cake',
        price: 50,
        inCart: 0,
        text: 'Vanilla fruit cake<br>$50'
    },
    {
        name: 'Chocolate truffle cake',
        tag: 'chocolate_truffle_cake',
        price: 65,
        inCart: 0,
        text: 'Chocolate truffle cake<br>$65'
    },
    {
        name: 'Wedding cake',
        tag: 'wedding_cake',
        price: 50,
        inCart: 0,
        text: 'Wedding cake<br>$50'
    },
    {
        name: 'Purple velvet cake',
        tag: 'purple_velvet_cake',
        price: 65,
        inCart: 0,
        text: 'Purple velvet cake<br>$65'
    },
    {
        name: 'Mango mint cake',
        tag: 'mango_mint_cake',
        price: 50,
        inCart: 0,
        text: 'Fruit cake<br>$50'
    },
    {
        name: 'Butterscotch cake',
        tag: 'butterscotch_cake',
        price: 65,
        inCart: 0,
        text: 'Butterscotch cake<br>$65'
    },
    {
        name: 'Chocolate cake',
        tag: 'chocolate_cake',
        price: 50,
        inCart: 0,
        text: 'Chocolate cake<br>$50'
    },
    {
        name: 'Red velvet cake',
        tag: 'red_velvet_cake',
        price: 65,
        inCart: 0,
        text: 'Red velvet cake<br>$65'
    },
    {
        name: 'Fruit cake',
        tag: 'fruit_cake',
        price: 50,
        inCart: 0,
        text: 'Fruit cake<br>$50'
    },
    {
        name: 'Fudge cake',
        tag: 'fudge_cake',
        price: 65,
        inCart: 0,
        text: 'Fudge cake<br>$65'
    },
    {
        name: 'Mango cheese cake',
        tag: 'mango_cheese_cake',
        price: 50,
        inCart: 0,
        text: 'Mango cheese cake<br>$50'
    },
    {
        name: 'Chocolate coconut cake',
        tag: 'chocolate_coconut_cake',
        price: 65,
        inCart: 0,
        text: 'Chocolate coconut cake<br>$65'
    },
    {
        name: 'Vanilla fruit cake',
        tag: 'vanilla_fruit_cake',
        price: 50,
        inCart: 0,
        text: 'Vanilla fruit cake<br>$50'
    },
    {
        name: 'Chocolate truffle cake',
        tag: 'chocolate_truffle_cake',
        price: 65,
        inCart: 0,
        text: 'Chocolate truffle cake<br>$65'
    },
    {
        name: 'Wedding cake',
        tag: 'wedding_cake',
        price: 50,
        inCart: 0,
        text: 'Wedding cake<br>$50'
    },
    {
        name: 'Purple velvet cake',
        tag: 'purple_velvet_cake',
        price: 65,
        inCart: 0,
        text: 'Purple velvet cake<br>$65'
    },
    {
        name: 'Mango mint cake',
        tag: 'mango_mint_cake',
        price: 50,
        inCart: 0,
        text: 'Fruit cake<br>$50'
    },
    {
        name: 'Butterscotch cake',
        tag: 'butterscotch_cake',
        price: 65,
        inCart: 0,
        text: 'Butterscotch cake<br>$65'
    },
    {
        name: 'Chocolate cake',
        tag: 'chocolate_cake',
        price: 50,
        inCart: 0,
        text: 'Chocolate cake<br>$50'
    },
    {
        name: 'Red velvet cake',
        tag: 'red_velvet_cake',
        price: 65,
        inCart: 0,
        text: 'Red velvet cake<br>$65'
    },
    {
        name: 'Fruit cake',
        tag: 'fruit_cake',
        price: 50,
        inCart: 0,
        text: 'Fruit cake<br>$50'
    },
    {
        name: 'Fudge cake',
        tag: 'fudge_cake',
        price: 65,
        inCart: 0,
        text: 'Fudge cake<br>$65'
    },
    {
        name: 'Mango cheese cake',
        tag: 'mango_cheese_cake',
        price: 50,
        inCart: 0,
        text: 'Mango cheese cake<br>$50'
    },
    {
        name: 'Chocolate coconut cake',
        tag: 'chocolate_coconut_cake',
        price: 65,
        inCart: 0,
        text: 'Chocolate coconut cake<br>$65'
    },
    {
        name: 'Vanilla fruit cake',
        tag: 'vanilla_fruit_cake',
        price: 50,
        inCart: 0,
        text: 'Vanilla fruit cake<br>$50'
    },
    {
        name: 'Chocolate truffle cake',
        tag: 'chocolate_truffle_cake',
        price: 65,
        inCart: 0,
        text: 'Chocolate truffle cake<br>$65'
    },
    {
        name: 'Wedding cake',
        tag: 'wedding_cake',
        price: 50,
        inCart: 0,
        text: 'Wedding cake<br>$50'
    },
    {
        name: 'Purple velvet cake',
        tag: 'purple_velvet_cake',
        price: 65,
        inCart: 0,
        text: 'Purple velvet cake<br>$65'
    },
    {
        name: 'Mango mint cake',
        tag: 'mango_mint_cake',
        price: 50,
        inCart: 0,
        text: 'Fruit cake<br>$50'
    },
    {
        name: 'Butterscotch cake',
        tag: 'butterscotch_cake',
        price: 65,
        inCart: 0,
        text: 'Butterscotch cake<br>$65'
    },
    
    {
        name: 'Gift Card 1',
        tag: 'gift_card1',
        price: 50,
        inCart: 0
    },

    {
        name: 'Gift Card 2',
        tag: 'gift_card2',
        price: 55,
        inCart: 0
    }
];

/* handles the left arrow button in the item carousels in index.html */
function onClickLeft(element) { 
    const slides = [];
    const elements = element.parentElement.children;
    for (let j=1; j < elements.length-1; j++) {
        slides[j - 1] = elements[j];
    }
    const active_slide = element.parentElement.querySelector("[data-active]");
    let currentIndex = slides.indexOf(active_slide);
    let newIndex = currentIndex;
    if (currentIndex == 0) {
        newIndex = slides.length - 1;
    } else {
        newIndex -= 1;
    }
    slides[newIndex].dataset.active = true;
    delete active_slide.dataset.active;
}

/* handles the right arrow button in the item carousels in index.html */
function onClickRight(element) {
    const slides = [];
    const elements = element.parentElement.children;
    for (let j=1; j < elements.length-1; j++) {
        slides[j - 1] = elements[j];
    }
    const active_slide = element.parentElement.querySelector("[data-active]");
    let currentIndex = slides.indexOf(active_slide);
    let newIndex = currentIndex;
    if (currentIndex == slides.length - 1) {
        newIndex = 0;
    }
    else {
        newIndex += 1;
    }
    slides[newIndex].dataset.active = true;
    delete active_slide.dataset.active;
}

/* changes location to menu part of home page */
function Menu() {
    location.href = "index.html#Menu";
}

/* changes location to cart page */
function Cart() {
    location.href = "cart.html";
}

/* changes location to delivery page */
function Checkout() {
    location.href = "delivery.html";
}

/* stores delivery details in local storage and changes location to payment page */
function ContinueToPayment() {
    
    /* ensures that all fields have been filled and stores the field values in local storage*/
    if (document.getElementById("delivery_type").innerHTML === ""
        || document.getElementById("phone").value === ""
        || document.getElementById("email").value === ""
        || document.getElementById("date").value === ""
        || document.getElementById("unit").value === ""
        || document.getElementById("street").value === ""
        || document.getElementById("suburb").value === ""
        || document.getElementById("postal_code").value === "") {
            alert("All fields must be filled");
    } else {
        localStorage.setItem("delivery_type", document.getElementById("delivery_type").innerHTML);
        localStorage.setItem("phone", document.getElementById("phone").value);
        localStorage.setItem("email", document.getElementById("email").value);
        localStorage.setItem("date", document.getElementById("date").value);
        localStorage.setItem("unit", document.getElementById("unit").value);
        localStorage.setItem("street", document.getElementById("street").value);
        localStorage.setItem("suburb", document.getElementById("suburb").value);
        localStorage.setItem("postal_code", document.getElementById("postal_code").value);
        location.href = "payment.html";

        /* stores the total cost including delivery in local storage based on delivery type */
        let deliveryCost = 2;
        if (localStorage.getItem("deliveryType").localeCompare("delivery") == 0) {
            localStorage.setItem("totalCostIncludingDelivery", totalCost + deliveryCost);
        } else {
            localStorage.setItem("totalCostIncludingDelivery", totalCost);
        }
    }
}

/* processes payment and changes location to payment complete page */
function Pay() {
    /* ensures that all fields have been filled and stores the field values in local storage*/
    if (document.getElementById("bsb").value === ""
        || document.getElementById("account_number").value === ""
        || document.getElementById("expiry").value === ""
        || document.getElementById("security_code").value === "") {
            alert("All fields must be filled");
    } else {
        localStorage.setItem("bsb", document.getElementById("bsb").value);
        localStorage.setItem("account_number", document.getElementById("account_number").value);
        localStorage.setItem("expiry", document.getElementById("expiry").value);
        localStorage.setItem("security_code", document.getElementById("security_code").value);
        localStorage.clear();
        location.href = "thanks.html";
    }
}

/* displays 'add to cart' button when mouse hovers over an item in the menu */
function itemHover(element) {
    element.innerHTML = '<br>Add to Cart';
}

/* removess 'add to cart' button when mouse leaves an item in the menu */
function itemLeave(element) {
    const items = document.getElementsByClassName("Item");
    let product = element.parentElement;
    index = Array.from(items).indexOf(product);
    element.innerHTML = products[index].text;
}

/* adds an item to the cart by adding it to the local storage and updates the total cost */
function addCart(element) {
    /* calculate the number of items in the cart and stores it in local storage */
    let productCount = parseInt(localStorage.getItem('productCount')) + 1;
    if (productCount) {
        localStorage.setItem('productCount', productCount)
    } else {
        localStorage.setItem('productCount', 1)
    }
    localStorage.setItem('productCount', productCount)

    /* chceks if the item to be added to the cart is from the menu page 
        or the gift cards page and gets the item to be added */
    let index = 0;
    if (document.getElementById("Menu") != null) {
        const items = document.getElementsByClassName("Item");
        let product = element.parentElement;
        index = Array.from(items).indexOf(product);
    } else {
        const items = document.getElementsByClassName("gifts_text_box");
        let product = element.parentElement;
        index = Array.from(items).indexOf(product) + 36;
    }
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let product = products[index];

    /* adds the item to the cart (if not already there) and updates its quantity */
    if (cartItems) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    totalCost(product);
}

/* updates total cost of items in the cart */
function totalCost(product) {
    let totalCost = localStorage.getItem('totalCost');
    if (totalCost != null) {
        totalCost = parseInt(totalCost);
        localStorage.setItem("totalCost", totalCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

/* increases the quantity of the item in the cart by one and update the total cost*/
function increaseQuantity(index) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let i=0;
    let keys = [];
    Object.keys(cartItems).map(item => {
        if (i==index) {
            cartItems[item].inCart++;
            let totalCost = parseInt(localStorage.getItem('totalCost')) + cartItems[item].price;
            localStorage.setItem("totalCost", totalCost);
        }
        i++;
    })
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCart();
}

/* decreases the quantity of the item in the cart by one, update the total cost,
    and remove the item if quantity is zero */
function decreaseQuantity(index) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let i=0;
    let keys = [];
    Object.keys(cartItems).map(item => {
        if (i==index) {
            if (cartItems[item].inCart > 1) {
                cartItems[item].inCart--;
                let totalCost = parseInt(localStorage.getItem('totalCost')) - cartItems[item].price;
                localStorage.setItem("totalCost", totalCost);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
            }
            else {
                removeItem(index);
            }
        }
        i++;
    })
    displayCart();
}

/* removes the item from the cart and updates the total cost*/
function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let newCartItems = {};
    let i=0;
    let keys = [];
    Object.keys(cartItems).map(item => {
        if (i!=index) {
            newCartItems[item] = cartItems[item];
        } else {
            let totalCost = parseInt(localStorage.getItem('totalCost')) - (cartItems[item].price * cartItems[item].inCart);
            localStorage.setItem("totalCost", totalCost);
            localStorage.setItem("GST", totalCost * 0.1);
        }
        i++;
    })
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    displayCart();
}

/*displays the cart */
function displayCart() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let productsContainer = document.querySelector(".products");
    if (cartItems && productsContainer) {
        productsContainer.innerHTML = '';
        let index = 0;
        /* displays the items in the cart */
        Object.values(cartItems).map(item => {
            productsContainer.innerHTML += `
            <div class = "product">
                <div class = "productName"> 
                    <img src = "images/${item.tag}.jpg">
                    <p> ${item.name} </p>
                </div>
                <div class = "price"> ${item.price} </div>
                <div class = "quantity"> 
                    <button onclick = "decreaseQuantity(${index})">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                    </button>
                    <span> ${item.inCart} </span>
                    <button onclick = "increaseQuantity(${index})">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                </div>
                <div class = "total"> ${(item.inCart * item.price).toFixed(2)} </div>
                <div id = "remove">
                    <button onclick = "removeItem(${index})"> 
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>

            </div>
            `
            index++;
        });

        /* gets total cost */
        let totalCost = localStorage.getItem('totalCost');
        if (totalCost == null) {
            localStorage.setItem("totalCost", 0);
        } else {
            totalCost = parseInt(totalCost);
        }

        /* displays total cost and delivery cost if any items exist in the cart */
        if (index > 0) {
            productsContainer.innerHTML += `
                <div id = "total_price">
                    <div id = "total_price_headings">
                        <p> Delivery: </p>
                        <p> Total: </p>
                    </div>
                    <div id = "total_price_values">
                        <p> $2.00 </p>
                        <p> $${((totalCost * 1.0) + 2).toFixed(2)} </p>
                    </div>
                </div>
                <div id = "cart_page_buttons">
                    <button id = "checkout" onclick = Checkout()> Proceed to checkout </button>
                    <button class = "button_grey" onclick = Menu()> Back to Menu </button>
                </div>
            `
        }
    }
}

/* displays dropdown menu for the 'delivery type' field in the delivery page */
function dropdown(element) {
    document.getElementById("dropdown").style.display = "block";
}

/* hides dropdown menu for the 'delivery type' field in the delivery page */
function dropup(element) {
    document.getElementById("dropdown").style.display = "none";
}

/* sets 'delivery type' field in the delivery page to 'Pick-up' */
function Pickup() {
    document.getElementById("delivery_type").textContent = "Pick-Up";
    document.getElementById("dropdown").style.display = "none";
    localStorage.setItem("deliveryType", "pickup");
}

/* sets 'delivery type' field in the delivery page to 'Delivery' */
function Delivery() {
    document.getElementById("delivery_type").textContent = "Delivery";
    document.getElementById("dropdown").style.display = "none";
    localStorage.setItem("deliveryType", "delivery");
}

/*displays cart when the cart page has loaded */
window.onload = (event) => {
    displayCart();
};
