/* Click a destination to show it's itinerary */

var destination = document.querySelector('.ventures');
var trip = document.querySelector('.trip');

function displayItinerary(evt){
	var target = evt.target;
	/* [0] takes the first 'p', since there could be multiple 'p's */
	var itinerary = target.getElementsByTagName('p')[0];
	var content = itinerary.textContent;
	
	trip.textContent = content;
	
}

destination.addEventListener("click", displayItinerary);