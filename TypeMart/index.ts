import products from './product'

let productName: string = 'tote bag';
let product;
let shipping:number = 0;
let taxPercent:number;
let taxTotal:number;
let total:number;

const shippingAddress: string = "Pune";

products.forEach(element => {
    if (element.name === productName){
        product = element;
    }
});

if (product.preOrder) {
    console.log("Product will be on your way!");
}

if (product.price > 25) {
    console.log("We provide free shipping for this product");
}
else {
    shipping = 5;
}

if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}

taxTotal = product.price*taxPercent;
total = product.price + shipping + taxTotal;

console.log(total)