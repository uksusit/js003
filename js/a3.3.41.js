const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },

  ],
  // Change code below this line

  getPotions() {
    const  potionsAll = [];
    for (const potion of this.potions) {
      const {name, price} = potion;
      console.log("current potion = ", potion);
      console.log("potion name = ", potion.name );
      console.log("potion price = ", potion.price);
      potionsAll.push(potion);
      console.log("potions = ", ...potionsAll);
    // return potionsAll;
      }
      console.log("-------------------------end get ptns--------------------");
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      const { name, price } = potion;
      console.log("current potion = ", potion);
    console.log("new potion = ", newPotion);
    //     console.log(potion.name);
    // console.log(this.addPotion);
let index = this.potions.indexOf(newPotion) ;
    console.log(index); 

  this.potions.splice(index, 1, newPotion);
      console.log(this.potions);
      return this.potions;
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
    }
     
  },

    
    // console.log(this.potions); 
    // console.log(oldName, newName);
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  // updatePotionName(oldName, newName) {
  //   const potionIndex = this.potions.indexOf(oldName);

  //   if (potionIndex === -1) {
  //     console.log()
  //     return `Potion ${oldName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1, newName);
  // },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions){
         const potionIndex = this.potions.indexOf(oldName);

      console.log(this.potions);
    console.log(potion);
      console.log(this.potions[name]);
          console.log(potionIndex);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  }
    }
  
  // Change code above this line
};

atTheOldToad.getPotions();
atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });


