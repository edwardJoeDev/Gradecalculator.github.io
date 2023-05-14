console.log("1. Create a function that prints/logs all the integers from 1 to 20.");
//print1to20() to log 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
function integer(){
    for (i = 1; i <= 20; i++){
        console.log(i);
    }
}
integer();
    

console.log("2. Create a function that prints/logs all the odd numbers from 3 to 20.");
//printOdd3to20() to log 3 5 7 9 11 13 15 17 19
function oddnNumber(){
    for (i = 3; i < 20; i += 2){
        console.log(i);
    }
}
oddnNumber();

console.log("3. Create a function that prints/logs all the even numbers from 4 to 22.");
//printEven4to22() to log 4 6 8 10 12 14 16 18 20 22
function evenNumber(){
    for (i = 4; i <= 22; i += 2){
        console.log(i);
    }
}

evenNumber();

console.log("4. Print/log all the multiples of 7 between the numbers 7 to 62.");
//multiplesOf7() to log 7 14 21 28 35 42 49 56
function multiplySeven(){
    let number = 1;
    for (i = 7; i+=7;){
        if(i>=7 && i<=56){
            console.log(i);
        } else{
            break
        }
        number++
    }
}


multiplySeven();


console.log("5. Log positive numbers starting at 50, counting down by fives (exclude 0).");
//countdownByFives() to log 50 45 40 35 30 25 20 15 10 5
function countDown(){
    for (i = 50; i>0; i -= 5){
        console.log(i);
    }
}

countDown();

console.log("6. Given an array, print/log the sum of the first value in the array, plus the array’s length. Assume that the array is composed of numbers.");

console.log("firstPlusLength([1,2,5]) to log 4");
let arrayfirst = [1,2,5];
console.log(arrayfirst.length += arrayfirst[0]);

console.log("firstPlusLength([3,0,2,5]) to log 7");
let arraySecond = [3,0,2,5];
console.log(arraySecond.length += arraySecond[0]);

console.log("firstPlusLength([-5,0,2,5]) to log -1");
let arrayThird = [-5,0,2,5];
console.log(arrayThird[0] += arrayThird.length);

console.log("firstPlusLength([1]) to log 2");
let arrayFourth = [1];
console.log(arrayFourth.length += arrayFourth[0]);


console.log("7. Given an array, write a function that prints the index value of its positive values.")
//For example, printPositiveIndex([1, 3, -10]), have it print/log 0, 1 (as the 0th index had a positive value and index 1 also had a positive value).
//printPostiiveIndex([10, 5, -5, 15]) should print/log 0, 1, and 3. In other words, it prints the index of each positive number in the array.




console.log("printPositiveIndex([1, 3, -10]) to log 0 1")
function printPositiveIndex(){
    let array = [1,3,-10];
    for (i=0; i<array.length; i++){
        if (array[i]>0) {
            console.log(array[i]);
        }
}
}

printPositiveIndex();


console.log("printPositiveIndex([10, 5, -5, 15]) to log 0 1 3")
function printPositiveIndexTwo(){
    let array = [10,5,-5,15];
    for (i=0; i<array.length; i++){
        if (array[i]>0) {
            console.log(array[i]);
        }
    }
    }
printPositiveIndexTwo();


console.log("printPositiveIndex([10, 5, 5, 15]) to log 0 1 2 3")
function printPositiveIndexThird(){
    let array = [10,5,5,15];
    for (i=0; i<array.length; i++){
        if (array[i]>0) {
            console.log(array[i]);
        }
    }
    }
    printPositiveIndexThird();