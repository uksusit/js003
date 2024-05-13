
// Перебирання об'єкта
// Перебирання об'єкта

// На відміну від масиву або рядка, об'єкт - це неітерабельна сутність, тобто його не можна перебрати циклами for або for...of.

// Цикл for...in​

// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

// for (key in object) {
//   // інструкції
// }

// Змінна key доступна тільки в тілі циклу. На кожній ітерації в неї буде записано значення ключа (ім'я) властивості. Для того, щоб отримати значення властивості з таким ключем (ім'ям), використовується синтаксис квадратних дужок.


const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
}


// Метод hasOwnProperty()​

// Розберемо концепцію власних і невласних властивостей об'єкта і навчимося правильно використовувати цикл for...in.



const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4



// Метод Object.create(animal) створює і повертає новий об'єкт, зв'язуючи його з об'єктом animal. Тому можна отримати значення властивості legs, звернувшись до нього як dog.legs, хоча він відсутній в об'єкті dog - це невласна властивість з об'єкта animal.



// Оператор in, який використовується в циклі for...in, не робить різниці між власними та невласними властивостями об'єкта. Ця особливість заважає, оскільки ми завжди хочемо перебрати тільки власні властивості. Для того, щоб дізнатись, чи містить об'єкт власну властивість, використовується метод hasOwnProperty(key), який повертає true або false.



// ❌ Повертає true для всіх властивостей
console.log("name" in dog); // true
console.log("legs" in dog); // true

// ✅ Повертає true тільки для власних властивостей
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false



// Тому, перебираючи циклом for...in, необхідно на кожній ітерації додати перевірку власної властивості.Навіть, якщо зараз ми впевнені у тому, що в об'єкті відсутні невласні властивості, це захистить від можливих помилок у майбутньому.

const book1 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book1) {
  // Якщо це власна властивість - виконуємо тіло if
  if (book1.hasOwnProperty(key)) {
    console.log(key);
    console.log(book1[key]);
  }

  // Якщо це невласна властивість - нічого не робимо
}


// Метод Object.keys()​

// Вбудований клас Object має декілька корисних методів для роботи з об'єктами. Перший з них - це Object.keys(obj), який приймає об'єкт і повертає масив ключів його власних властивостей. Якщо об'єкт не має властивостей, метод поверне порожній масив.



console.log("---------book2--------");
const book2 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book2);
console.log(keys); // ['title', 'author', 'genres', 'rating']



// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати власні властивості об'єкта, і не використовуючи архаїчний цикл for...in з перевірками належності властивостей.

console.log("---------book3--------");
const book3 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys3 = Object.keys(book3);

for (const key of keys3) {
  // Ключ
  console.log(key);
  // Значення властивості
  console.log(book3[key]);
}

// Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо значення властивості з таким ключем.



// Метод Object.values()​

// Якщо метод Object.keys(obj) повертає масив ключів власних властивостей об'єкта, то метод Object.values(obj) повертає масив значень його власних властивостей. Якщо в об'єкті відсутні властивості, метод Object.values(obj) поверне порожній масив.


console.log("---------book4--------");
const book4 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys4 = Object.keys(book4);
console.log(keys4); // ['title', 'author', 'rating']

const values = Object.values(book4);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]



// Масив значень властивостей також можна перебрати циклом for...of, наприклад, для отримання загальної суми числових значень.



// Припустимо, що нам потрібно порахувати загальну кількість продуктів в об'єкті формату ім'я-продукту: кількість. У такому випадку, буде доречним метод Object.values() для того, щоб отримати масив усіх значень, а потім зручно додати їх.


console.log("кількість ---------5----------");
const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};

const values5 = Object.values(goods); // [6, 3, 4, 7]

let total = 0;

for (const value of values5) {
  total += value;
}

console.log(total); // 20



// Метод Object.entries()​

// Метод Object.entries(obj) повертає масив записів, кожен елемент якого, буде ще один масив з 2-х елементів: імені властивості і значення цієї властивості з об'єкта obj.


console.log("---------book6--------");
const book6 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys6 = Object.keys(book6);
console.log(keys); // ['title', 'author', 'rating']

const values6 = Object.values(book6);
console.log(values6); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const entries = Object.entries(book6);
console.log(entries);
// [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]  


// ЦІКАВО

// На практиці метод Object.entries(obj) використовується рідко, тільки для якихось дуже специфічних завдань.У 99 % випадків буде використаний метод Object.keys() або Object.values().
