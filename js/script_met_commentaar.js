// slideshows
// Slideshow 1
var slideIndex1 = 1; //eerste slide van slideshow 1 tonen. De waarde van slideIndex1 geeft aan welke slide momenteel wordt weergegeven
showDivs1(slideIndex1); //de bijbehorende functie wordt uitgevoerd om de slide te tonen op basis van de waarde van slideIndex1

function plusDivs1(n) {
  showDivs1(slideIndex1 += n); // Verhoog of verlaag de slideIndex1 met n en roep showDivs1 aan
}

function showDivs1(n) { // om een specifieke slide van slideshow 1 weer te geven. Parameter n geeft de index van de slide aan die moet worden getoond
  var i;
  var x = document.getElementsByClassName("mySlides1"); // Haal alle elementen op met de class "mySlides1"
  if (n > x.length) {slideIndex1 = 1} // Als n groter is dan het aantal elementen, reset slideIndex1 naar 1
  if (n < 1) {slideIndex1 = x.length} ; // Als n kleiner is dan 1, stel slideIndex1 in op het aantal elementen
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; // Verberg alle slides
  }
  x[slideIndex1-1].style.display = "block"; // Toon de geselecteerde slide
}

// Slideshow 2
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n); // Verhoog of verlaag de slideIndex2 met n en roep showDivs2 aan
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2"); // Haal alle elementen op met de class "mySlides2"
  if (n > x.length) {slideIndex2 = 1} // Als n groter is dan het aantal elementen, reset slideIndex2 naar 1
  if (n < 1) {slideIndex2 = x.length} ; // Als n kleiner is dan 1, stel slideIndex2 in op het aantal elementen
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; // Verberg alle slides
  }
  x[slideIndex2-1].style.display = "block"; // Toon de geselecteerde slide
}

// clickable title that shows info
var titles = document.getElementsByClassName("product"); // Haal alle elementen op met de class "product"
		for (var i = 0; i < titles.length; i++) {
			titles[i].addEventListener("click", showInfo); // Voeg een klikgebeurtenisluisteraar toe aan elk element
		}

		function showInfo() {
			var infoDiv = this.nextElementSibling; // Haal het volgende element na het geklikte element op
			if (infoDiv.style.display === "block") {
				infoDiv.style.display = "none"; // Als de display-stijl van het element "block" is, verberg het
			} else {
				infoDiv.style.display = "block"; // Anders, toon het element
			}
		}