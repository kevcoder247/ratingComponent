//Rating List
const container = document.getElementById('container');
const icon = document.querySelector('img');
const h1Element = document.querySelector('h1');
const pElement = document.querySelector('p');
const list = document.getElementById('rating-value');
const submitBtn = document.getElementById('submitBtn');


//Varaible that stores what rating was picked
let selectedRating;


//Click Event listener on list
list.addEventListener('click', (e) => {
  
  //check if list item was clicked and if it was change its background color to nothing when another item is clicked
  if(e.target.tagName == 'LI'){
    if(selectedRating){
      const previouslySelected = list.querySelector(`[data-value="${selectedRating}"]`)
      if(previouslySelected){
        previouslySelected.style.backgroundColor = '';
      }
    }
    
    //Get Value from the data attribute and set it to the selected rating variable
    selectedRating = e.target.getAttribute('data-value');

    //set styles fro the newly created elements
    e.target.style.backgroundColor = 'grey';
    e.target.style.color = 'white';


    //convert string into a number
    selectedRating = parseInt(selectedRating)
    

    console.log(selectedRating)
  }
})


//Click event listener for the submit button
submitBtn.addEventListener('click', () => {
  if(selectedRating !== undefined){
    h1Element.textContent = `You selected ${selectedRating} out of 5`;
    h1Element.classList.add('selection')

    //create new element
    const newH2 = document.createElement('h2');

    //attributes and properties
    //classList.add() gives the newly created class any class name we want which we can then modify in our css file.
    newH2.classList.add('thank-you');
    newH2.textContent = 'Thank you!';

    //append to the container
    container.appendChild(newH2);

    h1Element.insertAdjacentElement('afterend', newH2);

    pElement.classList.add('newP')

    pElement.textContent = `We appreciate you taking the time to give a rating.  If you ever need more support, don't hesitate to get in touch!`;

    //icon & give it a class of icon
    icon.src = "images/thank-you.svg";
    icon.classList.add('icon');
  
    
    //make submit button display none after user picks rating
    submitBtn.style.display = 'none';
    list.style.display = 'none';
  }else{
    alert('Please select a rating!')
  }
})