import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";

// Comment handling module
function setupComments() {
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");
    const commentInput = document.getElementById("comment-input");
  
    if (!commentForm || !commentList || !commentInput) {
      // No comment elements on this page
      return;
    }
  
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const comment = commentInput.value.trim();
      if (!comment) return;
  
      const li = document.createElement("li");
      li.textContent = comment;
      commentList.appendChild(li);
      commentInput.value = "";
    });
  }

const category = getParam("category");

const dataSource = new ExternalServices();
const element = document.querySelector(".product-list");
const productList = new ProductList(category, dataSource, element);

productList.init();
loadHeaderFooter();
setupComments();