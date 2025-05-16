console.log("main.js is loaded!");
console.log("cart data in localStorage:", localStorage.getItem("so-cart"));

function cartCount() {
  const cart = JSON.parse(localStorage.getItem("so-cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  document.getElementById("cart-count").textContent = totalItems;
}

cartCount();
