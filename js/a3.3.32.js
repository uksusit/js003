// Change code below this line
function addOverNum(max, ...args) {
  let total = 0;
  // let max=0;
  

  for (const arg of args) {
    if (arg > max)     total += arg;
  }

  return total;
  // Change code above this line
}
