// Методи split() і join()​



// Метод split(delimiter) перетворює рядок в масив, «розбиваючи» його роздільником delimiter. 
// Якщо роздільник - це порожній рядок, то створиться масив окремих символів.
// Роздільником може бути один або декілька символів.



const name1 = "Mango";
console.log(name1.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript - це цікаво";
console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]


const splitTest = "ryzen 4700u 8 512 2in1";
console.log(splitTest.split(" "));  // (5) ['ryzen', '4700u', '8', '512', '2in1']





// Метод масивів join(delimiter) об'єднує елементи масиву у рядок.
// У рядку елементи будуть розділені символом або групою символів, зазначених в delimiter.
// Тобто ця операція протилежна методу рядків split(delimiter).



const words = ["JavaScript", "це", "цікаво"];
console.log(words.join("")); // "JavaScriptцецікаво"
console.log(words.join(" ")); // "JavaScript це цікаво"
console.log(words.join("-")); // "JavaScript-це-цікаво"


// for comp DB
const spec = ["ryzen", "4700u", "8", "512", "2in1"];
console.log(spec.join("/"));  // ryzen/4700u/8/512/2in1
