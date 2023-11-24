//Rotate an array by k times


//anonymous 

var a=function(array,rotations)
{
   for (let i = 0; i < rotations; i++) 
   {
     const lastElement = array[array.length - 1];
     for (let j = array.length - 1; j > 0; j--) 
    {
       array[j] = array[j - 1];
    }
    array[0] = lastElement;
   }
console.log(array); 
}

const array = [1, 2, 3, 4, 5];
const rotations = 2;
a(array,rotations);


//IIFE
(function(array,rotations)
{
    for (let i = 0; i < rotations; i++) 
   {
     const lastElement = array[array.length - 1];
     for (let j = array.length - 1; j > 0; j--) 
    {
       array[j] = array[j - 1];
    }
    array[0] = lastElement;
   }
console.log(array); 
})

([1,2,3,4,5],2);