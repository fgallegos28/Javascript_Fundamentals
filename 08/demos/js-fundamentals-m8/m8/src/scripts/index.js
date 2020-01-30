
/*let element = document.getElementById('first');

element.style.color = 'blue';

console.log(element);
*/


//Inheritance
/*
class Vehicle {
    constructor(){
        this.type = 'car';
    }
    start(){
        return `Starting: ${this.type}`;
    }
}
class Car extends Vehicle {
    start() {
        return 'in Car start ' + super.start();
    }
}
let car = new Car();
console.log(car.start());
*/


/* Importing a Module */
import { Car } from './models/car.js';

let car = new Car(123);
console.log(car.id);


console.log(document.location.href);


/* Selecting DOM Elements */
let el = document.getElementsByTagName('p');
console.log(el);




//Modifying DOM Elements
let element = document.getElementById('first');

element.textContent = 'New content...';

element.setAttribute('foo', 'fooValue');
console.log(element);

element.classList.add('p2');
console.log(element);

element.style.color = 'blue';


/* Promises and Error Handling */
//Error in Javascript
/*
let car = newCar;
console.log('continuing...');
*/

/* Creating a Promise */
let promise = new Promise(
    function(resolve, reject){
        setTimeout(resolve, 100, 'someValue');
    }
);
console.log(promise);