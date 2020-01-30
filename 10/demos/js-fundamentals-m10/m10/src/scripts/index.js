

/* HTTP Requests Using XHR */
/*
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange =  function() {
	if(this.readyState == 4 && this.status == 200){
		console.log(this.responseText);
	}
};

xhttp.open("GET", "http://5b32a4fd82407e001413f1df.mockapi.io/api/v1/users", 
	true);
xhttp.send();
*/


/* HTTP Requests Using jQuery */
/*
import $ from 'jquery';

let promise = $.get("http://5b32a4fd82407e001413f1df.mockapi.io/api/v1/users");

promise.then(
	data => console.log('success: ', data),
	error => console.log('error', error)
		
);
*/


/* HTTP POST Using jQuery */

import $ from 'jquery';
let user = {
    name: 'Francisco Gallegos',
    avatar: 'test.jpg'
};

let promise = $.post(
	"http://5b32a4fd82407e001413f1df.mockapi.io/api/v1/users", user
);

promise.then(
    data => console.log('data: ', data),
    error => console.log('error: ', error)
);
