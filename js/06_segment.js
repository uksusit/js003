

const x1 = 10;
const x2 = 30;
const number = 15;

console.log(`число ${number} попадає в відрізок до ${x1}? `, number < x1);
console.log(`число ${number} попадає в відрізок після ${x2}? `, number > x2);

const res = number > x1 && number < x2;



console.log(`число ${number} попадає у відрізок від ${x1} до ${x2} ? `, res);


const res2 = number < x1 || number > x2;

console.log(`число ${number} попадає у відрізок до ${x1} або після ${x2} ? `, res2);




const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log(`можна відкрити чат? `, canOpenChat);

//тіко як 2 варіанти
const balance = 100;
const msg = balance >= 0 ? `позитив ` : 'негатив ';
console.log(msg);