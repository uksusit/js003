

let country = prompt ("введіть значення (Australia, China, Chile, Jamaica)");
let price;
  
// function getShippingCost(country) {

  let message;
  // Change code below this line
  switch (country) {

    case "China":  message =  `Shipping to China will cost 100 credits`; break;
    case "Chile": message = `Shipping to ${country} will cost 250 credits`; break;
    case "Australia": price = 170; message = `Shipping to Australia will cost ${price} credits`; break;
    case "Jamaica": price = 120; message = `Shipping to ${country} will cost ${price} credits`; break;
    default: message = "Sorry, there is no delivery to your country";
          
  }
// Change code above this line
  
//   return message;

console.log(price);
console.log(message);

// }