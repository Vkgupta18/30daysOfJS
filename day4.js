// Activity 1
// Task 1

for(let i =1; i<=10;i++){
    console.log(i) // Output : 1 2 3 4 5 6 7 8 9 10
}

// Task 2 
for(let i =1; i<=10;i++){
    console.log(i*5) // Output : 5 10 15 20 25 30 35 40 45 50
}

// Activity 2
// Task 3
let sum = 0 , i =1;
while (i<=10) {
    sum+= i
    i++
}
console.log(sum) // Output : 55

// Task 4
    i=10 ;
   while(i>0){
    console.log(i); // Output : 10 9 8 7 6 5 4 3 2 1
    i--; 
   }
    
   
//Activity 3: do-while loop
// Task 5

i=1;  
do{                             
    console.log(i);
    i++;
}while(i<=5); //Output: 1 2 3 4 5


// Task 6
let num=7;                            
let factorial=1;
do{
    factorial= factorial*num;
    num--;
}while(num>0);
console.log("factorial of 7:", factorial);  //Output: factorial of 7: 5040

// Activity 4
// Task 7 

for (let i = 0; i < 5; i++) {
    let star = '';
    for (let j = 0; j <= i; j++) {
        star = star + "*" + " ";
    }
    console.log(star);
}
/*output:

*
* *
* * *
* * * *
* * * * *

*/
//Activity -5

//Task 8

for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}                       //output: 1 2 4 5

//Task 9

for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}                       //output: 1 2 