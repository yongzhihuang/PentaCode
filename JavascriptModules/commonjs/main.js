/*
    - In math.js we define a function to be exported as add, the function simply adds 2 values from parameter together.
    
    - In speak.js we import that function from math.js and use it within the function by invoking add() and we export the function as the default function we export out of speak.js

    - In main.js we simply bring in speak.js by requiring it and then invoke it with 2 parameters.  CommonJS pattern will make sure to automatically bring in the needed modules when it looks up the dependency tree.
*/
var speak = require('speak');
speak('zhi', 25);
