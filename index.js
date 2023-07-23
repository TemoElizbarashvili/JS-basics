// First Js code
console.log('Hello world!');

let name = 'sg dzma nichiershi gadi!';
console.log(name);

let age = 30;
let isApproved = false;
let firstName = undefined;
let selectedColor = null;

let person = {
    name: 'Temo',
    age: 20
};

// Dot notation
person.name = 'dokkyoshi';

// Bracket Notation
let selection = 'name';
person[selection] = 'Gela';

console.log(person);


// Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors[1]);

// Functions

// Performing a task
function greet(name) {
    console.log('Salami ' + name + ', lomo!');
}

// Calculating a value
function square(number){
    return number * number;
}

greet('Gio');
greet('Mary');

let squareOfTwo = square(2);
console.log(squareOfTwo);