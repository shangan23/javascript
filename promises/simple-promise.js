// A simple promise example

let haveWeekendPlan = true;

// Promise takes 2 Arguement resolve and reject
let myMood = new Promise(function(resolve,reject) {
	 
	 setTimeout( () => {
		 if(haveWeekendPlan) {
		   resolve("I am Happy very very Happy!!!");
	     }
	     else {
		   reject("I am depressed for the whole week!!");
	     }
	 },2000);
	 
});

//Promise has 3 States
//Initially it will be pending
console.log(myMood);
//Promise { <pending> }
//Then Fullfilled
//Catch Rejected
myMood.then(happy => console.log(happy))  //Prints "I am Happy very very Happy!!!"
      .catch(depressed => console.log(depressed));  //Prints "I am depressed for the whole week!!"