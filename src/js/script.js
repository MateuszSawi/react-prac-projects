{
  'use strict';

  // Cwiczenie 1

  const templateBook = {
    book: Handlebars.compile(document.querySelector('#template-book').innerHTML)
  };
  const bookContainer = document.querySelector('.books-list');

  function determineRatingBgc(rating){
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

  function render(){
    for (const book of dataSource.books){
      const ratingBgc = determineRatingBgc(book.rating);
      const ratingWidth = book.rating * 10;
  
      book.ratingWidth = ratingWidth;
      book.ratingBgc = ratingBgc;

      // generate HTML based on template 
      const generatedHTML = templateBook.book(book);
      const generatedDOM = utils.createDOMFromHTML(generatedHTML);
      bookContainer.appendChild(generatedDOM);
    }
    //  https://stackoverflow.com/questions/30035932/how-do-i-use-this-javascript-variable-in-html
    //  https://www.javascripttutorial.net/dom/css/add-styles-to-an-element/
  }

  function fillings(){
    const fillingContainer = document.querySelectorAll('.book__rating__fill');
      for(let filling of fillingContainer){
        filling.style.background = ratingBgc;
        filling.style.width = ratingWidth;
        
      }
  }


  render();
  
  // Cwiczenie 2

  const bookImageClass = document.querySelectorAll('.book__image');
  const favoriteBooksArray = [];

  function initActions(){
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
    // console.log('inputElems: ', inputElems);
    
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
        filterBooks();
      });
    }

    function filterBooks(){
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


    
    // class BooksList {
    //   constructor() {
        
    //   }
    
    //   initData() {
    //     this.data = dataSource.books;
    //   }
    
    //   getElements() {
        
    //   }
    
    //   initActions() {
        
    //   }
    
    //   filterBooks() {
        
    //   }
    
    //   determineRatingBgc() {
        
    //   }
    
    // }
    
    // const app = new BooksList();

  }

  const filters = [];
  initActions();



















































  // https://stackoverflow.com/questions/17238348/using-addeventlistener-to-add-a-callback-with-arguments 



  // for(let book of dataSource.books){
  //   let shouldBeHidden = false;
  //   console.log('book: ', book.details);
  //   for(let filter of filters){
  //     if(!book.details[filter]) {
  //       shouldBeHidden = true;
  //       break;
  //     }
  //   }
  //   const bookImage = document.querySelectorAll('.book__image[data-id="book.id"]');
  //   if(shouldBeHidden = true){
  //     bookImage.classList.add('hidden');
  //   } else {
  //     bookImage.classList.remove('hidden');
  //   }
  // }









  // for(let detail in book.details){
  //   console.log('detail: ', detail);
  //   if(filters.includes(detail)){
  //     console.log('includes');
  //     bookImageClass.classList.add('hidden');
  //   }
  // }








































  // const filtersBoxes = document.querySelector('.filters');
  //   const labels = filtersBoxes.querySelectorAll('label');

  //   for(let label of labels){
  //     const inputElem = label.querySelector('input');
      
  //     inputElem.addEventListener('click', function(event){
  //       event.preventDefault();

  //       const name = inputElem.getAttribute('name');
  //       const value = inputElem.getAttribute('value');
  //       const type = inputElem.getAttribute('type');

  //       //console.log('label: ', label);
  //       //console.log('inputElem: ', inputElem);
  //       //console.log('name: ', name);
  //       console.log('value: ', value);
  //       //console.log('type: ', type);
  //     });
  //   }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Cwiczenie 3

  // function initActions(){
  //   for(let book of bookImageClass){
  //     const bookImg = book.querySelector('img');
  //     const bookId = book.getAttribute('data-id');

  //     bookImg.addEventListener('dblclick', function(event){
  //       event.preventDefault();
  //       if(!favoriteBooksArray.includes(bookId)){
  //         favoriteBooksArray.push(bookId);
  //         book.classList.add('favorite');
  //       } else {
  //         favoriteBooksArray.shift(bookId);
  //         book.classList.remove('favorite');
  //       }    
  //     });
  //   }
  // }
  // initActions();






  








}