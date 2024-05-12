function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
 //  if (message.length <= maxLength) {
 // result = message;
 //    // .slice(0, maxLength);
 //  } 
 //    message = message.slice(0, maxLength);
 // result = (message + "...");

  if (message.length <= maxLength) {
 result = message;
    // .slice(0, maxLength);
 } else {
    
console.log(message, maxLength);
    message = message.slice(0, maxLength);
 result = (message + "...");

 }
  
  /// Change code above this line
  return result;
}

// ('Curabitur ligula sapien', 23) 
// ('Vestibulum facilisis purus nec', 30)
// ('Nunc sed turpis a felis in nunc fringilla', 41) 


// Функція formatMessage(message, maxLength) приймає рядок (параметр message) та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).

// Доповни код функції таким чином, що

// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.
// Оголошена функція formatMessage(message, maxLength)
// Виклик функції formatMessage("Curabitur ligula sapien", 16) повертає "Curabitur ligula..."
// Виклик функції formatMessage("Curabitur ligula sapien", 23) повертає "Curabitur ligula sapien"
// Виклик функції formatMessage("Vestibulum facilisis purus nec", 20) повертає "Vestibulum facilisis..."
// Виклик функції formatMessage("Vestibulum facilisis purus nec", 30) повертає "Vestibulum facilisis purus nec"
// Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) повертає "Nunc sed turpis..."
// Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) повертає "Nunc sed turpis a felis in nunc fringilla"


// Очікується оголошення 'Function Declaration'
// Функції присвоєно ім'я 'formatMessage'
// Функція 'formatMessage' має два параметри: 1-й - 'message', 2-й -'maxLength'
// Виклик функції formatMessage('Curabitur ligula sapien', 16) повертає 'Curabitur ligula...'
// Виклик функції formatMessage('Curabitur ligula sapien', 23) повертає 'Curabitur ligula sapien'
// Виклик функції formatMessage('Vestibulum facilisis purus nec', 20) повертає 'Vestibulum facilisis...'
// Виклик функції formatMessage('Vestibulum facilisis purus nec', 30) повертає 'Vestibulum facilisis purus nec'
// Виклик функції formatMessage('Nunc sed turpis a felis in nunc fringilla', 15) повертає 'Nunc sed turpis...'
// Виклик функції formatMessage('Nunc sed turpis a felis in nunc fringilla', 41) повертає 'Nunc sed turpis a felis in nunc fringilla'