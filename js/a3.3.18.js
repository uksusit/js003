const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line

    const keys = Object.keys(products);
  console.log("keys in product: ", keys);
  let productPrice = null;
  console.log(productPrice);
  console.log("-------------");
    for (const product of products) {
        console.log("for -- product:", product);
            console.log("product.name: ", product.name);
            console.log(product.price);
            console.log(product.quantity);
        // if (product.name = productName) {
        //     console.log(product.name);
        //     console.log(product.price);
        //     console.log(product.quantity);
        //   return product.price;
        //     // break;
      // }
        console.log("---  for productName :   ", productName);
      console.log("--- for product: ", product);
        const { name, price, quantity } = product;
      if (product.name === productName) {
        console.log("if  --- for product: ", product);
        console.log("in if price -destr----- ", product.price);
        console.log("in if q ------ ", quantity);
            // console.log("in if price ------ ", product.price);
         productPrice = (price);
         console.log("in if productPrice -destr----- ", productPrice);
            // return price;
      }      
      console.log("after if  -destr--- for product-- ", product);
      console.log("ater if price -destr----- ", productPrice);
    }

console.log("--------------end------------after  for (return) : ", productPrice);
return productPrice;
  // Change code above this line
}
getProductPrice("Droid");


// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.