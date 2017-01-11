// This function takes information from the slider when it changes. It inserts that information into the number input.

function showSlide(x) {
	document.getElementById("digitalDisplay").value=x
}


// This function takes information from the number input onchange and onclick. It adjusts the slider with that information.

function showTemp(x) {
	document.getElementById("rangeDisplay").value=x
}