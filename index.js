"use strict";
// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
function calEvnNum(n) {
    let sum = 0;
    let list = [];
    for (let index = 1; index <= n; index++) {
        if (index % 2 == 0) {
            sum = sum + index;
            list.push(index);
            console.log("sum", sum, list);
        }
    }
}
calEvnNum(10);
//  - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
function printEvenNum(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 == 0) {
            console.log(arr[index]);
        }
    }
}
let numberArray = [1, 2, 3, 4, 6, 7, 85, 245, 52, 5325, 89712045, 3412, 41234, 54, 54645, 765878, 468, 123512, 5, 151, 5, 4545, 456, 8768,];
printEvenNum(numberArray);
//  - Implement a ts program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
function remEvenNum(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 == 0) {
            arr.splice(index, 1);
            index--;
        }
        console.log(arr);
    }
}
let numberArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
remEvenNum(numberArray1);
// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function calArea(redius) {
    let a = ((22 / 7) * (redius * redius));
    console.log("Area is", a);
}
calArea(5);
//  - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
function chkGrade(grades) {
    for (let index = 0; index < grades.length; index++) {
        if (grades[index] < 50) {
            grades.splice(index, 1);
            index--;
        }
    }
    console.log(grades);
}
let studentsGrade = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 55, 335, 5, 634, 645, 6456, 23, 6, 76, 377, 98, 79, 245,];
chkGrade(studentsGrade);
//  - Write a program that uses a function to find the largest element in an array of numbers.
function findLargestElement(numbers) {
    let largest = numbers[0];
    for (let index = 1; index < numbers.length; index++) {
        if (numbers[index] > largest) {
            largest = numbers[index];
        }
    }
    return largest;
}
const numberArray11 = [5, 10, 3, 8, 15, 7, 50, 2140, 12433, 124, 928384294, 1234, 124132, 4213, 44132, 1234, 123, 41234, 2314, 4321, 424, 2122313, 432, 14231, 4];
const largestElement = findLargestElement(numberArray11);
console.log("The largest element is:", largestElement);
