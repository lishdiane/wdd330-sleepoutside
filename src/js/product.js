import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

// Update cart count in UI
function cartCount() {
  const cart = getLocalStorage("so-cart") || [];
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = totalItems;
  }
}

function addProductToCart(product) {
  let cart = getLocalStorage("so-cart");
  if (!Array.isArray(cart)) {
    cart = [];
  }
  cart.push(product);
  setLocalStorage("so-cart", cart);
  cartCount(); // Update cart count after adding
}

// Add to cart button event handler
async function addToCartHandler(e) {
  console.log("Add to cart clicked, product id:", e.target.dataset.id);
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// Add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

// Call cartCount on page load (optional)
cartCount();
