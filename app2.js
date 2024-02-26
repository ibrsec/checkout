const SHIPPINGPRICE = 25.99;
const TAX_RATE = 0.18;
const SHIPPING_LIMIT = 3000;



const deleteAllBtn = document.querySelector(".delete-div");
const products = document.querySelector(".products");
const selectedPrice = document.querySelector("#selected-price");
const shippingPrice = document.querySelector("#shipping");
const taxPrice = document.querySelector("#tax");
const totalPrice = document.querySelector("#total");


deleteAllBtn.addEventListener("click", () => {
  products.textContent = "No Products";
  products.classList.add("no-product");
  document.querySelector(".delete-div").remove();
});

//!her dom manupilasyonu zaman demektir.
//! onemli oldugu yerlerde dusunulmelidir

products.addEventListener("click", (e) => {

    //?  plus
  if (e.target.classList.contains("fa-plus")) { // plus
      e.target.previousElementSibling.textContent++;
      calculatePrice(e.target);

//? minus
  } else if (e.target.classList.contains("fa-minus")) {//minus
      if(Number(e.target.nextElementSibling.textContent) > 1){
        e.target.nextElementSibling.textContent--;
        calculatePrice(e.target);

      }

//? remove
  }else if(e.target.classList.contains("fa-trash-can")){ //remove
    e.target.closest(".product").remove();
    calculatePrice(e.target);
  }
});


const calculatePrice = (btn)=>{ 
    const discountedPrice = btn.closest(".product-info").querySelector('#discounted-price').textContent;
    const quantity = btn.parentNode.querySelector("#quantity").textContent;
    const result = discountedPrice * quantity;
    btn.closest(".buttons-div").querySelector("#product-price").textContent = result.toFixed(2);
    calculateTotalPrice();
}

const calculateTotalPrice = ()=>{
    const prices = document.querySelectorAll("#product-price");

    let sum  = [...prices].reduce((sum,item) => sum + +item.textContent , 0).toFixed(2);
    console.log(sum);
    selectedPrice.textContent = sum;



    if(+selectedPrice.textContent < SHIPPING_LIMIT){
        shippingPrice.textContent = SHIPPINGPRICE;
    }else{
        shippingPrice.textContent = "0.00";
    }

    taxPrice.textContent = (+selectedPrice.textContent * TAX_RATE).toFixed(2);


    totalPrice.textContent =( Number(selectedPrice.textContent) + Number(shippingPrice.textContent) + Number(shippingPrice.textContent) + Number(taxPrice.textContent)).toFixed(2);


}

window.addEventListener("load",()=>{
    calculateTotalPrice();
})