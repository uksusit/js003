
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// const  mesArray = (message.split(" "));
// const amount = mesArray.length;
//   return amount * pricePerWord;
//    // Change code above this line
// }

//  або так:
function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
  return (message.split(" ")).length * pricePerWord;
   // Change code above this line
}


// 2,12
// Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.

// Оголошена функція makeStringFromArray(array, delimiter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"


function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line
string = array.join(delimiter);


  // Change code above this line
  return string;
}

// a2.13
// Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.
// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.

// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире
// Оголошена функція slugify(title)
// Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"
        // --------------------      roadmap:    --------------
// const slugify = ("Arrays for BegGiners");
// console.log(slugify);
// const normSlugify = slugify.toLowerCase();
// console.log(normSlugify);
// const setArr = normSlugify.split(" ");
// const slug = setArr.join("-");
// console.log(slug);

// function slugify(title) {
//   // Change code below this line
// const notmTitle = title.toLowerCase();
// const setArr = notmTitle.split(" ");
// const slug = setArr.join("-");
// return slug;
//   // Change code above this line
// }

// аво:
//         function slugify(title) {
//   // Change code below this line
// const slug = title.toLowerCase().split(" ").join("-");
// return slug;
//   // Change code above this line
// }

//  аво:
    function slugify(title) {
  // Change code below this line
return title.toLowerCase().split(" ").join("-");
  // Change code above this line
}