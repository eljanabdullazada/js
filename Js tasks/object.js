let person = {
    name: 'Eljan',
    age: 20
}

console.log(person);
person.age = 21;
console.log(person);

//dot notation
console.log(person.name);
console.log(person.age);

//bracket notation
person['age'] = 22;

console.log(person.age);

let selection = 'age';

person[selection] = 24;
console.log(person.age);