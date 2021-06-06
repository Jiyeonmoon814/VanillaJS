//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

//eventListeners 
generateEl.addEventListener('click',()=>{
    //set type of lngth as a number by adding + 
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText=generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length);
})

//Generate password function 
function generatePassword(lower,upper,number,symbol,length){
    //1.Init pwd var 
    let generatedPwd = '';
    
    //2.Filter out unchecked types 
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower},{upper},{number},{symbol}].filter(item=>Object.values(item)[0]);

    if(typesCount===0){
        return '';
    }
    
    //3.Loop over length call generator function for each type 
    for(let i=0;i<length;i+=typesCount){
        typesArr.forEach(type=>{
            const funcName = Object.keys(type)[0];
            generatedPwd += randomFunc[funcName]();
        })
    }
    //4.Add final pwd to the pwd variable and return it 
    const finalPwd = generatedPwd.slice(0,length);
    return finalPwd;
}
//Functions 
//Generator random lower,uppercase,numbers and symbols
//from character set (such as a>>97,A>>65)
function getRandomLower(){
    //print lowercase letters(from 97-122)
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUpper(){
    //print uppercase letters(from 65-90)
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber(){
    //print number letters(from 49-57)
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random()*symbols.length)];
}


