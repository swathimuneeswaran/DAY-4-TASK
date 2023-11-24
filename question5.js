//Return all the palindromes in an array


//anonymous function

var isPalindrome = function (str) 
  {
    str = str.toLowerCase();
    return str === str.split("").reverse().join("");
  };
  
  var words = ["madam", "racecar", "level","hello"];
  var palindromes = words.filter(isPalindrome);
  console.log(palindromes);


  
  //IIFE

  (function(words) {
    var palindromes = words.filter(isPalindrome);
    console.log(palindromes);
    
    function isPalindrome(str) {
        str = str.toLowerCase();
        return str === str.split("").reverse().join("");
    }
}) (["madam", "racecar", "level", "hello"]);



//arrow

const isPalindrome = (str) => str.toLowerCase() === str.split("").reverse().join("");

const words = ["madam", "racecar", "level", "hello"];
const palindromes = words.filter(isPalindrome);
console.log(palindromes);


  

  