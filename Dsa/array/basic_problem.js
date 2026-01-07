// Given an array , Find the index of the largest element.
//let arr = [3,5,1,9,8,2]

function maxIndex(arr){
    let index = 0;

    for (i =1;i<arr.length;i++){
        if(arr[i]>arr[index]) {
            index = i
        }

    }
    return index ;
}
//console.log(maxIndex(arr))

// Write the code to determine if the array is storted already

let arr = [3,5,6,9,11] // Sorted array -> accending order

function isSorted(arr){

    for (i = 0; i<arr.length-1;i++){
        if (arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}
console.log(isSorted(arr))
