import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

// Initialize the checkout process.
// "so-cart" is the localStorage key for the cart, and "#checkout" is the container holding your order summary.
const checkout = new CheckoutProcess("so-cart", "#checkout");
checkout.init();

// When the user leaves the zip code field, calculate the order totals.
const zipInput = document.querySelector("#zip-code");
if (zipInput) {
    zipInput.addEventListener("blur", () => {
        checkout.calculateOrderTotal();
    });
}
