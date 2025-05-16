import { getLocalStorage, setLocalStorage } from "./utils.mjs"; // add the getLocalStorage
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
    let cart = getLocalStorage("so-cart");
    if (!Array.isArray(cart)) {
      cart = [];
    }
    cart.push(product);
    setLocalStorage("so-cart", cart);
  }  
  
// add to cart button event handler
async function addToCartHandler(e) {
    console.log("Add to cart clicked, product id:", e.target.dataset.id);  // <-- add this line
    const product = await dataSource.findProductById(e.target.dataset.id);
    addProductToCart(product);
  }  

// add listener to Add to Cart button
document
  .getElementById("addToCart")
    .addEventListener("click", addToCartHandler);
  