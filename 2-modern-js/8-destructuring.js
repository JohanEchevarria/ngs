// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math;
console.log(PI);

// With require
// const { readFile } = require('fs');


const circle = {
   label: 'circleX',
   radius: 2,
 };
/*
 const circleArea = ({ radius }) =>
   (PI * radius * radius).toFixed(2);
 console.log(circleArea(circle));*/

 const circleArea = ({radius},{precision=2} = {}) =>
    (PI * radius * radius).toFixed(precision);
console.log(circleArea(circle));


/*const circleArea = ({radius},{precision=2} = {}) =>
(PI * radius * radius).toFixed(precision);
console.log(circleArea(circle,{
    precision:3
}));*/



