{
  'use strict';

  const templateBook = {
    book: Handlebars.compile(document.querySelector('#template-book').innerHTML)
  };
  
  class BooksList {
    constructor() {
      const thisBook = this;

      const bookContainer = document.querySelector('.books-list');
      for (const book of dataSource.books){
        thisBook.ratingBgc = thisBook.determineRatingBgc(book.rating);
        thisBook.ratingWidth = book.rating * 10;
    
        book.ratingWidth = thisBook.ratingWidth;
        book.ratingBgc = thisBook.ratingBgc;
  
        // generate HTML based on template 
        const generatedHTML = templateBook.book(book);
        const generatedDOM = utils.createDOMFromHTML(generatedHTML);
        bookContainer.appendChild(generatedDOM);
      }
      thisBook.initActions();
    }
  
    initData() {
      this.data = dataSource.books;
    }
  
    initActions() {
      const thisBook = this;

      const bookImageClass = document.querySelectorAll('.book__image');
      const bookContainer = document.querySelector('.books-list');

      const favoriteBooksArray = [];

      for(let book of bookImageClass){
        const bookImg = book.querySelector('img');
        const bookId = book.getAttribute('data-id');
        book.setAttribute('onClick', 'event.preventDefault();');
        
        bookContainer.addEventListener('dblclick', function(event){
          event.preventDefault();
          if(event.target && event.target == bookImg){
            if(!favoriteBooksArray.includes(bookId)){
              favoriteBooksArray.push(bookId);
              book.classList.add('favorite');
            } else {
              favoriteBooksArray.shift(bookId);
              book.classList.remove('favorite');
            }    
          }
        });
      }  
      const filtersBoxes = document.querySelector('.filters');

      const inputElems = filtersBoxes.getElementsByTagName('input');
      const filters = [];
      
      for(let inputElem of inputElems){
        inputElem.addEventListener('input', function(event){
          event.preventDefault();
          const value = inputElem.getAttribute('value');
          const checkedValue = inputElem.checked;
  
          if(checkedValue){
            filters.push(value);
          } else {
            const index = filters.indexOf(value);
            filters.splice(index, 1);
          }
          console.log('filters :', filters); // aktualna tablica filters
          thisBook.filterBooks(filters);
        });
      }
    }
  
    filterBooks(filters) {
      const bookContainer = document.querySelector('.books-list');

      for(let book of dataSource.books){
        let shouldBeHidden;
        for(let filter of filters){
          if(!book.details[filter]) {
            shouldBeHidden = true;
            break;
          }
        }
        const bookImage = bookContainer.querySelector('.book__image[data-id="' + book.id + '"]');
        if(shouldBeHidden === true){
          bookImage.classList.add('hidden');
        } else {
          bookImage.classList.remove('hidden');
        }
      }
    }
  
    determineRatingBgc(rating) {
      let background;
      if(rating <= 6){
        background = 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%)';
      } else if (rating > 6 && rating <= 8){
        background = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
      } else if (rating > 8 && rating <= 9){
        background = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
      } else if (rating > 9){
        background = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
      }
      return background;
    }
  }
  
  new BooksList();
}


