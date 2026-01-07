let arr = [ 3,2,1,5,9]

function reverse(arr){

    let rev = [];

    let i = 0
    let j = arr.length-1;

    while(i < arr.length){
        rev[j] = arr[i]
        j++;
        i--;
    }
}
console.log(reverse(arr))

