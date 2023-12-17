// we can destructuring in object and array

const arr = [1,2,3,4,5];

console.log(arr[1]);
console.log(arr[2]);

const [a,b,c,d,e] = arr;
console.log(e);

// object destructuring
const person = {
    name:"Patel",
    age:21,
    gender:"male",
    address:"Punjab",
};

// access value

// dot notation
console.log(person.gender); 

// bracket notation
console.log(person["age"]);

// destructuring

const {name, age, gender, address} = person;
console.log(gender); 
console.log(name); 
console.log(age);
console.log(address); 


