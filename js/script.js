//Rating List
const list = document.getElementById('rating-value');

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
    
    //Get Value from the data attribute
    selectedRating = e.target.getAttribute('data-value');
    e.target.style.backgroundColor = 'grey';
    e.target.style.color = 'white';

    console.log(selectedRating)
  }
})
