const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
  ],
  // Change code below this line

 costPotions(potionName, quantity) {
  // const quantity = 0;
    for (const potion of this.potions) {
      console.log("potionName: ", potionName);
      console.log("potion.name", potion.name);

      if (potion.name === potionName) {
        console.log("potion.name: ", potion.name);
        console.log("potion.price: ", potion.price);
        // console.log("potion.quantity: ", potion.quantity);
            
        console.log("potion-cost: ", potion.price * potion.quantity);
        return (potion.price * potion.quantity);
      }
    }
    return 0;
  },

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
    const potionsAll = [];
    for (const potion of this.potions) {
      const { name, price } = potion;
      potionsAll.push(potion);
    }
    console.log("---- potions all = ", ...potionsAll);
    console.log("new potion = ", newPotion);
    if (potionsAll.includes(newPotion)) {
      console.log(`Error! Potion ${newPotion} is already in your inventory!`);
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }
    this.potions.push(newPotion);
    // console.log(this.potions.length - 1);
    // const newPotionIndex = (this.potions.length - 1);
    // console.log(this.potions[newPotionIndex]);
    
    return this.potions;
     
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

atTheOldToad.costPotions("Dragon breath", 5)
// atTheOldToad.getPotions();
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });

