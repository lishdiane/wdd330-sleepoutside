import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import { getParam } from "./utils.mjs";

const category = getParam("category") || "tents";


// Update the title dynamically
const titleElement = document.querySelector(".category-title");
if (titleElement) {
    titleElement.textContent = `Top Products: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
}

const dataSource = new ProductData(category);

const element = document.querySelector(".product-list");
const productList = new ProductList(category, dataSource, element);

loadHeaderFooter();
productList.init();
