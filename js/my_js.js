/*Assignment 2
CS 1520 - Fall 2016
Terry Tan */

function validation(event) {
	var firstName, lastName, numCats;
	//get stuff
	firstName = document.getElementById("firstname").value;
	lastName = document.getElementById("lastname").value;
	numCats = document.getElementById("numcats").value;
	catBreeds = document.getElementsByName("catbreed");
	var errMessage = "";
	
	var catcount=0;
	for(var i=0; i<catBreeds.length; i++) {
		if(catBreeds[i].type == "checkbox" && catBreeds[i].checked == true){
			catcount++;
		}
	}
	
	
	
	if(!firstName) {
		errMessage += "Need an entry for first name!\n";
	}
	if(!lastName) {
		errMessage += "Need an entry for last name!\n";
	}
	if(isNaN(numCats) || numCats < 0 || !numCats) {
		errMessage += "Enter valid number for number of cats!\n";
	}
	if(catcount == 0) {
		errMessage += "Select at least one cat breed!\n";
	}
	if(!numCats || isNaN(numCats) || !firstName || !lastName || catcount==0) {
		alert("Invalid Input.\n" + errMessage);
	}
	else {
		alert("Successful form submission. \nHello " + firstName + " " + lastName + "!");
	//	var bod = document.getElementwithId("mainform");
	//	bod.innerHTML = "Hello World!";
	}
}


function resetForm (event){
	document.getElementById("my_form").reset();
}



	