// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math;

console.log(PI, E ,SQRT2)

// With require
const { readFile } = require('fs');

// With object parameters
const circle = {
  label: 'circleX',
  radius: 2,
};

const circleArea1 = ({ radius }) =>
  (PI * radius * radius).toFixed(2);

console.log(
  circleArea1(circle)
);

// defaulted the precision value to 2, and made the parameter optional
const circleArea2 = ({ radius }, {precision = 2} = {}) => 
    (PI * radius * radius).toFixed(precision);
//A one line fucntion returns its value

console.log(
    circleArea2(circle, {precision: 5})
);

console.log(
    circleArea2(circle)
);

//cost [first, second, third, forth] = [10, 20, 30, 40]

const [first, second,, forth] = [10, 20, 30, 40]

console.log(forth);

