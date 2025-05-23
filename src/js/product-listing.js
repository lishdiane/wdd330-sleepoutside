import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const params = new URLSearchParams(window.location.search);
const category = params.get("category") || "tents"; // Default to tents if no category is set

const dataSource = new ProductData(category);
const element = document.querySelector(".product-list");
const productList = new ProductList(category, dataSource, element);




productList.init();