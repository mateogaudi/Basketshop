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
        alert("produkt w koszyku")
    }
    console.log(cart);
}







