//CommonJs style import
var greet = require('./greet');

//Es6 module style import
import sum from './sum';

//Scss entry point
require('../scss/base.scss');

console.log('Index Loaded, the sum is', sum);
alert(greet);
