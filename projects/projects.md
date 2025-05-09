# Project related to DOM

## Project link
[Click here](https://openai.com)

## Solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("#body");

buttons.forEach((button)=>{
    console.log(button)
    button.addEventListener('click',(e)=>{
       body.style.backgroundColor = e.target.id
    })
});

```
