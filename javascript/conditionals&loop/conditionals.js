/*
let age = 18;
if (age >=18) {
    console.log("I am an adult");
}
    */

/*
let age = 16
if (age >=18) {
    console.log("I am an adult");
}
else {
    console.log("I am a kid")
}
    */

/*
let age = 20;
if (age >= 50) {
    console.log("I am old");
}
else if (age >= 20 && age < 50) {
    console.log("I am middle age person ");
}
else if (age >= 13 &&  age <20) {
    console.log("I am teen")
}
else {
    console.log ("I am kid")
}
*/

// Nested condition

/*
let age = 21 ;
let hasTicket = true ;

if (age>= 18) {
    if(hasTicket){
        console.log("please enter the party hall !")
    }
    else{
        console.log("Please purchase the ticket")
    }

}
else{
    console.log("You are kids")
}
    */

//Switch Statement

let day = 3;
switch (day) {
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday")
        break;
    case 4 :
        console.log("Thrusday")
        break;
    case 5 :
        console.log("Friday")
        break;
    case 6 :
        console.log("Saturday")
        break;
    case 7 :
        console.log("Sunday")
        break;
    default: 
        console.log("Invalid Day");
}
