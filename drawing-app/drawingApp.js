const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

//Later calls to this method on the same canvas element, with the same contextType argument,
//will always return the same drawing context instance as was returned to the first time the method was invoked
const ctx = canvas.getContext('2d');
console.log(ctx)

let size = 10;
let isPressed = false;
colorEl.value = 'black';
let color = colorEl.value;
let x
let y 

//mouse event listener 
canvas.addEventListener('mousedown',(e)=>{
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup',(e)=>{
    isPressed = false
    
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        
        drawCircle(x2,y2)
        drawLine(x,y,x2,y2)

        x=x2
        y=y2
    }
})

//mouse function
function drawCircle(x,y){
    //create a new path. once created, future drawing commands are directed into the path and used to build the path up 
    ctx.beginPath();
    //arc(x,y,radius,startAngle,endAngle,anticlockwise)
    ctx.arc(x,y,size,0,Math.PI*2)
    ctx.fillStyle = color
    //Draws a solid shape by filling the path's content area 
    ctx.fill()
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    //Moves the pen to the coordinates specified by x and y 
    ctx.moveTo(x1,y1);
    //Draws a line from the current drawing position to the position specified by x and y 
    //The starting point can also be changed by using the moveTo() method 
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    //Draws the shape by stroking its outline 
    ctx.stroke();
}

function updateSizeOnScreen(){
    sizeEL.innerText = size;
}

increaseBtn.addEventListener('click',()=>{
    size += 5
    if(size>50){
        size = 50
    }

    updateSizeOnScreen();
})

decreaseBtn.addEventListener('click',()=>{
    size -= 5

    if(size<5){
        size=5
    }

    updateSizeOnScreen()
})

colorEl.addEventListener('change',(e)=> color = e.target.value)

clearEl.addEventListener('click',()=>ctx.clearRect(0,0,canvas.width,canvas.height))