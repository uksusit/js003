function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  console.log("object=", salaries);
// const keys = Object.keys(salaries);
//   console.log("obj keys: ", keys);
//   console.log("-------------------------");
//   for (const key of keys) {
//     // if (object.hasOwnProperty(key)) {
//       console.log("obj key: ", key);
//       console.log("obj key values: ", salaries[key]);
//    totalSalary += salaries[key];
//   console.log("-----^---key", totalSalary);
//       console.log("cicle: ", key)
//     }
const values = Object.values(salaries);
  console.log("obj values: ", values);
  console.log("-------------------------");
  for (const value of values) {
    // if (object.hasOwnProperty(value)) {
      console.log("obj value: ", value);
    //   console.log("obj value values: ", salaries[value]);
   totalSalary += value;
  console.log("-----^---value", totalSalary);
      console.log("cicle: ", value)
    }

// totalSalary = Object.values(salaries);
  
    // Change code above this line
    console.log(totalSalary);
  return totalSalary;
}
countTotalSalary({ mango: 100, poly: 150, alfred: 80 })

