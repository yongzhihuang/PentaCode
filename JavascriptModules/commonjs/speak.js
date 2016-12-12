var add = require('./math').add;

module.exports = function(name, age) {
  var ageIn5Years = add(age, 5);
  return 'Hello my name is: ' + name + ' and I am ' + ageIn5Years + ' old';
};