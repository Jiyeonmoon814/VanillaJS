const container = document.getElementById('container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice =+ movieSelect.value;

populateUI();

//Save selected movie index and price 
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);
}

//Update total and count 
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map(seat => 
        [...seats].indexOf(seat));
    console.log(seatsIndex)
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

    setMovieData(movieSelect.selectedIndex, movieSelect.value)

}
//Get data form localStorage and populate UI 
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    //JSON.parse method parses a JSON string, constructing the JavaScript value
    //or object described by the string 

    console.log(selectedSeats);
    
    //if there's no data from localStorge, an array will be empty 
    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
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