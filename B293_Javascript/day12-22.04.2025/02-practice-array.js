let numbers = [12, 56, 14, 67, 89, 33, 22];
let numbers2 = [-12, -56, -14, -67, -89, -33, -22];



function findMaxNumberInArray( arr ){

    if(!Array.isArray(arr)){
        alert("Input array değil!");
        return;
    }

    let maxNumber = arr[0];

    for(let i = 1; i < arr.length ; i++){

        if(maxNumber < arr[i]){
            maxNumber = arr[i];
        }

    }

    return maxNumber;

}

function findMaxNumberInArray2(arr){
        if (!Array.isArray(arr)) {
          alert("Input array değil!");
          return;
        }

        let maxNumber = arr[0];

        for(let i = 1 ; i< arr.length ; i++){
            maxNumber = Math.max(maxNumber, arr[i])
        }

        return maxNumber;
}


console.log(findMaxNumberInArray(numbers)); // 89
console.log(findMaxNumberInArray(numbers2)); // -12

console.log(findMaxNumberInArray2(numbers)); // 89
console.log(findMaxNumberInArray2(numbers2)); // -12