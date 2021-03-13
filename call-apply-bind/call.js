let person1 = {
    "firstName" : "Shankar",
    "secondName" : "Ganesh",
    printFullName: function(){
        // Two line template literal
        console.log(`${this.firstName} ${this.secondName}
        `)
    }
}

let printDetails = function(city,state){
    // Two line template literal
    console.log(`${this.firstName} ${this.secondName} from ${city}, ${state}
    `)
}

let person2 = {
    "firstName" : "Sourav",
    "secondName" : "Ganguly"
}

person1.printFullName();

//function-borrwoing
person1.printFullName.call(person2);

//function-borrwoing with arguemtns
printDetails.call(person1,'Coimbatore','TamilNadu');
printDetails.call(person2,"Kolkata","West Bengal");