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
        console.log("Cart items loaded from localStorage:", cartItems);

        if (cartItems.length > 0) {// Filter invalid items
            const validItems = cartItems.filter(item => item && (item.Name || item.Image));

            if (validItems.length === 0) {
                this.parentElement.innerHTML = "There are no valid items in your cart.";
                document.querySelector(".cart-footer").style.display = "none";
                return;
            }
            console.log("Attempting to render cart items with template:", template);
            console.log("Cart items being passed to template:", validItems);
            validItems.forEach(item => {
                console.log("Checking cart item image URL:", item.Images?.PrimaryLarge || "No image found");
                console.log("Checking cart item color:", item.Colors?.[0]?.ColorName || "No color found");
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
