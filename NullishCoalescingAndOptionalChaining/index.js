const a = undefined;
const b = undefined;
const c = null;
const d = 3;

console.log(a || b); // if a is falsy
console.log(a ?? b); // if a is undefined or null

console.log(a ?? b ?? c ?? d);

console.log((a ?? b) || c && d);

// optional chaining

// if (basket && basket.fruit && basket.fruit[0] && basket.fruit[0].name)
//_.get(basket, 'fruit[0].name');

const basket = {};
// console.log(basket.fruit[0].name);
console.log(basket?.fruit?.[0]?.name);
