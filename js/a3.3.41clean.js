const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      const potAll = [];
      for (const potion of this.potions){potAll.push(potion)};
      console.log(...potAll);
      return potAll;
      // return this.potions;
    },
    
    // addPotion(newPotion) {
    //   const potAll = [];
    //   for (const potion of this.potions){potAll.push(potion)};
    //   console.log(...potAll);
    //   if (potAll.includes(newPotion)) {
    //     return `Error! Potion ${newPotion} is already in your inventory!`;
    //   }
    //   potAll.push(newPotion);
    //   this.potions = potAll;
    // },
  
    addPotion(newPotion) {
      const potionsAll = [];
      for (const potion of this.potions) {
        // const { name, price } = potion;
  
      // let potionAdd = this.potions.find(potion => potion.name === newPotion);
      // console.log(potionAdd);
        
      console.log(this.potions);
      console.log("cur potion = ", potion.name, potion.price);
      console.log("new potion = ", newPotion);  
        if (potion.name === newPotion.name) {
          console.log(`Error! Potion ${newPotion} is already in your inventory!`);
           return  `Error! Potion ${newPotion.name} is already in your inventory!`;
        }
        potionsAll.push(potion);
      }
      console.log("--------end cycle---------");
      console.log("---- potions all = ", ...potionsAll);
      console.log("new potion = ", newPotion);
      // if (potionsAll.includes(newPotion)) {
      //   console.log(`Error! Potion ${newPotion} is already in your inventory!`);
      //   return `Error! Potion ${newPotion} is already in your inventory!`;
      // }
      // this.potions.push(newPotion);
        potionsAll.push(newPotion);
      // console.log(this.potions.length - 1);
      // const newPotionIndex = (this.potions.length - 1);
      // console.log(this.potions[newPotionIndex]);    
  
      console.log("---- potions all = ", ...potionsAll);
      this.potions.push(newPotion);
      console.log(this.potions);
      return this.potions;
       
    },
    
  
    removePotion(potionName) {
        console.log(...this.potions);
        // console.log("--------to remove: ", potionName);
  
         console.log(`Potion ${potionName} to delete` );
      for (const potion of this.potions) {
        const { name, price } = potion
        console.log("----------------current: ", potion);
        if (potion.name == potionName) {
                console.log("current: ", potion.name);
        console.log(`this Potion "${potion.name}" will be delete`);
          
          const potionIndex = this.potions.indexOf(potion);
        console.log("potInex: ", potionIndex);
          if (potionIndex == -1) {
          console.log(`Potion ${potionName} is not in inventory!`);
          return `Potion ${potionName} is not in inventory!`;
        }
      this.potions.splice(potionIndex, 1);
  }
      }
      console.log(...this.potions);
    },
    
    // removePotion(potionName) {
    //   const potionIndex = this.potions.indexOf(potionName);
  
    //   if (potionIndex === -1) {
    //     return `Potion ${potionName} is not in inventory!`;
    //   }
  
    //   this.potions.splice(potionIndex, 1);
    // },
  
    updatePotionName(oldName, newName) {
      const  potionsAll = [];
        console.log(oldName, newName);
        console.log("все в базі : ", ...this.potions);
      for (const potion of this.potions) {
       const { name, price } = potion;
        potionsAll.push(potion);
        console.log("current: ", potion);
        if (potion.name == oldName) {
          potion.name = newName;
        }
        }
     
        console.log("всі зілля in potionsAll: ", ...potionsAll);
      //      const potionIndex = [potionsAll].indexOf(oldName.name);
      //       console.log(potionIndex);
      // if (potionIndex === (-1)) { 
      //       console.log(`Potion "${oldName}" is not in inventory!`);
      //   // return `Potion ${oldName} is not in inventory!`;
      // }
      // this.potions.splice(potionIndex - 1 , 1, {name:newName,}); 
      // if (potionsAll.includes(oldName)) {
      // this.potions.splice(potionIndex, 1, newName);
              // console.log(`Error! Potion ${newName} is already in your inventory!`);
        console.log(`Potion ${oldName}wil be upd`);
        // return `Error! Potion ${newPotion} is already in your inventory!`;
      // }
      console.log("всі зілля in potions : ", ...this.potions);
      }
    
    // updatePotionName(oldName, newName) {
    //   const potionIndex = this.potions.indexOf(oldName);
  
    //   if (potionIndex === -1) {
    //     return `Potion ${oldName} is not in inventory!`;
    //   }
  
    //   this.potions.splice(potionIndex, 1, newName);
    // },
    // Change code above this line
  };
  