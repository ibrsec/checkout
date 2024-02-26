const deleteAllBtn = document.querySelector(".delete-div");
const products = document.querySelector(".products");

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
  }
});


const calculatePrice = (btn)=>{ 
    const discountedPrice = btn.closest(".product-info").querySelector('#discounted-price').textContent;
    const quantity = btn.parentNode.querySelector("#quantity").textContent;
    const result = discountedPrice * quantity;
    btn.closest(".buttons-div").querySelector("#product-price").textContent = result;

}