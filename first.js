let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// alert( 'Hello, world!' );

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}


result = a + b < 4 ? 'Below' : 'Over';

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';

console.log(message);