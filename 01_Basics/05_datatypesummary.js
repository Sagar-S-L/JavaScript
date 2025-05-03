/* 
2 types of datatypes
1. Primitive
    7 types :- String, Number, Boolean, null, undefined, symbol, BigInt
    
2. Reference (Non primitive)
    Arrays, Objects, Functions
*/

let num = 10; //number

let name = "Sagar"; //string 

const pi = 3.142; //
console.log(typeof pi); //number


let isLoggedIn = true; //Boolean

let unknownNumber;  //undefined

let bigNumber = 43252763465476535n; //BigInt


//************************************ REFERENCE DATATYPES **************************************

// Array

let arr = [10, 20, 30, "Sagar"];

// Objects

let Person = {
    name : "Sagar",
    age : 24,
    ID : "R23DE162"
}

console.log(Person);