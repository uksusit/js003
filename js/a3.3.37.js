// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

//     return  this.potions.push(potionName);

//     // Change code above this line
//   },
// };


// ------------39-----------

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//         const values = Object.values(this.potions);
//       console.log(values);
//       console.log(this.potions.indexOf(potionName));
//       this.potions.splice(this.potions.indexOf(potionName), 1);
//       console.log(this.potions);
      
//       return potionName;
//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion('Dragon breath')

// --------40-------------------


const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
  console.log(this.potions); 
    console.log(oldName, newName);
    console.log(this.updatePotionName);
     
let index = this.potions.indexOf(oldName) ;
    console.log(index); 

  this.potions.splice(index, 1, newName);
      console.log(this.potions);
      return this.potions;

    // Change code above this line
  },
};
atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
atTheOldToad.updatePotionName("Stone skin", "Invisibility");
