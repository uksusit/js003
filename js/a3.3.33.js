// Change code below this line
function findMatches(array, ...args) {
  const matches = []; // Don't change this line
    // const match
    
for (arg of args){
  // if arg  includes(matches)
  if array.include(arg) matches.push(arg);
  
}
  
  // Change code above this line
  return matches;
}
