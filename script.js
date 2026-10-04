/* =========================================================
   KAANCH KRAFT — PRODUCT & CART SYSTEM
   ========================================================= */

/* ---------------- PRODUCTS ---------------- */

const products = [
    {
        id: 1,
        name: "Glass Creation 01",
        price: 1500,
        image: "images/product-1.jpeg",
        description: "Handcrafted glass creation."
    },
    {
        id: 2,
        name: "Glass Creation 02",
        price: 1400,
        image: "images/product-2.jpeg",
        description: "Elegant handcrafted glass artwork."
    },
    {
        id: 3,
        name: "Glass Creation 03",
        price: 2100,
        image: "images/product-3.jpeg",
        description: "Artistic glass décor piece."
    },
    {
        id: 4,
        name: "Glass Creation 04",
        price: 2100,
        image: "images/product-4.jpeg",
        description: "Designed with artistic detail."
    },
    {
        id: 5,
        name: "Glass Creation 05",
        price: 1500,
        image: "images/product-5.jpeg",
        description: "Beautiful handcrafted décor."
    },
    {
        id: 6,
        name: "Glass Creation 06",
        price: 1500,
        image: "images/product-6.jpeg",
        description: "Elegant glass artistry."
    },
    {
        id: 7,
        name: "Glass Creation 07",
        price: 1400,
        image: "images/product-7.jpeg",
        description: "Handcrafted statement piece."
    },
    {
        id: 8,
        name: "Glass Creation 08",
        price: 2500,
        image: "images/product-8.jpeg",
        description: "Artistic décor for beautiful spaces."
    },
    {
        id: 9,
        name: "Glass Creation 09",
        price: 5500,
        image: "images/product-9.jpeg",
        description: "Thoughtfully crafted glass artwork."
    },
    {
        id: 10,
        name: "Glass Creation 10",
        price: 3000,
        image: "images/product-10.jpeg",
        description: "Premium handcrafted creation."
    },
    {
        id: 11,
        name: "Glass Creation 11",
        price: 2600,
        image: "images/product-11.jpeg",
        description: "Elegant artistic glass piece."
    },
    {
        id: 12,
        name: "Glass Creation 12",
        price: 10000,
        image: "images/product-12.jpeg",
        description: "Handcrafted glass décor."
    },
    {
        id: 13,
        name: "Glass Creation 13",
        price: 26000,
        image: "images/product-13.jpeg",
        description: "Beautifully designed glass artwork."
    },
    {
        id: 14,
        name: "Glass Creation 14",
        price: 5000,
        image: "images/product-14.jpeg",
        description: "Unique handcrafted creation."
    },
    {
        id: 15,
        name: "Glass Creation 15",
        price: 5000,
        image: "images/product-15.jpeg",
        description: "Premium artistic décor."
    },
    {
        id: 16,
        name: "Glass Creation 16",
        price: 8000,
        image: "images/product-16.jpeg",
        description: "Crafted with attention to detail."
    },
    {
        id: 17,
        name: "Glass Creation 17",
        price: 8000,
        image: "images/product-17.jpeg",
        description: "Elegant handmade glass artwork."
    },
    {
        id: 18,
        name: "Glass Creation 18",
        price: 2000,
        image: "images/product-18.jpeg",
        description: "Artistic statement décor."
    },
    {
        id: 19,
        name: "Glass Creation 19",
        price: 2000,
        image: "images/product-19.jpeg",
        description: "Handcrafted premium creation."
    },
    {
        id: 20,
        name: "Glass Creation 20",
        price: 2000,
        image: "images/product-20.jpeg",
        description: "Beautiful glass artistry."
    },
    {
        id: 21,
        name: "Glass Creation 21",
        price: 4500,
        image: "images/product-21.jpeg",
        description: "Thoughtfully designed glass piece."
    },
    {
        id: 22,
        name: "Glass Creation 22",
        price: 8500,
        image: "images/product-22.png",
        description: "Elegant handcrafted artwork."
    },
    {
        id: 23,
        name: "Glass Creation 23",
        price: 6400,
        image: "images/product-23.png",
        description: "Premium glass décor."
    },
    {
        id: 24,
        name: "Glass Creation 24",
        price: 8500
        
        
        
        ,
        image: "images/product-24.png",
        description: "Unique artistic glass creation."
    }
];


/* ---------------- CART ---------------- */

let cart = JSON.parse(localStorage.getItem("kaanchKraftCart")) || [];


/* ---------------- FORMAT PRICE ---------------- */

function formatPrice(price) {
    return "₹" + price.toLocaleString("en-IN");
}


/* ---------------- SAVE CART ---------------- */

function saveCart() {
    localStorage.setItem(
        "kaanchKraftCart",
        JSON.stringify(cart)
    );
}


/* ---------------- LOAD PRODUCTS ---------------- */

function loadProducts() {

    const productList = document.getElementById("product-list");

    if (!productList) return;

    productList.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                <img 
                    src="${product.image}" 
                    alt="${product.name}"
                    onclick="openProductModal(${JSON.stringify(product).replace(/"/g, '&quot;')})"
                >
            </div>

            <div class="product-info">

                <p class="product-brand">KAANCH KRAFT</p>

                <h3 
                    class="product-name"
                    onclick="openProductModal(${JSON.stringify(product).replace(/"/g, '&quot;')})"
                >
                    ${product.name}
                </h3>

                <div class="product-rating">
                    ★★★★★ <span>5.0</span>
                </div>

                <p class="product-price">
                    ₹${Number(product.price).toLocaleString("en-IN")}
                </p>

                <p class="product-description">
                    ${product.description || "Handcrafted glass artwork made with attention to detail."}
                </p>

                <div class="product-actions">

                    <button 
                        class="product-add-btn"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                    <button 
                        class="product-buy-btn"
                        onclick="buyNowFromCard(${product.id})"
                    >
                        Buy Now
                    </button>

                </div>

            </div>
        `;

        productList.appendChild(card);
    });
}


/* ---------------- ADD TO CART ---------------- */

function addToCart(productId) {

    const product =
        products.find(item => item.id === productId);

    if (!product) return;

    const existing =
        cart.find(item => item.id === productId);

    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });

    }

    saveCart();
    updateCart();

    openCart();
}


/* ---------------- REMOVE FROM CART ---------------- */

function removeFromCart(productId) {

    cart =
        cart.filter(item => item.id !== productId);

    saveCart();
    updateCart();
}


/* ---------------- CHANGE QUANTITY ---------------- */

function changeQuantity(productId, change) {

    const item =
        cart.find(item => item.id === productId);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        removeFromCart(productId);
        return;

    }

    saveCart();
    updateCart();
}


/* ---------------- CART COUNT ---------------- */

function updateCartCount() {

    const countElement =
        document.getElementById("cart-count");

    if (!countElement) return;

    const totalItems =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    countElement.textContent = totalItems;
}


/* ---------------- CART TOTAL ---------------- */

function getCartTotal() {

    return cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );
}


/* ---------------- UPDATE CART ---------------- */

function updateCart() {

    updateCartCount();

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");

    if (!cartItems) return;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-bag-shopping"></i>

                <h4>Your cart is empty</h4>

                <p>
                    Discover something beautiful
                    for your space.
                </p>

                <button
                    onclick="closeCart()"
                    class="btn btn-primary"
                >
                    Explore Collection
                </button>

            </div>

        `;

    } else {

        cartItems.innerHTML = "";

        cart.forEach(item => {

            const cartItem =
                document.createElement("div");

            cartItem.className = "cart-product";

            cartItem.innerHTML = `

                <div
                    class="cart-product-image"
                    style="
                        width:80px;
                        height:90px;
                        overflow:hidden;
                        flex-shrink:0;
                    "
                >

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        style="
                            width:100%;
                            height:100%;
                            object-fit:cover;
                        "
                    >

                </div>


                <div
                    style="
                        flex:1;
                        padding-left:14px;
                    "
                >

                    <h4
                        style="
                            font-family:var(--serif);
                            font-size:20px;
                            margin-bottom:4px;
                        "
                    >
                        ${item.name}
                    </h4>

                    <p
                        style="
                            font-size:12px;
                            color:var(--muted);
                            margin-bottom:10px;
                        "
                    >
                        ${formatPrice(item.price)}
                    </p>


                    <div
                        style="
                            display:flex;
                            align-items:center;
                            gap:10px;
                        "
                    >

                        <button
                            onclick="changeQuantity(${item.id}, -1)"
                            style="
                                width:27px;
                                height:27px;
                                border:1px solid var(--line);
                                background:transparent;
                                cursor:pointer;
                            "
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="changeQuantity(${item.id}, 1)"
                            style="
                                width:27px;
                                height:27px;
                                border:1px solid var(--line);
                                background:transparent;
                                cursor:pointer;
                            "
                        >
                            +
                        </button>

                    </div>

                </div>


                <button
                    onclick="removeFromCart(${item.id})"
                    aria-label="Remove ${item.name}"
                    style="
                        border:0;
                        background:transparent;
                        cursor:pointer;
                        color:var(--muted);
                    "
                >
                    <i class="fa-solid fa-trash"></i>
                </button>

            `;

            cartItems.appendChild(cartItem);
        });
    }


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(getCartTotal());

    }
}


/* ---------------- OPEN CART ---------------- */

function openCart() {

    const drawer =
        document.getElementById("cart-drawer");

    const overlay =
        document.getElementById("cart-overlay");

    if (!drawer || !overlay) return;

    drawer.classList.add("active");
    overlay.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* ---------------- CLOSE CART ---------------- */

function closeCart() {

    const drawer =
        document.getElementById("cart-drawer");

    const overlay =
        document.getElementById("cart-overlay");

    if (!drawer || !overlay) return;

    drawer.classList.remove("active");
    overlay.classList.remove("active");

    document.body.style.overflow = "";
}


/* ---------------- OVERLAY CLICK ---------------- */

document
    .getElementById("cart-overlay")
    ?.addEventListener(
        "click",
        closeCart
    );


/* ---------------- INITIAL LOAD ---------------- */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadProducts();

        updateCart();

    }
);
/* =========================================
   PRODUCT DETAILS
   ========================================= */

let selectedProduct = null;
let modalQuantity = 1;

function openProductModal(product) {
    selectedProduct = product;
    modalQuantity = 1;

    const modal = document.getElementById("productModal");

    document.getElementById("modalProductImage").src = product.image;
    document.getElementById("modalProductName").textContent = product.name;
    document.getElementById("modalProductPrice").textContent =
        "₹" + Number(product.price).toLocaleString("en-IN");
    document.getElementById("modalQuantity").textContent = modalQuantity;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeProductModal() {
    const modal = document.getElementById("productModal");

    modal.classList.remove("active");
    document.body.style.overflow = "";
    selectedProduct = null;
}

function changeModalQuantity(change) {
    modalQuantity += change;

    if (modalQuantity < 1) {
        modalQuantity = 1;
    }

    document.getElementById("modalQuantity").textContent = modalQuantity;
}

function addModalProductToCart() {
    if (!selectedProduct) return;

    for (let i = 0; i < modalQuantity; i++) {
        addToCart(selectedProduct);
    }

    closeProductModal();
}

function buyNow() {
    if (!selectedProduct) return;

    for (let i = 0; i < modalQuantity; i++) {
        addToCart(selectedProduct);
    }

    closeProductModal();

    // Checkout page will be connected later
    alert("Product added. Checkout will be connected next.");
}

function orderModalOnWhatsApp() {
    if (!selectedProduct) return;

    const message =
        "Hello Kaanch Kraft,%0A%0A" +
        "I am interested in:%0A" +
        selectedProduct.name +
        "%0AQuantity: " +
        modalQuantity +
        "%0APrice: ₹" +
        Number(selectedProduct.price).toLocaleString("en-IN");

    window.open(
        "https://wa.me/917252934932?text=" + message,
        "_blank"
    );
}

/* Close modal when clicking outside */
document.addEventListener("click", function (event) {
    const modal = document.getElementById("productModal");

    if (event.target === modal) {
        closeProductModal();
    }
});
/* =========================================
   BUY NOW FROM PRODUCT CARD
   ========================================= */

function buyNowFromCard(productId) {

    const product = products.find(item => item.id === productId);

    if (!product) return;

    // Clear old cart
    cart = [];

    // Add only this product
    cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
    });

    saveCart();
    updateCart();

    // Open cart
    openCart();
}
/* =========================================
   PROCEED TO CHECKOUT
   ========================================= */

function proceedToCheckout() {

    if (!cart || cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    renderCheckoutItems();

    const checkout = document.getElementById("checkoutSection");

    if (!checkout) {
        alert("Checkout section is missing.");
        return;
    }

    closeCart();

    checkout.style.display = "block";

    setTimeout(() => {
        checkout.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);
}/* =========================================
   CHECKOUT ORDER SUMMARY
   ========================================= */

function renderCheckoutItems() {

    const checkoutItems = document.getElementById("checkoutItems");

    const checkoutSubtotal = document.getElementById("checkoutSubtotal");

    const checkoutTotal = document.getElementById("checkoutTotal");

    if (!checkoutItems) return;

    checkoutItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        const quantity = Number(item.quantity) || 1;
        const price = Number(item.price) || 0;

        const itemTotal = price * quantity;

        total += itemTotal;

        const itemElement = document.createElement("div");

        itemElement.className = "checkout-item";

        itemElement.innerHTML = `
            <img 
                src="${item.image}" 
                alt="${item.name}"
            >

            <div class="checkout-item-info">
                <h4>${item.name}</h4>
                <span>Quantity: ${quantity}</span>
            </div>

            <div class="checkout-item-price">
                ₹${itemTotal.toLocaleString("en-IN")}
            </div>
        `;

        checkoutItems.appendChild(itemElement);
    });

    checkoutSubtotal.textContent =
        "₹" + total.toLocaleString("en-IN");

    checkoutTotal.textContent =
        "₹" + total.toLocaleString("en-IN");
}
/* =========================================
   CHECKOUT FORM → PAYMENT
   ========================================= */

const checkoutForm = document.getElementById("checkoutForm");

if (checkoutForm) {

    checkoutForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("customerName").value.trim();
        const mobile = document.getElementById("customerMobile").value.trim();
        const email = document.getElementById("customerEmail").value.trim();
        const address = document.getElementById("customerAddress").value.trim();
        const city = document.getElementById("customerCity").value.trim();
        const state = document.getElementById("customerState").value.trim();
        const pin = document.getElementById("customerPin").value.trim();

        if (!name || !mobile || !email || !address || !city || !state || !pin) {
            alert("Please fill in all required details.");
            return;
        }

        if (!/^[0-9]{10}$/.test(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        if (!/^[0-9]{6}$/.test(pin)) {
            alert("Please enter a valid 6-digit PIN code.");
            return;
        }

        const total = cart.reduce((sum, item) => {
            return sum + (Number(item.price) * Number(item.quantity || 1));
        }, 0);

        document.getElementById("paymentTotal").textContent =
            "₹" + total.toLocaleString("en-IN");

        const checkoutSection = document.getElementById("checkoutSection");
        const paymentSection = document.getElementById("paymentSection");

        checkoutSection.style.display = "none";
        paymentSection.style.display = "block";

        paymentSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });
}
/* =========================================
   CONTINUE TO PAYMENT
   ========================================= */

function continueToPayment() {

    if (!cart || cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const name = document.getElementById("customerName").value.trim();
    const mobile = document.getElementById("customerMobile").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const address = document.getElementById("customerAddress").value.trim();
    const city = document.getElementById("customerCity").value.trim();
    const state = document.getElementById("customerState").value.trim();
    const pin = document.getElementById("customerPin").value.trim();

    if (!name || !mobile || !email || !address || !city || !state || !pin) {
        alert("Please fill in all customer details.");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    if (!/^[0-9]{6}$/.test(pin)) {
        alert("Please enter a valid 6-digit PIN code.");
        return;
    }

    const total = cart.reduce((sum, item) => {
        return sum + Number(item.price) * Number(item.quantity || 1);
    }, 0);

    const paymentTotal = document.getElementById("paymentTotal");

    if (paymentTotal) {
        paymentTotal.textContent =
            "₹" + total.toLocaleString("en-IN");
    }

    const checkoutSection = document.getElementById("checkoutSection");
    const paymentSection = document.getElementById("paymentSection");

    if (checkoutSection) {
        checkoutSection.style.display = "none";
    }

    if (paymentSection) {
        paymentSection.style.display = "block";

        paymentSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
function goToPayment() {

    const form = document.getElementById("checkoutForm");

    // Check all required fields
    if (!form.reportValidity()) {
        return;
    }

    const mobile = document.getElementById("customerMobile").value.trim();
    const pin = document.getElementById("customerPin").value.trim();

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    if (!/^[0-9]{6}$/.test(pin)) {
        alert("Please enter a valid 6-digit PIN code.");
        return;
    }

    if (!cart || cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const total = cart.reduce((sum, item) => {
        return sum + Number(item.price) * Number(item.quantity || 1);
    }, 0);

    document.getElementById("paymentTotal").textContent =
        "₹" + total.toLocaleString("en-IN");

    document.getElementById("checkoutSection").style.display = "none";

    const paymentSection = document.getElementById("paymentSection");

    paymentSection.style.display = "block";

    paymentSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
// ===============================
// SAVE ORDER TO EXCEL
// ===============================

async function saveOrderToExcel() {

    const customerName =
        document.getElementById("customerName")?.value.trim() || "";

    const mobile =
        document.getElementById("customerMobile")?.value.trim() || "";

    const email =
        document.getElementById("customerEmail")?.value.trim() || "";

    const address =
        document.getElementById("customerAddress")?.value.trim() || "";

    const city =
        document.getElementById("customerCity")?.value.trim() || "";

    const state =
        document.getElementById("customerState")?.value.trim() || "";

    const pin =
        document.getElementById("customerPin")?.value.trim() || "";

    if (!customerName || !mobile) {
        alert("Please enter your name and mobile number.");
        return;
    }

    const items = typeof cart !== "undefined" ? cart : [];

    if (items.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const subtotal = items.reduce(
        (total, item) =>
            total + (Number(item.price) * Number(item.quantity)),
        0
    );

    const delivery = 0;
    const total = subtotal + delivery;

    const paymentMethod =
        document.querySelector(
            'input[name="paymentMethod"]:checked'
        )?.value || "Not Selected";

    try {

        const response = await fetch(
            "/api/orders",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    customerName,
                    mobile,
                    email,
                    address,
                    city,
                    state,
                    pin,
                    items,
                    subtotal,
                    delivery,
                    total,
                    paymentMethod
                })
            }
        );

        const result = await response.json();

        if (!result.success) {
            alert("Could not save order.");
            return;
        }

        console.log("Order saved:", result);

        // Show payment section
        const checkoutSection =
            document.getElementById("checkoutSection");

        const paymentSection =
            document.getElementById("paymentSection");

        if (checkoutSection) {
            checkoutSection.style.display = "none";
        }

        if (paymentSection) {

            paymentSection.style.display = "block";

            const paymentTotal =
                document.getElementById("paymentTotal");

            if (paymentTotal) {
                paymentTotal.textContent =
                    "₹" + total.toLocaleString("en-IN");
            }

            paymentSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    } catch (error) {

        console.error("Excel connection error:", error);

        alert(
            "Server connection failed. Please make sure the Kaanch Kraft server is running."
        );
    }
}
function processPayment() {

    const paymentMethod =
        document.querySelector(
            'input[name="paymentMethod"]:checked'
        )?.value;

    if (!paymentMethod) {
        alert("Please select a payment method.");
        return;
    }

    if (paymentMethod === "online") {

        alert("Online payment will be connected next.");

        return;
    }

    if (paymentMethod === "offline") {

        saveOfflineOrder();

    }
}


async function saveOfflineOrder() {

    const customerName =
        document.getElementById("customerName")?.value.trim() || "";

    const mobile =
        document.getElementById("customerMobile")?.value.trim() || "";

    const email =
        document.getElementById("customerEmail")?.value.trim() || "";

    const address =
        document.getElementById("customerAddress")?.value.trim() || "";

    const city =
        document.getElementById("customerCity")?.value.trim() || "";

    const state =
        document.getElementById("customerState")?.value.trim() || "";

    const pin =
        document.getElementById("customerPin")?.value.trim() || "";

    const items = typeof cart !== "undefined" ? cart : [];

    if (!customerName || !mobile) {
        alert("Please complete your customer details.");
        return;
    }

    if (items.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const subtotal = items.reduce(
        (total, item) =>
            total + (Number(item.price) * Number(item.quantity)),
        0
    );

    const delivery = 0;
    const total = subtotal + delivery;

    try {

        const response = await fetch(
           "/api/orders",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    customerName,
                    mobile,
                    email,
                    address,
                    city,
                    state,
                    pin,
                    items,
                    subtotal,
                    delivery,
                    total,
                    paymentMethod: "offline"
                })
            }
        );

        const result = await response.json();

        if (!result.success) {
            alert("Could not place your order.");
            return;
        }

        console.log("Offline order saved:", result);

        showOrderSuccess(result.orderId);

    } catch (error) {

        console.error("Order error:", error);

        alert(
            "Could not connect to the order server. Please make sure the Kaanch Kraft server is running."
        );
    }
}


function showOrderSuccess(orderId) {

    const checkoutSection =
        document.getElementById("checkoutSection");

    const paymentSection =
        document.getElementById("paymentSection");

    const successSection =
        document.getElementById("orderSuccessSection");

    const successOrderId =
        document.getElementById("successOrderId");

    if (checkoutSection) {
        checkoutSection.style.display = "none";
    }

    if (paymentSection) {
        paymentSection.style.display = "none";
    }

    if (successOrderId) {
        successOrderId.textContent = orderId;
    }

    if (successSection) {

        successSection.style.display = "flex";

        successSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}