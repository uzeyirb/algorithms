
//this is naive sollution
function sameNaive(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) { //we check if it is there 
            return false;
        }
        //after we checked it is there we call splice
        console.log(arr2);
        arr2.splice(correctIndex, 1);
    }
    return true;
}

sameNaive([1, 2, 3, 2], [9, 1, 4, 4])


function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])
