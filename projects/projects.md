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
## Project 2

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === ''|| height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === ''|| weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        
        if(bmi<18.6){
            results.innerHTML = `<span>${bmi} Under weigt</span>`
           
        }
        else if(bmi>18.6 && bmi<24.9){
            results.innerHTML = `<span>${bmi} Normal range</span>`
            
        }
        else{
            results.innerHTML = `<span>${bmi} Overweight</span>`
            
        }
    }
    
})
```