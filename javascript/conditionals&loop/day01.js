// Check even or odd given an integer check if its even or odd

function evenorodd(num){
    if(num%2==0) {
        console.log(num + " is even");
    }
    else{
        console.log(num + " is odd");
    }
}

evenorodd(24)

// Sum of first N natural numbers - Compute the sum of the first N natural numbers

function sum_natural(n){
    let sum = 0;
    for (let i = 1; i<=n;i++){
        sum += i;
    }
    return sum;
}