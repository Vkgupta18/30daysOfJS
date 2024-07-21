// ACTIVITY:1
// Task1
num = 45; 

if (num > 0) {
    console.log(num + ": positive."); // Output: 45 :positive.
} else if (num < 0) {
    console.log(num + ": negative.");
} else {
    console.log(num + ": zero.");
}


// Task2
 age = 20; 

if (age >= 18) {
    console.log("You can vote."); // Output: You can vote.
} else {
    console.log("You cannot vote."); // Output: You cannot vote
}

// ACTIVITY2
// TASK 3

x = 5, y = 6, z = 7; 

if (x >= y && x >= z) {
    console.log(x + ": the largest."); 
} else {
    if (y >= x && y >= z) {
        console.log(b + ": the largest."); 
    } else {
        console.log(z + ": the largest."); // Output: 7 : the largest.
    }
}

// ACTIVITY3
// TASK 4

let day = 5; 

switch(day) {

    case 1:
        console.log("Monday"); //Output:Monday
        break;
    case 2:
        console.log("Tuesday"); // Output: Tuesday 
        break;
    case 3:
        console.log("Wednesday");// Output:Wednesday
        break;
    case 4:
        console.log("Thursday");// Output:Thursday
        break;
    case 5:
        console.log("Friday"); // Output:Friday
        break;
    case 6:
        console.log("Saturday"); // Output: Saturday
        break;
    case 7:
        console.log("Sunday"); //Output: Sunday
        break;    
    default:
        console.log("Invalid day num"); // Output: Invalid day num
}

// TASK 5

let Marks = 97; 

switch(true) {
    case (Marks >= 90):
        console.log("Grade: A"); //Output: Grade: A
        break;
    case (Marks >= 80):
        console.log("Grade: B"); // Output: Grade: B
        break;
    case (Marks >= 70):
        console.log("Grade: C"); // Output: Grade: C
        break;
    case (Marks >= 60):
        console.log("Grade: D"); // Output: Grade: D
        break;
    case (Marks < 60):
        console.log("Grade: Fail"); // Output: Grade: Fail
        break;    
    default:
        console.log("Invalid Marks"); // Output: Grade: Invalid Marks
}

// ACTIVITY 4
// TASK 6

let number = 17;
let oddOrEven = (number % 2 == 0) ? 'Even number' : 'Odd number';
console.log(oddOrEven);         //Output:Odd Number

// ACTIVITY 5
// TASK 7

let year = 1900; 

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + ": leap year."); 
} else {
    console.log(year + ": not a leap year."); // Output: 1900: not a leap year.
}