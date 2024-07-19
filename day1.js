// Activity 1 : Variable declaration

var x = 70;
console.log(x); //output: 70


let name = "Vinit";
console.log(name); //output : "Vinit"

//Activity 2 : Constant declaration

const z = true;
console.log(z);  //output : true

//Activity 3: Data types

let num=9;
let str="Alphabet";
let bool=false;
const employee = {
    Name:"Aadarsh",
    branch:"Google",
    year:1
};
const items=["mango","kiwi"];
console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof employee);
console.log(typeof items);

//activity 4: Reassigning Variables

let x = 32;
console.log(x); //output: 32
x = 27;
console.log(x); //output: 27

//activity 5: Understanding const

const p = 43;
console.log(p); //output: 43
p = 77;
console.log(p); //output : TypeError: Assignment to constant variable.


let numb = 78;
console.log(numb); //output : 78
numb = 40;
console.log(numb); //output: 40
const number = 45;
console.log(number); //output : 45
number = 40;
console.log(number); //output : TypeError: Assignment to constant variable.