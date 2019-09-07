// Scalar values
const answer = 42;
const greeting = 'Hello';

// Arrays and Objects
const numbers = [2, 4, 6];
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

//console.log(numbers);
//console.log(person);

numbers[0] = 3;
//console.log(numbers);

person.firstName = "Johan";
person.lastName = "Echevarria";
//console.log(person);

const person1 = Object.freeze(
  {
    firstName: 'Jhon',
    lastName: 'Doe',
    group: {
      id: 2,
      name: 'Gamers'
    }
  }
)
person1.firstName = 'Joseph';
person1.lastName = 'Peralta';
person1.group.name = 'Soccer Player'
console.log(person1);