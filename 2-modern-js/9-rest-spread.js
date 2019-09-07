const [first, ...restOfItems] = [10, 20, 30, 40];

const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const { temp1, temp2, ...person } = data;

const newArray = [...restOfItems];

const newObject = {
  ...person,
};

//Challenge
const arreglo1 = ['two','three'];
const arreglo2 = ['one', ...arreglo1,'four','five'] 
console.log(arreglo2);