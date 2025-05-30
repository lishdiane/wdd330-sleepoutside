import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

const checkout = new CheckoutProcess();
checkout.init();

// listening for submit
document.querySelector("#checkout-submit").addEventListener("click", (e) => {
    e.preventDefault();

    checkout.checkout();
});
