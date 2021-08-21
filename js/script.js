// connecting different HTML elements by using DOM 

// declaring variables 

 let ramEvent = document.getElementsByName('ram');
 let romEvent = document.getElementsByName('rom');
 let deliveryEvent = document.getElementsByName('delivery');
 
 let extraRamPrice = document.getElementById('extra-memory');
 let extraRomPrice = document.getElementById('extra-storage');
 let extraDelPrice = document.getElementById('delivery-charge');

 let iMacPrice = document.getElementById('best-price');
 let totalPrice = document.getElementById('total-price');
 let finalTotal = document.getElementById('final-total');
 
//  passing parameters in function 

 imacOption(ramEvent, extraRamPrice);
 imacOption(romEvent, extraRomPrice);
 imacOption(deliveryEvent, extraDelPrice);
 
//  declaring a function and using "for of" loop for ensuring the button activities

 function imacOption(event, _price) {
     for (const item of event) {
         item.addEventListener('click', function(e) {
             e.preventDefault();
             let price = e.target.value
             _price.innerText = price;
             updateCart();
 
         })
     }
 }

 

 updateCart()
 
//  declaring another function for the calculation and will call the function if needed
 function updateCart() {
 
     let iMacPrice = 1299;
     let ramPrice = parseInt(extraRamPrice.innerText);
     let romPrice = parseInt(extraRomPrice.innerText);
     let delPrice = parseInt(extraDelPrice.innerText);
 
     let iMacPriceTotal = iMacPrice + ramPrice + romPrice + delPrice;
 
     totalPrice.innerText = iMacPriceTotal;
     finalTotal.innerText = iMacPriceTotal;
 
 
     totalAfterDiscount();
 }
 
//  declaring another new function 
 
 function totalAfterDiscount() {
     let discountButton = document.getElementById('discount-btn');
     let discountInput = document.getElementById('discount-input');
 
     discountButton.addEventListener('click', function() {
         if (discountInput.value == "stevekaku") {
             finalTotal.innerText = parseInt(finalTotal.innerText) * 0.8;
             discountInput.value = "";
         } else {
             document.getElementById('final-total').innerText = iMacPriceTotal;
         }
     })
 }