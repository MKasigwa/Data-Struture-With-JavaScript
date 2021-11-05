//Reverse a String

/*
Reverse the provided string.

You may need to turn the string into an array before you can 
reverse it.

Your result must be a string.
*/
function reverseString(str) {
    return str;
  }
  
  reverseString("hello");

  //ANSWER
  function reverseString(str) {
    let strArray= str.split('');
    let reversedString = '';
    for(let i=strArray.length-1;i>=0;--i){
      reversedString+=strArray[i];
    }
    return reversedString;
  }
  
  console.log(reverseString("hello"));