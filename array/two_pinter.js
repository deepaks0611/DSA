let arr =[1,0,0,1,0,1,0]

function moveZeroLeft(arr){
    let left = 0
    let right = arr.length-1;

    while(left  < right){

        //Till time 0 is at correct position
        // Keep Jumping right
        while (arr [left] == 0){
            left++;                        
        }
        // while 1 is at the right index
        // keep jumping left
        while (arr[right] ==1){
            right--;
        }
        if (left <right){
            // Swap left and light

            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
    }
}
console.log(moveZeroLeft(arr))

// Leetcode problem number 167

var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;

    while (left<right){
        const sum = numbers[left] + numbers[right];
        if (sum == target) {
            return [left+1, right+1]
        }else if (sum<target){
            left++;
        }else{
            right--;
        }
    }
    return[];
};

