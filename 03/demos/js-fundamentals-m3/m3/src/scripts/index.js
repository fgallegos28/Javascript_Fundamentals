
/*for (let i=0; i<5; i++) { 
  if (i === 3) 
    continue;
  console.log(i);
}*/

/*
function startCar(carId){
  let message = 'Starting';
  let startFn =  function turnKey(){
    let message = 'Overrride';
  };
  startFn();
  console.log(message); 
}
  startCar(123);
  */

  /*
let app = (function(){
  console.log('in funtion');
  return {};
})();

console.log(app);

*/

//Closures
let app = (function() {
  let carId = 123;
  let getId =  function(){
    return carId;
  };
  return {
    getId: getId
  };
})();
console.log(app.getId());

//The this Keyword
let o = {

    carId: 123,
    getId: function() {
        console.log(this);
        return this.carId;
    }
};
console.log(o.getId());// 123


//call and apply
let a = {

  carId: 13,
  getId: function() {
      //console.log(this);
      return this.carId;
  }
};
let newCar = {carId: 16 };
console.log(a.getId.call(newCar));//16

console.log(a.getId.apply(newCar, ['ID: '])); //ID:16

//using bind
let newFn = a.getId.bind(newCar);
console.log(newFn);


//Arrow Functions

/*let getId = () => 123;

console.log(getId());//123
*/

//example
/*let getId = (prefix, suffix) => {
  return prefix + 123 + suffix;
};

console.log(getId('ID: ','!'));
*/



/* Default parameters */
let trackCar =  function(carId, city='NY'){
  console.log(`Tracking ${carId} in ${city}.`);
}; 
console.log(trackCar(123));
console.log(trackCar(123, 'Chicago'));


/* Constructor function */

function Car(){

}
let car = new Car();

//example
function Car(id) {
  this.carId = id;
  this.start = function() {
    console.log('start ' + this.carId);
  };
}
let vehicle = new Car(123);
vehicle.start();



/* Prototypes */
function Car(id) {
  this.carId =  id;
}

Car.prototype.start = function() {
  
  console.log('start: ' + this.carId);
};

let car = new Car(123);
car.start(); //start: 123



/* Expanding Objects Using Prototype */

String.prototype.hello =  function() {

   return this.toString() + ' Hello';
};

console.log('foo'.hello());//foo Hello


/* JSON */
let truck = {

  id: 123,
  style: 'convertible'
};

console.log(JSON.stringify(truck));
//