// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.
// Поради:

// Зміни код кожного методу для роботи з новим масивом об’єктів зілля.
// Переконайся, що ти маєш правильний доступ до властивостей name і price кожного об'єкта зілля.
// Використовуй цикли або методи ітерації, щоб перебирати масив інвентаризації та виконувати необхідні перевірки та оновлення.
// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() для вихідного об'єкта повертає [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// Значення властивості atTheOldToad.addPotion - це метод об'єкта.
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в масиві potions останнім елементом буде цей об'єкт
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в масиві potions останнім елементом буде цей об'єкт
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного коду
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт
// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), масив potions не змінюється
// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), массив potions не змінюється
// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), повертає рядок "Error! Potion Dragon breath is already in your inventory!"
// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), повертає рядок "Error! Potion Stone skin is already in your inventory!"
// Значення властивості atTheOldToad.removePotion - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Dragon breath"), у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Speed potion"), у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]



const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line

  //  costPotions(potionName, quantity) {
  //   // const quantity = 0;
  //     for (const potion of this.potions) {
  //       console.log("potionName: ", potionName);
  //       console.log("potion.name", potion.name);

  //       if (potion.name === potionName) {
  //         console.log("potion.name: ", potion.name);
  //         console.log("potion.price: ", potion.price);
  //         // console.log("potion.quantity: ", potion.quantity);
            
  //         console.log("potion-cost: ", potion.price * potion.quantity);
  //         return (potion.price * potion.quantity);
  //       }
  //     }
  //     return 0;
  //   },

//   getPotions() {
//     const potAll = [];
//     for (const potion of this.potions){potAll.push(potion)};
//     console.log(...potAll);
//     return potAll;
//     // return this.potions;
//   },

//   // getPotions() {
//   //   const { ...potion } = this.potions;
//   //    console.log("potions : ", this.potions);
//   //   const potionsAll = [];
//   //   for (const potion of this.potions) {
//   //     const { name, price } = potion;
//   //     // console.log("potions = ", this.potions);
//   //     // console.log("current potion = ", potion);
//   //     // console.log("potion name = ", potion.name);
//   //     // console.log("potion price = ", potion.price);
//   //     potionsAll.push(potion);
//   //     console.log("potions = ", ...potionsAll);
//   //     // return potionsAll;
//   //   }
//   //   console.log("-------------------------end get ptns--------------------");
//   // },
// // };

//   addPotion(newPotion) {
//     const potionsAll = [];
//     for (const potion of this.potions) {
//       // const { name, price } = potion;

//     // let potionAdd = this.potions.find(potion => potion.name === newPotion);
//     // console.log(potionAdd);
      
//     console.log(this.potions);
//     console.log("cur potion = ", potion.name, potion.price);
//     console.log("new potion = ", newPotion);  
//       if (potion.name === newPotion.name) {
//         console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
//          return 'Error! Potion Dragon breath is already in your inventory!';
//       }
//       potionsAll.push(potion);
//     }
//     console.log("--------end cycle---------");
//     console.log("---- potions all = ", ...potionsAll);
//     console.log("new potion = ", newPotion);
//     // if (potionsAll.includes(newPotion)) {
//     //   console.log(`Error! Potion ${newPotion} is already in your inventory!`);
//     //   return `Error! Potion ${newPotion} is already in your inventory!`;
//     // }
//     // this.potions.push(newPotion);
//       potionsAll.push(newPotion);
//     // console.log(this.potions.length - 1);
//     // const newPotionIndex = (this.potions.length - 1);
//     // console.log(this.potions[newPotionIndex]);    

//     console.log("---- potions all = ", ...potionsAll);
//     this.potions.push(newPotion);
//     console.log(this.potions);
//     return this.potions;
     
//   },

    
  //     // console.log(oldName, newName);
  
//   removePotion(potionName) {
//       console.log(...this.potions);
//       // console.log("--------to remove: ", potionName);

//        console.log(`Potion ${potionName} to delete` );
//     for (const potion of this.potions) {
//       const { name, price } = potion
//       console.log("----------------current: ", potion);
//       if (potion.name == potionName) {
//               console.log("current: ", potion.name);
//       console.log(`this Potion "${potion.name}" will be delete`);
        
//         const potionIndex = this.potions.indexOf(potion);
//       console.log("potInex: ", potionIndex);
//         if (potionIndex == -1) {
//         console.log(`Potion ${potionName} is not in inventory!`);
//         return `Potion ${potionName} is not in inventory!`;
//       }
//     this.potions.splice(potionIndex, 1);
// }
//     }
//     console.log(...this.potions);
//   },

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
//   // Change code above this line
};

// atTheOldToad.costPotions("Dragon breath", 5)
// atTheOldToad.getPotions();
// atTheOldToad.addPotion({name: 'Dragon breath', price: 780});
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 })
// atTheOldToad.removePotion("Dragon breath")
// atTheOldToad.removePotion("Speed potion")
atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")



// Оголошена змінна 'atTheOldToad'
// Значення змінної `atTheOldToad` - це об'єкт
// Значення властивості `atTheOldToad.getPotions` - це метод об'єкта
// Значення властивості `atTheOldToad.addPotion` - це метод об'єкта
// Значення властивості `atTheOldToad.removePotion` - це метод об'єкта
// Значення властивості `atTheOldToad.updatePotionName` - це метод об'єкта
// Виклик методу `atTheOldToad.getPotions()` для вихідного об'єкта повертає `[ { name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 } ]`
// Для вихідного об'єкта після виклику методу `atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })`, в масиві `potions` останнім елементом буде цей об'єкт
// Для вихідного об'єкта після виклику методу `atTheOldToad.addPotion({ name: 'Power potion', price: 270 })`, в масиві `potions` останнім елементом буде цей об'єкт
// Якщо зілля, що додається, вже є в масиві `potions`, метод `addPotion` повертає рядок з текстом з вихідного коду.
// Для вихідного об'єкта виклик `atTheOldToad.addPotion({ name: 'Stone skin', price: 240 })`, повертає рядок `'Error! Potion Stone skin is already in your inventory!'`.
// Для вихідного об'єкта виклик `atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })`, повертає рядок `'Error! Potion Dragon breath is already in your inventory!'`.
// Якщо зілля, що додається, вже є в масиві `potions`, метод `addPotion` не додає в нього переданий об'єкт.
// Для вихідного об'єкта після виклику `atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })`, массив `potions` не змінюється.
// Для вихідного об'єкта після виклику методу `atTheOldToad.removePotion('Dragon breath')`, у властивості `potions` буде масив `[ { name: 'Speed potion', price: 460 }, { name: 'Stone skin', price: 520 } ]`
// Для вихідного об'єкта після виклику методу `atTheOldToad.removePotion('Speed potion')`, у властивості `potions` буде масив `[ { name: 'Dragon breath', price: 780 }, { name: 'Stone skin', price: 520 }]`
// Для вихідного об'єкта після виклику методу `atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')`, у властивості `potions` буде масив `[{ name: 'Speed potion', price: 460 }, { name: 'Polymorth', price: 780 }, { name: 'Stone skin', price: 520 } ]`
// Для вихідного об'єкта після виклику методу `atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')`, у властивості `potions` буде масив `[{ name: 'Speed potion', price: 460 }, { name: 'Dragon breath', price: 780 }, { name: 'Invulnerability potion', price: 520 } ]`