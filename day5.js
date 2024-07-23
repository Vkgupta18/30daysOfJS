// Activity 1
// Task 1
function checkOddEven(num){
    res =""
    if(num%2==0){
        res+="Even"
  }
    else res += "Odd"
   console.log("Given number is "+res)
}
checkOddEven(7) // Output: Given number is Odd

// Task 2

function getSquare(num){
    return num*num;
}
console.log("Square of the given number is "+getSquare(7)); // Output:Square of the given number is 49

// Activity 2
// Task 3

function getMax(num1,num2){
    if(num1>num2){
        console.log("max num is " + num1)
    }
    else console.log("max num is " + num2)
}
getMax(7,9) //Output: max num is 9

// Task 4
function concateStrings(str1,str2){
    newStr = str1+" "+str2
    console.log("concatinated string is "+newStr);
}

concateStrings("Hey","Vinit") // Output: Hey Vinit

// Activity 3
// Task 5
const sum = (a, b) => a + b;
console.log(sum(5, 3)); // Output: 8

// Task 6

const containsCharacter = (str, char) => str.includes(char);
let result = containsCharacter("hello", "e");
console.log(result); // Output: true


// Activity 4
// Task 7
const multiply = (a, b = 7) => a * b;
console.log(multiply(5, 12)); // Output: 60
console.log(multiply(8));    // Output: 56

// Task 8
const greetParent = (name, age = 45) => "Hello"+name+", you are ${age} years old!";

let message = greetParent("Mom");
console.log(message); // Output: Hello Mom, you are 30 years old!

message = greetParent("Dad", 45);
console.log(message); // Output: Hello Dad, you are 45 years old!


// Activity 5
// Task 9
const repeatFunction = (func, times) => {
    for (let i = 0; i < times; i++) {
        func();
    }
};
const sayHey = () => console.log("Hey!");
repeatFunction(sayHey, 3);
// Output:
// Hey!
// Hey!
// Hey!

//Task 10
const applyFunctions = (func1, func2, value) => func2(func1(value));
const double = x => x * 2;
const square = x => x * x;

res = applyFunctions(double, square, 3);
console.log(result); // Output: 36 

