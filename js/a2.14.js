// Метод slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія робиться від begin і до, але не включно, end - індекси елементів вихідного масиву.

// Якщо begin та end не вказані, буде створена повна копія вихідного масиву.
// Якщо не вказаний end, копіювання буде від start до кінця вихідного масиву.
// Якщо значення start від'ємне, а end не вказане, то будуть скопійовані останні N елементів.
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']


const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(fruits.length - 3, fruits.length);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);


// Метод concat використовується для об'єднання двох або більше масивів. Він не змінює масив на якому викликається, а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.

// const firstArray = ["Mercury", "Venus", "Earth"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Uranus", "Neptune"];
// const allPlanets = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
// console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line
console.log(allClients);


// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) та maxLength (число). Функція повинна створювати новий масив, який містить всі елементи з firstArray, а потім всі елементи з secondArray.

// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку, функція повинна повернути весь новий масив.
// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

console.log("-------------------------------------------------------");
// function makeArray(firstArray, secondArray, maxLength) {
// const 
const firstArray = ["Mango", "Poly", "Houston"];
const secondArray = ["Ajax", "Chelsea"];
const    mixarray = firstArray.concat(secondArray);
// const mixarray= (, );
const maxLength = 6;
    // Change code below this line
  if (mixarray.length > maxLength) {
   //   return
  console.log(mixarray.slice(0, maxLength));
  }
  else
      //   return 
      console.log(mixarray);

    // Change code above this line
//   }


// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const mixarray = firstArray.concat(secondArray);
//   if (mixarray.length > maxLength) {
// return mixarray.slice(0, maxLength) ;
//   }
//   else return mixarray;

//     // Change code above this line
//   }
