//ODD

// anonymous function 

var odd=function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            console.log(arr[i]);
        }
    }
}
var arr =[1,2,3,4,5,6,7,8,9,10];
odd(arr);




// IIFE
(function (arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            console.log(arr[i]);
        }
    }
})
([1,2,3,4,5,6]);




//arrow
var odd=(arr) =>
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            console.log(arr[i]);
        }
    }
}

odd([1,2,3,4,5]);
