const products = [
    {
        id: 'csd8428',
        name: 'Hoodie',
        size: 'XL',
        color: 'Gray',
        price: '25$',
        brand: 'Adidas',
    },
    {
        id: '22fe24',
        name: 'Shoes',
        size: '44',
        color: 'Black',
        price: '35$',
        brand: 'Nike Jordan'
    },
    {
        id: 'ddsa224ds',
        name: 'Gloves',
        size: 'M',
        color: 'Gray-black',
        price: '10$',
        brand: 'Tresspass',
    },
    {
        id: 'c4ef24cg',
        name: 'Socks packet',
        size: '42-44',
        color: 'White',
        price: '4$',
        brand: 'Puma',
    }
];

var numberButton = document.querySelectorAll(".buy-button").length;

for (var i = 0; i < products.length; i++) {
    document.querySelectorAll(".buy-button")[i].addEventListener("click", function () {
        const productId = this.dataset.productId;
        const productToAdd = products.find(function (product) {
            if (productId === product.id){

                const elementWrapper = document.createElement("div");
                elementWrapper.classList.add("product");
                document.getElementById("basketID").appendChild(elementWrapper);
                
                const elementName = document.createElement("div");
                const elementSize = document.createElement("div");
                const elementColor = document.createElement("div");
                const elementPrice = document.createElement("div");
                const elementBrand = document.createElement("div");
                
                
                elementName.innerHTML =product.name;
                elementSize.innerHTML = product.size;
                elementColor.innerHTML = product.color;
                elementPrice.innerHTML = product.price;
                elementBrand.innerHTML = product.brand;
                
                
                elementWrapper.appendChild(elementName);
                elementWrapper.appendChild(elementSize);
                elementWrapper.appendChild(elementColor);
                elementWrapper.appendChild(elementPrice);
                elementWrapper.appendChild(elementBrand);   
                
                

                
            }
                    

        });

    })

}








