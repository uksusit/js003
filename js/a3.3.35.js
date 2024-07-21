const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
      // Change code below this line
    console.log(this.books); 
    console.log(oldName, newName);
    console.log(this.updateBook);
     
let index = this.books.indexOf(oldName) ;
    console.log(index); 

  this.books.splice(index, 1, newName);
      console.log(this.books);
      return this.books;

    // Change code above this line
  },
};
// bookShelf.updateBook("Haze", "Dungeon chronicles");
bookShelf.updateBook('The last kingdom', 'Dune')

// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

// Оголошена змінна bookShelf

// Значення змінної bookShelf - це об'єкт

// Значення властивості bookShelf.updateBook - це метод об'єкта

// Після виклику методу bookShelf.updateBook("Haze", "Dungeon chronicles"), значення властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// Після виклику методу bookShelf.updateBook("The last kingdom", "Dune"), значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]