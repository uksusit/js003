// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
//  Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
//  і додай в масив values всі значення його властивостей.

// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line

const keys = Object.keys(apartment);
console.log(keys);
for (const key of keys) {
  //     console.log("key=" , key);
  // // keys.push(key);
  // // Значення властивості з таким ключем
  // console.log("key value=", apartment[key]);
  values.push(apartment[key]);
// console.log(values);

}
console.log(values);


// --------------------------------- 14 ------------

console.log("----------- autochek number 14 ------------");

function countProps(object) {
  // Change code below this line
  let propCount = 0;
  console.log("object=", object);
const keys = Object.keys(object);
  console.log("obj keys: ", keys);
  console.log("-------------------------");
  for (const key of keys) {
    if (object.hasOwnProperty(key)) {
      console.log("obj key: ", key);
      console.log("obj key values: ", object[key]);
    propCount += 1;
  console.log("-----^---key", propCount);
    }
  }
    // propCount = Object.keys(object).length;
//   console.log("sum keys in object: ", propCount);
  return propCount;
  // Change code above this line
}

countProps({ name: "poly", mail: "poly@mail.com", isOnline: true, score: 500 });





