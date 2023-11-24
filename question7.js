//Remove duplicates from an array


//Anonymous

var arr=function(myArray)
{
  var dupli=[];
  var temp=[...myArray].sort()
  for (var i = 0; i < temp.length; i++) {
    if (temp[i] === temp[i + 1]) {
      if (!dupli.includes(temp[i])) {
        dupli.push(temp[i]);
      }
    }
  }
  
  console.log(dupli);
}

var myArray = [1, 2, 3, 1, 2, 4, 5];
arr(myArray);



//IIFE

(function(myArray)
{
    var dupli=[];
    var temp=[...myArray].sort()
    for (var i = 0; i < temp.length; i++) {
      if (temp[i] === temp[i + 1]) {
        if (!dupli.includes(temp[i])) {
          dupli.push(temp[i]);
        }
      }
    }
    
    console.log(dupli);
})
([1,2,3,1,2,4,5]);