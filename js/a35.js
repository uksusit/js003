function checkForName(fullName, name) {
 const result = (fullName.includes(name)) ; // Change this line
  return result;
}


// Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка name у рядок fullname.

// fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
// name - ім'я для перевірки входження в повне ім'я.
// Присвой змінній result вираз перевірки входження імені (параметр name), у повне ім'я (параметр fullname). Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.

// Оголошена функція checkForName(fullname, name).
// Виклик функції checkForName("Egor Kolbasov", "Egor") повертає true
// Виклик функції checkForName("Egor Kolbasov", "egor") повертає false
// Виклик функції checkForName("Egor Kolbasov", "egOr") повертає false
// Виклик функції checkForName("Egor Kolbasov", "Zhenya") повертає false
// Виклик функції checkForName("Vadim Nekrasov", "Vadim") повертає true
// Виклик функції checkForName("Vadim Nekrasov", "vadim") повертає false
// Виклик функції checkForName("Vadim Nekrasov", "Dima") повертає false