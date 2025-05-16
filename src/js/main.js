import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

// Select the target HTML element where the product list will be rendered
const productListElement = document.querySelector(".product-list");

// Ensure the target element exists in your HTML
if (!productListElement) {
    console.error("Error: Could not find the HTML element with class 'product-list'.");
}

// Create an instance of ProductData
const productData = new ProductData("tents");

// Create an instance of ProductList and initialize it
const productList = new ProductList("tents", productData, productListElement);
productList.init();
