function validation(event) {
	var firstName, lastName, numCats;
	firstName = document.getElementById("firstname").value;
	lastName = document.getElementById("lastname").value;
	numCats = document.getElementById("numcats").value;
	catBreeds = document.getElementsByName("catbreed");
	var errMessage = "";
	var catcount = 0;
	for (var i = 0; i < catBreeds.length; i++) {
		if(catBreeds[i].type == "checkbox" && catBreeds[i].checked == true){
			catcount++;
		}
	}
	if ( !firstName ) {
		errMessage += "Need an entry for first name!<br />";
	}
	if ( !lastName ) {
		errMessage += "Need an entry for last name!<br />";
	}
	if (isNaN(numCats) || numCats < 0 || !numCats) {
		errMessage += "Enter valid number for number of cats!<br />";
	}
	if (catcount == 0) {
		errMessage += "Select at least one cat breed!<br />";
	}
	if (!numCats || isNaN(numCats) || !firstName || !lastName || catcount==0) {
		document.getElementById('notification').innerHTML = "<u>Error</u>: " + errMessage;
	}
	else {
		document.getElementById('notification').innerHTML = "";
		document.getElementById("mainDiv").innerHTML = "Thank you for your submission " + firstName +"!" ;
	}
}
function resetForm (event){
	document.getElementById("myForm").reset();
}
$("#myForm").submit( function(e) {
    e.preventDefault();
});
