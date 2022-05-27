
export function renderToCart(elementType, elementValue, elementId) {
    const elementTitle = document.createElement(elementType);
    const elementPrice = document.createElement(elementType);
    const elementPicture = document.createElement("img");
    const elementButton = document.createElement("button");
    
    elementTitle.innerHTML = elementValue.title;
    elementPrice.innerHTML = elementValue.price;
    elementPicture.setAttribute('src', elementValue.image);
    elementButton.setAttribute('class', 'boxbutton')
    elementButton.setAttribute("id", elementValue.id);
    
    const itemQuantity = document.createElement("div");
    itemQuantity.classList.add("itemQuanity");
    itemQuantity.setAttribute("id","itemQuanity" + elementValue.id);
    itemQuantity.innerHTML = "ilosc : "
    
    
    const elementWrapperCart = document.createElement("div");
    elementWrapperCart.classList.add('productCart');
    elementWrapperCart.appendChild(elementTitle);
    elementWrapperCart.appendChild(elementPrice);
    elementWrapperCart.appendChild(elementPicture);
    elementWrapperCart.appendChild(itemQuantity);
    
    
    document.getElementById(elementId).appendChild(elementWrapperCart);
    let count = 2;
    const numberButtons = document.querySelectorAll(".boxbutton");
    
    numberButtons.forEach(function(button){
        button.addEventListener('click',function(){
            itemQuantity.innerHTML = "ilosc :" + count++;
        });
    })
}
