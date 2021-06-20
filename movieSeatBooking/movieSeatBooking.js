const container = document.getElementById('container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

//a data type will be number, if you put + infront of value 
let ticketPrice = +movieSelect.value;

populateUI();

//Save selected movie index and price 
function setMovieData(movieIndex, moviePrice){
    //The localStorge read-only property of the window interface allows you to access 
    //a Storge object for the Document's origin
    //the stored data is saved across browser sessions 
    //It's similar to sessionStorge, except that while localStorge data has no expiration time
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);
}

//Update total and count 
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    //loop through selectedSeats array 
    const seatsIndex = [...selectedSeats].map(seat => 
        //get index of seat 
        [...seats].indexOf(seat));
        
    //JSON.stringify() method converts a JavaScript object or value to a JSON string, 
    //optionally replacing values if a replacer function is specified 
    //or optionally including only the specified properties
    //if a replacer array is specified 
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

    setMovieData(movieSelect.selectedIndex, movieSelect.value)

}
//Get data from localStorage and populate UI 
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    //JSON.parse method parses a JSON string, constructing the JavaScript value
    //or object described by the string 

    //if there's no data from localStorge, an array will be empty 
    //if there's data from localStorge, will loop through seats
    //and add selected on each dats's index 
    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            //since index starts from 0 
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null ){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

//Movie select change event 
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

//Seat click event
container.addEventListener('click', e =>{
    if(e.target.classList.contains('seat') && 
      !e.target.classList.contains('occupied')){
        // add/remove selected, depending on test conditional 
        e.target.classList.toggle('selected');
    }
    updateSelectedCount();
})

//Initial count and total seat 
updateSelectedCount();