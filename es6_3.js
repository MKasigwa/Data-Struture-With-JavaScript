// Declare a Read-Only Variable with the const KeywordPassed

/*
The keyword let is not the only new way to declare variables. In ES6, you can also declare variables 
using the const keyword.

const has all the awesome features that let has, with the added bonus that variables declared 
using const are read-only. They are a constant value, which means that once a variable 
is assigned with const, it cannot be reassigned.

*/

const FAV_PET = "Cats";
FAV_PET = "Dogs";

/*
The console will display an error due to reassigning the value of FAV_PET.

As you can see, trying to reassign a variable declared with const will throw an error. 
You should always name variables you don't want to reassign using the const keyword. 
This helps when you accidentally attempt to reassign a variable that is meant to stay constant. 
A common practice when naming constants is to use all uppercase letters, with words separated 
by an underscore.
*/

/*
Note: It is common for developers to use uppercase variable identifiers for immutable values and 
lowercase or camelCase for mutable values (objects and arrays). In a later challenge you will 
see an example of a lowercase variable identifier being used for an array.
*/