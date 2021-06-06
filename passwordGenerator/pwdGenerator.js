//Generator random lower,uppercase and numbers 
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

