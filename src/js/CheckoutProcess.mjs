import { getLocalStorage } from "./utils.mjs";

export default class CheckoutProcess {
    constructor() {
        this.total = 0;
        this.tax = 0;
        this.shipping = 0;
        this.orderTotal = 0;
    }

    init() {
        this.countSubtotal();
        this.countTax();
        this.countShippingEstimate();
        this.calculateOrderTotal();
        this.displaySummary();
    }

    countSubtotal() {
        const cartItems = getLocalStorage("so-cart") || [];
        for (const item of cartItems) {
        const quantity = item.quantity;
        this.total += (Number(item.FinalPrice) || 0) * quantity;
        }
    }

    countTax() {
        this.tax = this.total * 0.06;  
    }

    countShippingEstimate() {
        const cartItems = getLocalStorage("so-cart") || [];
        let total = 0;
        for (const item of cartItems) {
            total += item.quantity;
        }
        
        if (cartItems.length > 0) {
            this.shipping = 10 + ((total - 1) * 2);
        }
        
    }

    calculateOrderTotal() {
        this.Ordertotal = this.total + this.tax.toFixed(2) + this.shipping;
    }

    displaySummary() {
        document.querySelector(".subtotal").innerHTML = `Subtotal: $${this.total}`;
        document.querySelector(".tax").innerHTML = `Tax: $${this.tax.toFixed(2)}`;
        document.querySelector(".shipestimate").innerHTML = `Shipping: $${this.shipping}`;
        document.querySelector(".total").innerHTML = `Total: $${this.total}`;
    }
}