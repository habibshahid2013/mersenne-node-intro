//src in another file
//just like <script scr="./people.js">
let people = require('./people.js');
let sonic = require('./sonic');
let mersenne = require('./cohorts/mersenne');
let menue = require('./menue');
let add = require('./add');
let calculator = require('./calculator');


console.log('15 / 3 =', calculator.divide(15, 3));

console.log('./sonic', sonic);
console.log('./mersenne', mersenne);

let result = add(3, 7);
console.log('3 + 7 =', result);



for (let person of people) {
    console.log(`Hello, ${person}! Welcome to Node-land 🤢`);

    if (person[0] === 'F'){
        console.log('Picking on Farah today 😁');
        
    }

};