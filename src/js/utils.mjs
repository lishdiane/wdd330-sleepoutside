// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

function cartItemTemplate(item) {
  const image = item.Images?.PrimaryLarge || item.Images?.PrimarySmall || "/images/placeholder.png";
  const name = item.Name || "Unnamed product";
  const colorName = item.Colors?.[0]?.ColorName || "No color info";
  const quantity = item.quantity || 1;
  const price = item.FinalPrice !== undefined ? Number(item.FinalPrice) : 0;
  const totalPrice = (price * quantity).toFixed(2);

  return `<li class="cart-card divider">
      <a href="#" class="cart-card__image">
        <img src="${image}" alt="${name}" />
      </a>
      <a href="#">
        <h2 class="card__name">${name}</h2>
      </a>
      <p class="cart-card__color">${colorName}</p>
      <p class="cart-card__quantity">qty: ${quantity}</p>
      <p class="cart-card__price">$${totalPrice}</p>
    </li>`;
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product
}

export function renderListWithTemplate(templateFn, parentElement, list, position='afterbegin', clear = false) {
  const htmlStrings = list.map(templateFn);
  if(clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}


export function renderWithTemplate(template, parentElement, dataList) {
  console.log("Checking parentElement:", parentElement);
  console.log("Data received in renderWithTemplate:", dataList);

  if (!parentElement) {
    console.error("Error: parentElement is null. The template cannot be applied.");
    return;
  }

  parentElement.innerHTML = dataList.map(cartItemTemplate).join("");


  if (typeof callback === "function") {
    callback(dataList);
  }

}



export async function loadTemplate(path) {
  const res = await fetch(path);
  if (!res.ok) {
    console.error(`Failed to load template: ${path}`);
    return "";
  }
  return await res.text();
}


export async function loadHeaderFooter() {
  // Load header and footer templates
  const headerTemplate = await loadTemplate("/partials/header.html");
  const footerTemplate = await loadTemplate("/partials/footer.html");

  // Select the header and footer placeholder elements
  const headerElement = document.querySelector("#main-header");
  const footerElement = document.querySelector("#main-footer");

  // Render the templates inside the placeholders using the new function
  if (headerElement) renderHeaderFooter(headerTemplate, headerElement);
  if (footerElement) renderHeaderFooter(footerTemplate, footerElement);
}



export function renderHeaderFooter(template, parentElement) {
  if (!parentElement) {
    console.error("Error: parentElement is null. Cannot apply template.");
    return;
  }
  parentElement.innerHTML = template;
}






