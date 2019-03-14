const set = require('lodash.set');
const get = require('lodash.get');

const user = {
  name: 'pentacode',
  location: 'house',
  occupation: {
    title: 'developer',
    experience: 'senior',
    skillsets: ['javascript']
  }
}

// let userSkill = '';

// if (user.occupation && user.occupation.skillsets && user.occupation.skillsets[2]) {
//   userSkill = user.occupation.skillsets[2];
// }

const userSkill = get(user, 'occupation.skillsets[2]', '');
console.log(userSkill.split(' '));

set(user, 'occupation.skillsets[0]', 'ruby');
set(user, ['occupation', 'responsibilites'], ['documentation, tests']);
console.log(user);
