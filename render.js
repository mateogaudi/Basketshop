import { addToCart } from "./cart.js";



export function render(elementType, elementValue, elementId) {
  const elementTitle = document.createElement(elementType);
  const elementPrice = document.createElement(elementType);
  const elementPicture = document.createElement("img");
  const elementButton = document.createElement("button");

  elementTitle.innerHTML = elementValue.title;
  elementPrice.innerHTML = elementValue.price;
  elementPicture.setAttribute('src', elementValue.image);
  elementButton.setAttribute('class', 'boxbutton')
  elementButton.innerText = "Dodaj produkt do Koszyka";
  elementButton.setAttribute("id", elementValue.id);
  elementButton.addEventListener("click", function () {
    addToCart(elementValue);
  })
    
  const elementWrapper = document.createElement("div");
  elementWrapper.classList.add('product');
  elementWrapper.appendChild(elementTitle);
  elementWrapper.appendChild(elementPrice);
  elementWrapper.appendChild(elementPicture);
  elementWrapper.appendChild(elementButton);

  document.getElementById(elementId).appendChild(elementWrapper);

}
