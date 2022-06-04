import { renderToCart } from "./renderToCart.js";


const cart = []

export function addToCart(productClicked){
    
    const productIndex = cart.findIndex(function(element){
        return element.id === productClicked.id;
    })
    console.log(productIndex);
    if(productIndex === -1){
        cart.push(productClicked);
        renderToCart("div",productClicked,"cartBox");
    }else{
        alert("produkt w koszyku");
        alert("ZWIEKSZONO ILOSC O 1 SZTUKE !")
        cart.push(productClicked);
    }
    const elementButtonPrice  = document.createElement("button");
    
    elementButtonPrice.classList.add("boxbuttonprice");
    elementButtonPrice.setAttribute("id", "buttonPrice");
    elementButtonPrice.innerHTML = "Kup Teraz"
    
    document.getElementById("cartBox").appendChild(elementButtonPrice);  
    
    elementButtonPrice.addEventListener("click", function(){
        console.log(cart);
    })
}










