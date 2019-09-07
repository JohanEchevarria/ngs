/*
const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
};*/

const mistery = "answer";
const obj = {
  p1 : 10,
  p2 : 20,
  f1(){},
  f2 : () =>{},
  [mistery] : 42
}

console.log(obj.mistery);
console.log(obj.answer);


const PI = Math.PI;
const ocj ={
  p1:10,
  p2:20,
  f1(){},
  f2:() => {},
  PI
};
console.log(ocj.PI);
