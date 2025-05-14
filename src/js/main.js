import ProductList from './ProductList.mjs';
import ProductData from './ProductData.mjs';

const listElement = document.getElementById('product-list');
const productCategory = 'tents';  // Example category

// Create an instance of ProductData
const dataSource = new ProductData(productCategory);

// Create an instance of ProductList
const productList = new ProductList(productCategory, dataSource, listElement);

// Initialize and render the product list
productList.init();
