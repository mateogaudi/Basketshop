
import { render } from "./render.js";


fetch('https://fakestoreapi.com/products')
.then(function(response){
    return response.json();
})
.then(function(response){
    response.forEach(function(item){
        render("div", item ,"productsBox");
    })
})

