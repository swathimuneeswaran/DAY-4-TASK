//Convert all the strings to title caps in a string array

// anonymous function 


var a = function (str) {
  var b = str.split(" ");
  for (var i = 0; i < b.length; i++) {
    b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1);
  }
  return b.join(" ");
};

var str = "hello World";
console.log(a(str));



//IIFE

(function (str)
 {
  var b = str.split(" ");
  for (var i = 0; i < b.length; i++) 
  {
    b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1);
  }
  console.log(b.join(" "));
})
("hello world");




//arrow

var a = (str) =>
{
  var b = str.split(" ");
  for (var i = 0; i < b.length; i++)
   {
    b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1);
  }
  console.log(b.join(" "));
};

a("hello world");