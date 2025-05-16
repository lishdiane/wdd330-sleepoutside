export default class ProductDetails {
    constructor(productId, dataSource) {
        this.catagory = category;
        this.product = {};
        this.dataSource = dataSource;
    };

    init() {

    };

    addProductToCart(product) {
    const cartItems = getLocalStorage("so-cart") || [];
    cartItems.push(product);
    setLocalStorage("so-cart", cartItems);
    };

    renderProcductDetails() {
        
    }
    
}