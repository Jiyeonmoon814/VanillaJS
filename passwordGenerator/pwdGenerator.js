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

console.log(getRandomSymbol())

