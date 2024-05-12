
// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result);

// let elementHeight = '5655.2226px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight:', elementHeight);



// let salary = 64654.226589;
// salary = salary.toFixed(2);
// salary = Number(salary);
// console.log(salary);

// let salary = 64654.226589;
// salary = Number(salary.toFixed(2));
// // salary = Number(salary);
// console.log(salary);


// const base = 10;
// const power = 3;
// const result = Math.pow(base, power);
// console.log(result);

// console.log(10 ** 3);


// let base = prompt('введіть число');
// let power = prompt('тепер міру');
// base = Number(base);
// power = Number(power);
// console.log(base ** power);


const colors = ['tomato', 'gray', 'purple', 'green', 'orange'];
const max = colors.length - 1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);
console.log(index);
const color = colors[index];
console.log(color);
document.body.style.backgroundColor = color;



