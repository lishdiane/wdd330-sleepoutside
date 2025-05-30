export default class CheckoutProcess {
    constructor() {
    }

    countSubtotal() {
        const cartItems = getLocalStorage("so-cart") || [];
        let total = 0;
        for (const item of cartItems) {
        const quantity = item.quantity;
        total += (Number(item.FinalPrice) || 0) * quantity;
        }
        return total;
    }

    countTax() {
        let subTotal = this.countSubtotal();
        let taxTotal = subTotal * 1.06;
        return taxTotal;
    }

    countShippingEstimate() {
        const cartItems = getLocalStorage("so-cart") || [];
        let total = [];
        for (const item of cartItems) {
            total += item.quantity;
        }
        
        let len = total.length;
        
    }
}