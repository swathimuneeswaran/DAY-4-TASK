//Return all the prime numbers in an array

//anonymous

var prime=function(arr)
{
    var count=0;
    for(var i=0;i<arr.length;i++)
    
    {
        count=0;
        for(var j=2;j<arr[i];j++)
        {
            if(arr[i]%j==0)
            {
            count++;
            }
        }
        if( count==0)
        {
          console.log(arr[i]);
          
        }
        
    }
    
};

var arr=[3,4,5,6,7];
prime(arr);



//IIFE

(function(arr)
{
    var count=0;
    for(var i=0;i<arr.length;i++)
    
    {
        count=0;
        for(var j=2;j<arr[i];j++)
        {
            if(arr[i]%j==0)
            {
            count++;
            }
        }
        if( count==0)
        {
          console.log(arr[i]);
          
        }
        
    }
})
([3,4,5,6]);


//arrow

var prime=(arr) =>
{
    var count=0;
    for(var i=0;i<arr.length;i++)
    
    {
        count=0;
        for(var j=2;j<arr[i];j++)
        {
            if(arr[i]%j==0)
            {
            count++;
            }
        }
        if( count==0)
        {
          console.log(arr[i]);
          
        }
        
    }
    
};

prime([3,4,5,6]);
