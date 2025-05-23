import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

// Initialize data source and get productId from URL
const dataSource = new ProductData("tents");
const productId = getParam("product");

console.log("Product ID:", productId);

// Set up product details and initialize UI
const productDetails = new ProductDetails(productId, dataSource);
productDetails.init();

// Set the productId as a data attribute on the Add to Cart button
const addToCartBtn = document.getElementById("addToCart");
addToCartBtn.setAttribute("data-id", productId);
console.log("Button data-id:", addToCartBtn.dataset.id);

// Function to add product to cart (implement this function based on your cart logic)
function addProductToCart(product) {
  // Example implementation - you should replace this with your real cart logic
  console.log("Product added to cart:", product);
  alert(`Added "${product.name}" to cart!`);
}

// Handler for Add to Cart button click
async function addToCartHandler(e) {
  const id = e.target.dataset.id;
  console.log("Adding product with ID:", id);

  if (!id) {
    alert("No product ID found!");
    return;
  }

  const product = await dataSource.findProductById(id);
  console.log("Found product:", product);

  if (!product) {
    alert("Product not found!");
    return;
  }

  addProductToCart(product);
}

// Add event listener to Add to Cart button
addToCartBtn.addEventListener("click", addToCartHandler);

function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("so-cart")) || [];
  const count = cartItems.length;

  const badge = document.querySelector(".cart-count-badge");
  if (!badge) return;

  if (count > 0) {
    badge.textContent = count;
    badge.style.display = "inline-block";
  } else {
    badge.style.display = "none";
  }
}

// Call it once on page load:
updateCartCount();
loadHeaderFooter(); 