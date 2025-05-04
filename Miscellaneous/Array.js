// const arr = [0,1,2,3,4,5]
// const arr1 = [6,7,8,9]
// const arr2=arr1.concat(arr)

// console.log(Array.from({name:"Sagar"},key))

// if(true){
//     let a = 30;
//     const b = 20;
//     var c = 10;
// }

// // console.log(a)
// console.log(b)
// console.log(c)


// addTwo(5);

// const addTwo = function(num){
//     console.log(num+3);
// }

// function addOne(){
//     console.log(this);
// }

// addOne();

// 

// const myCoding = [
//     {
//         languageName : "JavaScript",
//         languageFileName : "js"
//     },
//     {
//         languageName : "Python",
//         languageFileName : "py"
//     },
//     {
//         languageName : "Java",
//         languageFileName : "java"
//     },
// ]

// myCoding.forEach((item) => {
//     console.log(item)
// })


// const arr = [1,2,3,4,5,6,7]

// arr.push(8)
// arr = [8,9,0]

// console.log(arr);


const myNums = [1,2,3,4,5,6,7,8,9,10]
//filter
// const newNum = myNums.filter((num) => num>3)

//map
const newNum = myNums.map((num) => num>3)
// console.log(newNum);

//reduce

// const array1  = [1,2,3,4];

const obj =[{
    name:"Sagar",
    price:10
    },
    {
    name:"Jeevan",
    price:30
    },
    {
    name:"Sagar",
    price:50
    },
]
const sum  = obj.reduce((accum,item) => accum+item.price,0)
console.log(sum);
