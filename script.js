const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');



populateUI();



let ticketPrice = +movieSelect.value;
// console.log(typeof ticketPrice); logging to console but typeof kicks back string so to make it a number add + to moviesSelect.value



// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}



// Update total and count Remember querySelectorAll will give a nodelist
function updateSelectedCount() {
   const selectedSeats = document.querySelectorAll('.row .seat.selected');
   
   const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

   localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

   console.log(seatsIndex);
   const selectedSeatsCount = selectedSeats.length;
   
   count.innerText = selectedSeatsCount;
   total.innerText = selectedSeatsCount * ticketPrice;
}



// Get data from local storage and populate UI
function populateUI() {
   const selectedSeats = localStorage.getItem('selectedSeats');
}



// Movie Select Event
movieSelect.addEventListener('change', e => {
   ticketPrice = +e.target.value;
   setMovieData(e.target.selectedIndex, e.target.value);
   updateSelectedCount();
});


// Seat Click Event
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
       e.target.classList.toggle('selected');

       updateSelectedCount();
    }
});