const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  
const prodts =[];
    for (const product of products) {
        console.log("product: ", product);
        // const { name, price, quantity } = product;
        // const values = Object.values(product);
        // console.log("values: ", values);
        console.log("propname: ",  propName);
      if (product.key = propName) {
        console.log("product.key: ", product.key);
        console.log("product.value: ", product[product.key]);
        if (product[product.key] != undefined) {
            prodts.push(product[product.key]);
        }

        }
  }

            console.log("return: ", prodts);
  return prodts;

  // Change code above this line
}

getAllPropValues("name");
            console.log("-------------------next ");

getAllPropValues("category");


