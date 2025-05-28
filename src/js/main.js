import { loadHeaderFooter } from "./utils.mjs";

// Retrieve cart contents from localStorage
function getCartContents() {
  const cart = localStorage.getItem("so-cart");
  return cart ? JSON.parse(cart) : [];
}

// Update the number shown on the cart icon
function updateCartCount() {
  const cartItems = getCartContents();
  const cartLink = document.querySelector(".cart-link");

  if (!cartLink) return;

  // Check if the badge already exists
  let badge = cartLink.querySelector(".cart-count-badge");

  if (!badge) {
    // Create the badge if it doesn't exist
    badge = document.createElement("span");
    badge.classList.add("cart-count-badge");
    cartLink.appendChild(badge);
  }

  // Update the count
  badge.textContent = cartItems.length;

  // Optional: Hide badge if cart is empty
  if (cartItems.length === 0) {
    badge.style.display = "none";
  } else {
    badge.style.display = "inline-block";
  }
}

// Run on page load
updateCartCount();
loadHeaderFooter();
