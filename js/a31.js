const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = (courseTopic.length);
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line

console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);


// Доповни код, присвоївши оголошеним змінним вирази звертання до відповідних елементів або властивостей рядка у змінній course.

// courseTopicLength - довжина рядка.
// firstElement - перший символ рядка.
// lastElement - останній символ рядка.
// Оголошена змінна courseTopic
// Значення змінної courseTopic - це рядок "JavaScript essentials"
// Оголошена змінна courseTopicLength
// Значення змінної courseTopicLength - це число 21
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "J"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "s"

let string = prompt("string");
let length = prompt("length");
// let substring;
let substring = string.slice(0, length); // Change this
console.log(substring);

substring = substring + "...";
//  let message = message.slice(0, maxLength);
console.log(substring);