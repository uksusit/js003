// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

//     return  this.potions.push(potionName);

//     // Change code above this line
//   },
// };


// ------------39-----------

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
        const values = Object.values(this.potions);
      console.log(values);
      console.log(this.potions.indexOf(potionName));
      this.potions.splice(this.potions.indexOf(potionName), 1);
      console.log(this.potions);
      
      return potionName;
    // Change code above this line
  },
};
atTheOldToad.removePotion('Dragon breath')