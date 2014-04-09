//var firstName = prompt("what is your first name?");
//var lastName = prompt("what is your last name?");
//var fullName = firstName + ' ' + lastName;
//
// var age = prompt("how old are you?");
// age = parseInt(age);
//
// if(age > 20){
//   console.log('you can drink alcohol.');
// }
// else{
//   console.log("don't do it.");
// }
//
// if(age >= 0 && age < 6){ //between 0 and 5
//   console.log('movie rated g');
// }
// else if(age >= 6 && age < 13){//between 6 and 12
//   console.log('movie rated PG');
// }
// else if (age >= 13 && age < 18){ // between 13-17
//   console.log('movie rated PG13');
// }
// else{ // over 17
//   console.log('movie rated R');
// }

//debugger;

//console.log(fullName);
//
// var color = prompt("what is your favorite color?");
// color = color.toLowerCase();
// switch (color){
//   case 'blue':
//     console.log('blue is awesome');
//     break;
//   case 'red':
//     console.log('red is hot');
//     break;
//   case 'green':
//     console.log('geniuses pick green');
//     break;
//   default:
//     console.log('cool story bro.');
//
// }
// var colors = [];
// colors = number * 1;
//
// if (number > 0 && number < 10) {
//   while (number < 50 ){
//     console.log('number : ' + number);
//     number += 2;
//   }
//
// var colors = [];
//
// var response = prompt('enter a color or (q) to quit');
// response = response.toLowerCase();
//
// while (response !== 'q'){
//   colors.push(response);
//   response = prompt('enter a color or (q) to quit');
//   response = response.toLowerCase();
// }
// var evens = [],
//      odds = [];
//
// for (var i = 0; i < 100; i++){
//   if (i % 2 === 0){ //even
//     var square = i * i;
//     evens.push(square);
//   }
//   else { // odd case
//     var cube = Math.pow(i, 3);
//     odds.push(cube);
//   }
// }
// console.log(evens);
// console.log(odds);
function square (x) {
  return x * x;
}

function cube (x) {
  return x * x * x;
}

function isOdd (x){
  if (x % 2 === 0){
    return false;
  }
  else{
    return true;
  }
}

function isOdd(x){
  return x % 2 !== 0;
}

function area(l,w){
  return l * w;
}
