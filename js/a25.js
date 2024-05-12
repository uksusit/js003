function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  // if (ordered > available) {
  //   message = "Not enough goods in stock!";
  // } else {
  //   message = "The order is accepted, our manager will contact you";
  // }

message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  
  // Change code above this line
  return message;
}


// Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

// Оголошена функція checkStorage(available, ordered).
// Використаний тернарний оператор.
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 150) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(150, 180) повертає "Not enough goods in stock!"