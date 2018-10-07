// Scalar values
const answer = 42;
const greeting = 'Hello';

// Arrays and Objects
const numbers = [2, 4, 6];
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

//Object.freeze makes inmutable the first level, like firstName, but not a sublevel.
//values can't be chages 
/*
Object.freeze(person)
person.firstName
"John"
person.firstName = "Bob"
person.firstName
"John"

We can’t add new properties, delete existing ones and every property becomes non-configurable.

Object.seal, si similar but the values of properties can be changed.

freeze, no Add, Modify, Erase
Seal, no Add or Erase but I can modify.

*/