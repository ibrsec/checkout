const plusBtns = document.querySelectorAll(".fa-plus");
const minusBtns = document.querySelectorAll(".fa-minus");
const trashBtns_cards = document.querySelectorAll(".buttons-div .fa-trash-can");
const quantitySpan = document.querySelectorAll(".quantity");
const productPriceDiv = document.querySelectorAll(".product-price");
const buttonsDiv = document.querySelectorAll(".buttons-div");
const products_cards = document.querySelectorAll(".product");
const discountedPrices = document.querySelectorAll("#discounted-price");
const productPrices = document.querySelectorAll("#product-price");
const selectedPrice = document.querySelector("#selected-price");
const shippingPrice = document.querySelector("#shipping");
const taxPrice = document.querySelector("#tax");
const totalPrice = document.querySelector("#total");
const deleteAllCardsBtn = document.querySelector(".delete-div");
const products = document.querySelectorAll(".product");
const noProductsDiv = document.querySelector(".noproducts");

console.log(noProductsDiv);


console.log(productPrices);
console.log(typeof productPrices);
console.log(productPrices[1].textContent);

plusBtns.forEach((eachPlus, i) => {
  eachPlus.addEventListener("click", () => {
    //quantity plus
    quantitySpan[i].textContent = Number(quantitySpan[i].textContent) + 1;
    //product price
    productPrices[i].textContent = (
      Number(discountedPrices[i].textContent) *
      Number(quantitySpan[i].textContent)
    ).toFixed(2);

    //selected price
    selectedPrice.textContent = 0;
    productPrices.forEach((eachPrice) => {
      selectedPrice.textContent = (
        Number(selectedPrice.textContent) + Number(eachPrice.textContent)
      ).toFixed(2);
    });
  });
});

//MINUS
minusBtns.forEach((eachMinus, i) => {
  eachMinus.addEventListener("click", () => {
    //quantity minus
    if (Number(quantitySpan[i].textContent) != 1) {
      quantitySpan[i].textContent = Number(quantitySpan[i].textContent) - 1;
      //product price minus
      productPrices[i].textContent = (
        Number(discountedPrices[i].textContent) *
        Number(quantitySpan[i].textContent)
      ).toFixed(2);

      //selected price minus
      selectedPrice.textContent = 0;
      productPrices.forEach((eachPrice) => {
        selectedPrice.textContent = (
          Number(selectedPrice.textContent) + Number(eachPrice.textContent)
        ).toFixed(2);
      });
    } else {
    }
  });
});

//remove cards
trashBtns_cards.forEach((eachTrash, i) => {
  eachTrash.addEventListener("click", () => {
    //remove from cards
    products_cards[i].remove();
    console.log(products);
    
  });
});

selectedPrice.addEventListener("DOMSubtreeModified", () => {
  //shipping price
  if (+selectedPrice.textContent < 3000) {
    shippingPrice.textContent = 25.99;
  } else {
    shippingPrice.textContent = "0.00";
  }

  // Tax
  taxPrice.textContent = (
    (Number(selectedPrice.textContent) * 18) /
    100
  ).toFixed(2);

  totalPrice.textContent = (
    Number(selectedPrice.textContent) +
    Number(shippingPrice.textContent) +
    Number(taxPrice.textContent)
  ).toFixed(2);
});

deleteAllCardsBtn.onclick = function () {
  if (confirm("Are you Sure?")) {
    products.forEach((item) => item.remove());
    noProductsDiv.classList.add("all-deleted")
  }
};

