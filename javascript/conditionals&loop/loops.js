/*
for (let i = 0 ; i <= 3 ; i ++) {
    console.log(i)
}
    */
/*
for (let i =5; i>=0 ; i--){
    console.log(i);
}
    */

// While loop
/*
let num = 5 ;

while(num>0){
    console.log("Hello from Deepak !");
    num--;
} */


// Nested Loop

/*
for (let i = 0 ;  i < 3; i ++){
    for (let j = 0; j<3; j++){
        console.log(i, j);       
    }
}
    */
 // Nested while loop
  /*
  let i = 5;
  let j = 2;

  while(i>0){
    while(j>0){
        console.log(i, j);
        j--;
    }
    i--;
  }
*/
  // Break And Continue
/*
for (let i = 0; i <10 ; i++){
    if (i%2 !=0){
        continue;

    }
    console.log(i);
} */
for (let i = 1; i <10 ; i++){
    if (i%4 ==0){
        break;

    }
    console.log(i);
} 

// Do While loop

let i =4 ;

do {
    console.log(i);
    i--;
}while (i>0);