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
  let productPrice = null;
    for (const product of products) {
        console.log(product);
            console.log(product.name);
            console.log(product.price);
            console.log(product.quantity);
        // if (product.name = productName) {
        //     console.log(product.name);
        //     console.log(product.price);
        //     console.log(product.quantity);
        //   return product.price;
        //     // break;
      // }
        console.log(productName);
      console.log(product);
        const { name, price, quantity } = product;
      if (name === productName); {
        
            console.log("in if price -destr----- ", price);
        console.log("in if q ------ ", quantity);
            // console.log("in if price ------ ", product.price);
         productPrice = (price);
        
            // return price;
            }
      }

    console.log(productPrice);
return productPrice;
  // Change code above this line
}
getProductPrice("Engine")