// 1) Create a function that takes an object and console.logs each property in the object.


function one (myFirstObject){


	var person = {name: 'Quasimodo', address: 'Notre Dame Cathederal', age: 47, interests: 'Ringing bells and scaring tourists'
			 }
			 console.log(person);
 }

 one ()

// 2) Create a function that takes an object and console.logs that object. Then delete the rollno property of the object and console.log the object again.

function two (mySecondObject) {


	var place = {name: 'The Beachcomber', location: 'Wellfleet, MA', foodtype: 'seafood', rollno: 43
}	
		console.log(place);
		delete place.rollno;
		console.log(place);
}
two();


// 3) Create a function that takes an object and returns the number of properties on that object that start with the letter "a" or "A"

// var person = {firstName: "Bob", lastName: "Smith", age: 32, rollno: 12};
// countAProperties(person);
// 1


function three (myThirdObject) {
var count=0;
	
	for(var element in myThirdObject){

		if (element.charAt(0)==="A" || element.charAt(0)==='a'){
			count=count+1;
		}
	}
	return count;

}
	
	// var thing = { name: 'apple', type: 'fruit', quantity: 12, Alkalinity: 3, aluminum: 'none'}
		
	// 	console.log (thing);



