document.getElementById("btn").addEventListener("click", () => {

    function sumArray(arr){

        try {
            
            let sum = 0;
            for(let num of arr){
                if(typeof(num) !== "number") throw new Error("Array elemanları number olmalıdır");

                sum+=num;
            }

            return sum;

        } catch (error) {
            console.log(error.message);
        }

    }


    console.log(sumArray([3,5,"7", 11]));

})