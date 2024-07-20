// Activity 1 -

// Task 1
let a = 25,
  b = 45;
console.log("a+b = ", a + b); //output:a+b = 70

// Task 2
(a = 25), (b = 45);
console.log("a-b = ", a - b); // output: a-b = -20

// Task 3
(a = 25), (b = 45);
console.log("a*b = ", a * b); // output: a*b = 1125

// Task 4
(a = 25), (b = 45);
console.log("b/a = ", b / a); // output: b/a = 1.8

// Task 5
(a = 25), (b = 45);
console.log("when b is divided by a, remainder is  = ", b % a); //  when b is divided by a, remainder is  = 20

// Activity 2
// Task 6

a = 47;
console.log("a+=7 is ", (a += 7)); // output: a+=7 is 54

// Task 7

a = 34;
console.log("a-=7 is ", (a -= 7)); // output: a-=7 is 27

// Activity 3
// Task 8
a = 7;
b = 5;

console.log("a is Greater than b: ", a > b); //OUTPUT :a is Greater than b:  true

console.log("a is Smaller than b: ", a < b); //OUTPUT :a is Smaller than b:  false

// Task 9
console.log("a is Greater or equal to b :", a >= b); //OUTPUT : a is Greater or equal to b: true
console.log("a is smaller or equal to b :", a <= b); //OUTPUT : a is smaller or equal to b:  false

// Task 10
x = 5;
y = "5";
console.log("Equal to : x==y", x == y); //OUTPUT : Equal to : x==y true
console.log("strictly Equal to : x===y", x === y); //OUTPUT : strictly Equal to : x===y

// Activity 4
// Task 11
a = 1;
b = 2;
x = 3;
y = 4;

console.log(x < y && a < b); // Output : true

//Task 12

console.log(x < y || a > b); // OUTPUT : true

//Task 13 :

console.log(!(a > b)); //OUTPUT : true

// Activity 5
// Task 14
let nums = 35;
let result = nums % 2 == 0 ? "Even number " : "Odd number";
console.log(nums, "is :", result); //OUTPUT :  number is : Odd number
