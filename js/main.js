console.log('JavaScript is running!');

/* const is a type of varible - a bit of memory that can hold a value

JS uses( can use) any vaild css selector to make a connectrion to any element on the page - it works the same way as css selectors do, because it's using css selectors to find matching element(s).

The document is the DOM - the web page and all of its elements

queryselector is the method (function) that makes the connection between js and the DOM (the element) */

// step 1 - make the connection to the element(s) you want to interact with

const jpgGraphic = document.querySelector('#bitmap')
const vectorGraphic = document.querySelector('#vector')

function logID () {
    console.log('click on this element:', this.id);
}

// step 2 - decide how you want the user to interact with the object created in step 1

jpgGraphic.addEventListener('click', logID);
vectorGraphic.addEventListener('click', logID);

