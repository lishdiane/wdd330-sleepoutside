import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const category = getParam("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const productList = new ProductList(category, dataSource, element);

productList.init();
