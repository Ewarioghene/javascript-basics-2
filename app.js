//var a = 1;
//if( a == 2){
  //  console.log("even");
//} else {
   // console.log("odd");
//}

/*var name = "solomon";
if (name == "daveena"){
    console.log("hello daveena");
} else {
    console.log("no name input");
}
*/

/*var musicians = 3;
if (musicians== 3){
    console.log("trio");
} else {
    console.log("no name input");
}
*/

// switches
var color = "pink";
switch (color) {
case "red":
console.log("color is red");
break;
case "blue":
console.log("color is blue");
break;
default:
console.log("color is not red or blue");
break;
}

switch (new Date(). getDay()){
case 0:
day="Sunday";
break;
case 1:
day="Monday";
break;
case 2:
day="Tuesday";
break;
case 3:
day="Wednesday";
break;
case 4:
day="Thursday";
break;
case 5:
day="Friday";
break;
case 6:
day="Saturday";
break;
}
console.log (`Today is ${day}`);

// function EXPRESSION
function greet (name, lastname){
    console.log("hello "+ name + " " + lastname);
} greet("Brad", "Traversy");
  


//TEMPLATE STRINGS OR LITERALS

//const name = "Daveena"
//const age = 18
//const job = "web developer"
//const city = "Abuja"

/*html = `
       <ul>
       <li>Name: ${name}</li>
       <li>Age: ${age}</li>
       <li>Job:${job}</li>
       <li>City:${city}</li>
      </ul>
`;

document.body.innerHTML= html;
*/

// LOGICAL OPERATORS
const name = "Ezra";
const age = 18;

if (age > 0 && age <= 12){
    console.log (`${name} is a child`);
} else if (age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
} 


