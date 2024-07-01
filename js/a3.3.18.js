const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
    // const keys = Object.keys(products);
    // console.log(keys);
    for (const product of products) {
        console.log(product);
            console.log(product.name);
            console.log(product.price);
            console.log(product.quantity);
        if (product.name = productName) {
            console.log(product.name);
            console.log(product.price);
            console.log(product.quantity);
          return product.price;
        
            break;
        }
    }
  
    console.log("null");
return null;
  // Change code above this line
}
getProductPrice("Engine")