const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt =''; // D,e,v ... 
    this.wordIndex = 0; //for an array
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false; //represent a state
}

// Type Method
TypeWriter.prototype.type = function(){
    //console.log('hello');
    setTimeout(()=>this.type(),500)
}
//Init on DOM Load
document.addEventListener('DOMContentLoaded',init);

//Init App
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words')); // it's just String so to use them in JS, need to parse to JSON
    const wait = txtElement.getAttribute('data-wait');
    //Init TypeWriter
    new TypeWriter(txtElement,words,wait);
}