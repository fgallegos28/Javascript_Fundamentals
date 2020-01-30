
/*import { Car } from './models/car.js';

let car = new Car(123);
console.log( car.id );  
 */

/* Class basic */
/*
class Car {
    constructor(id){
        this.id = id;
    }
}

let car = new Car(123);
car.id = 456;
console.log(car.id);
*/


//Methods
class Car {
    constructor(id){
        this.id = id;
    }
    identify(){
        return `Car Id: ${this.id}`;
    }
}

let car = new Car(123);
console.log(car.identify());



//Inheritance
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
        return 'in Car start' + super.start();
    }
}
let car = new Car();
console.log(car.type);
