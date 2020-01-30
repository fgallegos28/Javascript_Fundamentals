
/* Array Testing */

let carIds = [ 
    { carId: 123, style: 'sedan' },
    { carId: 456, style: 'convertible' },
    { carId: 789, style: 'sedan' }
];

//carIds.forEach( car => console.log(car));

let convertibles = carIds.filter(
    car => car.style === 'convertible'
);
console.log(convertibles); //{"id":123,"style":"convertible"}


/*
let car = carIds.find( 
	car => car.carId > 500 
);
console.log(car);
*/


/* JSON */

//Convert to JSON
let car = {

    id: 123,
    style: 'convertible'
  };
  
  console.log(JSON.stringify(car));
  //{"id":123,"style":"convertible"}


//Convert Array to JSON
/*let carIds = [
    {carId: 123},
    {carId: 456},
    {carId: 789}
];
console.log(JSON.stringify(carIds));
//[{"carId":123},{"carId":456},{"carId":789}]
*/


/* Parsing JSON */
/*
let jsonIn = 
`
    [
        {"cardId" : 123},
        {"cardId" : 456},
        {"cardId" : 789}
    ]
 `;
let carIds = JSON.parse(jsonIn);
console.log(JSON.stringify(carIds)); 
//[{"cardId":123},{"cardId":456},{"cardId":789}]

*/

/* Array iteration */

