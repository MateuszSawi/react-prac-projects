{
  'use strict';

  // Cwiczenie 1

  const templateBook = {
    book: Handlebars.compile(document.querySelector('#template-book').innerHTML)
  };
  const bookContainer = document.querySelector('.books-list');
  //const bookList = document.querySelectorAll('.book-list');

  function render(){
    for (const book of dataSource.books){
      // generate HTML based on template 
      const generatedHTML = templateBook.book(book);
      const generatedDOM = utils.createDOMFromHTML(generatedHTML);
      bookContainer.appendChild(generatedDOM);
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
      //bookImg.setAttribute('onClick', 'event.preventDefault();');
      
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
    //const labels = filtersBoxes.getElementsByTagName('label');

    
    const inputElems = filtersBoxes.getElementsByTagName('input');
    console.log('inputElems: ', inputElems);
    
    for(let inputElem of inputElems){
      inputElem.addEventListener('input', function(event){
        event.preventDefault();

        //const name = inputElem.getAttribute('name');
        const value = inputElem.getAttribute('value');
        //const type = inputElem.getAttribute('type');

        //console.log('name: ', name);
        console.log('value: ', value);
        //console.log('type: ', type);
      });
      
    }
    
    
    
    // https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbytagname/

    // cw 5, etap 1

  }
  initActions();
 
  // Cwiczenie 5 

  //const filters = [];

  
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