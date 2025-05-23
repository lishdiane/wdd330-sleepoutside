import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const params = new URLSearchParams(window.location.search);
const category = params.get("category") || "tents"; // Default to tents if no category is set

// Update the title dynamically
const titleElement = document.querySelector(".category-title");
if (titleElement) {
    titleElement.textContent = `Top Products: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
}

const dataSource = new ProductData(category);
const element = document.querySelector(".product-list");
const productList = new ProductList(category, dataSource, element);

productList.init();
