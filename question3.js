//Sum of all numbers in an array

//anonymous

var sum=function(arr)
{
    var a=0;
    for(var i=0;i<arr.length;i++)
    {
       a =a+arr[i];
    }
    console.log(a);
}
var arr=[1,2,3,4,5];
sum(arr)


//IIFE

(function(arr)
{
    var a=0;
    for(var i=0;i<arr.length;i++)
    {
       a =a+arr[i];
    }
    console.log(a);
})
([1,2,3,4,5])


//arrow


var sum=(arr) =>
{
    var a=0;
    for(var i=0;i<arr.length;i++)
    {
       a =a+arr[i];
    }
    console.log(a);
}

sum([1,2,3,4,5]);