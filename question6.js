//Return median of two sorted arrays of the same size.


//anonymous 

function findMedianSortedArrays(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    mergedArray.sort((a, b) => a - b);
    const length = mergedArray.length;
    const middle = Math.floor(length / 2);
    if (length % 2 === 0) 
    {
        
        return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
    } 
    else 
    {
        
        return mergedArray[middle];
    }
}


const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const median = findMedianSortedArrays(arr1, arr2);

console.log("Median:", median);



//IIFE


(function(arr1, arr2)
 {
    let mergedArray = arr1.concat(arr2);
    mergedArray.sort((a, b) => a - b);
    const length = mergedArray.length;
    const middle = Math.floor(length / 2);
    if (length % 2 === 0)
     {
        console.log((mergedArray[middle - 1] + mergedArray[middle]) / 2);
    } 
    else 
    {
        console.log(mergedArray[middle]);
    }
})([1, 3, 5], [2, 4, 6]);
