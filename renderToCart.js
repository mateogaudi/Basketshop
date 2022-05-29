
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
    
    const itemQuanity = document.createElement("div");
    itemQuanity.classList.add("itemQuanity");
    itemQuanity.setAttribute("id",+ elementValue.id);
    itemQuanity.innerHTML = "ilosc : 1" ;
    
    const elementWrapperCart = document.createElement("div");
    elementWrapperCart.classList.add('productCart');
    elementWrapperCart.appendChild(elementTitle);
    elementWrapperCart.appendChild(elementPrice);
    elementWrapperCart.appendChild(elementPicture);
    elementWrapperCart.appendChild(itemQuanity);
    
    
    document.getElementById(elementId).appendChild(elementWrapperCart);
    const numberButtons = document.querySelectorAll(".boxbutton");
    let count = 1;
    
    numberButtons.forEach(function(button){
        button.addEventListener('click',function(){
            if(button.id === itemQuanity.id ){
                count++;
                itemQuanity.innerHTML = "ilosc : " + count ;
            }
        });
    })
}
