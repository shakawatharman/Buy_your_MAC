let memoryBtn = document.querySelectorAll('.memory-btn');
let storageBtn = document.querySelectorAll('.storage-btn');
let deliveryBtn = document.querySelectorAll('.delivery-btn');

let extraMemory = document.getElementById('extra-memory');
let extraStorage = document.getElementById('extra-storage');
let deliveryCharge = document.getElementById('delivery-charge');
let totalPrice = document.getElementById('total-price');

let macbookPrice = 1299;
let memoryPrice, storagePrice, deliveryPrice, macbookTotalPrice;

for (let btn of memoryBtn) {
    btn.addEventListener('click', function (e) {
        if (e.target.innerText == '8GB unified memory') {
            memoryPrice = 0;
        }
        else {
            memoryPrice = 180;
        }
        extraMemory.innerText = memoryPrice;
        updateCart();
    })
}
for (let btn of storageBtn) {
    btn.addEventListener('click', function (e) {
        if (e.target.innerText == '256GB SSD storage') {
            storagePrice = 0;
        } else if (e.target.innerText == '512GB SSD storage') {
            storagePrice = 100;
        } else {
            storagePrice = 180;
        }
        extraStorage.innerText = storagePrice;
        updateCart();
    })
}

for (let btn of deliveryBtn) {
    btn.addEventListener('click', function (e) {
        if (e.target.innerText == 'Friday,Aug 25 Free Prime Delivery') {
            deliveryPrice = 0;
        }
        else {
            deliveryPrice = 20;
        }
        deliveryCharge.innerText = deliveryPrice;
        updateCart();
    })
}
function updateCart() {
    memoryExtraPrice = parseInt(extraMemory.innerText);
    storageExtraPrice = parseInt(extraStorage.innerText);
    deliveryExtraPrice = parseInt(deliveryCharge.innerText);
    macbookTotalPrice = macbookPrice + memoryExtraPrice + storageExtraPrice + deliveryExtraPrice;
    totalPrice.innerText = macbookTotalPrice;

    let finalTotal = document.getElementById('final-total');
    finalTotal.innerText = macbookTotalPrice;

    document.getElementById('discount-btn').addEventListener('click', function () {
        let discountInput = document.getElementById('discount-input');

        if (discountInput.value == 'stevekaku') {
            finalTotal.innerText = macbookTotalPrice - (macbookTotalPrice * 0.2);

        }
        else {
            finalTotal.innerText = macbookTotalPrice;
        }
    })
}

updateCart();

