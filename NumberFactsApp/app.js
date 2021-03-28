let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numInput = document.querySelector('#numInput');

let dateFact = document.querySelector('#dateFact');
let dateFactText = document.querySelector('#dateFactText');
let dateInput = document.querySelector('#dateInput');

numInput.addEventListener('input',getFactFetch);
dateInput.addEventListener('input',getFactAjax);

//AJAX With XML Http Request
function getFactAjax(){
    let fullDate = dateInput.value.split("-");
    let month = fullDate[1];
    let day = fullDate[2];

    let xhr = new XMLHttpRequest();
    xhr.open('GET','http://numberapi.com/'+month+'/'+day+'/date');
    xhr.onload = function(){
        if(this.status===200 & fullDate != ''){
            dateFact.style.display = 'block';
            dateFactText.innerText = this.responseText;
        }
    }
    xhr.send();  
    }

//AJAX With Fetch
function getFactFetch(){
let number = numInput.value;

fetch('http://numberapi.com/'+number)
    .then(response => response.text()) //response.JSON()
    .then(data => {
        if(number != ''){
            fact.style.display = 'block';
            factText.innerText = data; 
            }
        })
    .catch(err=> console.log(err));
    }