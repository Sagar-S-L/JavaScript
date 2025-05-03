// Array

let arr = [1, 2, 3, 4, 5];

let arr1 = [...arr];

arr1[1] = 10;

console.log(arr);

// Array methods

// arr.push(6);
// arr.pop();

arr.unshift(9);
arr.shift(7);
// console.log(arr);

// console.log(arr.join()); // converts array into a string

let sliceArr = arr.slice(1,3);
console.log("A ",arr)
console.log(sliceArr);

let splicearr = arr.splice(1,3); // it'll remove the original array values
console.log("B ",arr);
console.log(splicearr);