// Напиши функцію calculateTotalPrice(productName),
    // яка приймає один параметр productName - назва товару.
    // Функція повинна повернути загальну вартість(ціна * кількість)
    // товару з таким ім'ям з масиву products.

// Оголошена функція calculateTotalPrice(productName)
// Виклик calculateTotalPrice("Blaster") повертає 0
// Виклик calculateTotalPrice("Radar") повертає 5200
// Виклик calculateTotalPrice("Droid") повертає 2800
// Виклик calculateTotalPrice("Grip") повертає 10800
// Виклик calculateTotalPrice("Scanner") повертає 8100

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
    // Change code below this line
    
    for (const product of products) {
        console.log("productName: ", productName);
        console.log("product.name", product.name);

        if (product.name === productName) {
            console.log("product.name: ", product.name);
            console.log("product.price: ", product.price);
            console.log("product.quantity: ", product.quantity);
            
            console.log("product-cost: ", product.price * product.quantity);
            return (product.price * product.quantity);
        }
    }
    return 0;

  // Change code above this line
}
calculateTotalPrice("Grip");



//  ------------   a21

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// const {yesterday, today, tomorrow } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
