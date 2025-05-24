import { getLocalStorage } from "./utils.mjs";
import { renderWithTemplate, loadTemplate } from "./utils.mjs";

export default class ShoppingCart {
    constructor(parentSelector) {
        this.parentElement = document.querySelector(parentSelector);
    }

    async init() {
        const template = await loadTemplate("/partials/cart-item-template.html");
        this.renderCartContents(template);
    }

    renderCartContents(template) {
        const cartItems = getLocalStorage("so-cart") || [];

        if (cartItems.length > 0) {// Filter invalid items
            const validItems = cartItems.filter(item => item && (item.Name || item.Image));

            if (validItems.length === 0) {
                this.parentElement.innerHTML = "There are no valid items in your cart.";
                document.querySelector(".cart-footer").style.display = "none";
                return;
            }
            validItems.forEach(item => {
                
            });
            

            renderWithTemplate(template, this.parentElement, validItems, null);
            document.querySelector(".cart-footer").style.display = "block";

            // Calculate total
            const total = validItems.reduce((sum, item) => {
                return sum + (Number(item.FinalPrice) || 0) * (item.quantity || 1);
            }, 0);
            document.querySelector(".cart-total").textContent = `Total: $${total.toFixed(2)}`;
        } else {
            this.parentElement.innerHTML = "There are no items in your cart.";
            document.querySelector(".cart-footer").style.display = "none";
        }
    }
}
