// Додають або видаляють крайні елементи масиву. Працюють тільки
//  з крайнім лівим і крайнім правим елементом,
//  і не можуть вставити або видалити елемент з довільної позиції.

// Метод push() додає один або декілька елементів наприкінці масиву,
//  без необхідності зазначати індекси елементів, що додаються.
//  Повертає довжину масиву після додавання елементів.

const numbers = [];

numbers.push(1);
console.log(numbers); // [1]

numbers.push(2);
console.log(numbers); // [1, 2]

numbers.push(3);
console.log(numbers); // [1, 2, 3]

numbers.push(43);
console.log(numbers); // [1, 2, 3, 4]

numbers.push(55);
console.log(numbers); // [1, 2, 3, 4, 5]

// Метод pop() видаляє останній елемент з кінця масиву і повертає видалений елемент. Якщо масив порожній, метод повертає undefined.

const nums = [1, 2, 3, 4, 5];

console.log(nums.pop()); //  5
console.log(nums); // [1, 2, 3, 4]

console.log(nums.pop()); //  4
console.log(nums); // [1, 2, 3]

console.log(nums.pop()); //  3
console.log(nums); // [1, 2]

console.log(nums.pop()); //  2
console.log(nums); // [1]

console.log(nums.pop()); //  1
console.log(nums); // []

// Метод slice()​

// slice(begin, end) повертає новий масив, що містить
//  копію частини вихідного масиву, не змінюючи його.
// Копія створюється з begin і до, але не включно,
// end - індекси елементів вихідного масиву.

const spec2 = ["ryzen", "4700u", "16", "1Tb", "2in1"];
console.log(spec2.slice(1.4)); // (4) ['4700u', '16', '1Tb', '2in1']
console.log(spec2.slice()); // (5) ['ryzen', '4700u', '16', '1Tb', '2in1']

// Якщо begin і end не зазначені, буде створена повна копія вихідного масиву.


// Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.


const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
console.log(clients.slice(2)); // ["Poly", "Kiwi"]


// Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.
// Якщо значення start від'ємне, а end не зазначено - будуть скопійовані останні start елементи

const clts = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clts.slice(-2)); // ["Poly", "Kiwi"]