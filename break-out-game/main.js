/* What we need to do 
1.Create canvas context
2.Create and draw ball
3.Create and draw paddle
4.Create bricks
5.Draw score
6.Add update() - Animate - requestAnimationFrame(cd)
7.Move paddle
8.Keyboard event handlers to move paddle
9.Move ball
10.Add wall bounderies
11.Increase score when bricks break
12.Lose - redraw bricks, reset score 
*/ 
document.addEventListener('DOMContentLoaded',update)

const rulesBtn = document.getElementById('rules-btn')
const closeBtn = document.getElementById('close-btn')
const rules = document.getElementById('rules')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let score = 0

const brickRowCount = 9;
const brickColumnCount = 5;
const delay = 500; //delay to reset the game

//Create ball props 
const ball = {
    x:canvas.width / 2,
    y:canvas.height / 2,
    size: 10,
    speed: 4,
    dx : 4,
    dy : -4,
    visible : true
}

//Create paddle props
const paddle = {
    x:canvas.width / 2 - 40,
    y:canvas.height - 20,
    w:80,
    h:10,
    speed:8,
    dx:0,
    visible: true
}

//Create bricks props
const brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true
}

//Create bricks
const bricks = [];
for(let i=0; i<brickRowCount; i++){
    bricks[i] = [];
    for(let j=0; j<brickColumnCount; j++){
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
        bricks[i][j] = {x, y, ...brickInfo}
    }
}

//Draw ball on canvas 
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    ctx.fillStyle = paddle.visible ? '#0095dd' : 'transparent';
    ctx.fill();
    ctx.closePath();

}

//Draw paddle on canvas
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y,paddle.w,paddle.h);
    ctx.fillStyle = paddle.visible ? '#0095dd' : 'transparent';
    ctx.fill();
    ctx.closePath();
}

//Draw bricks on canvas
function drawBricks() {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath();
            ctx.rect(brick.x, brick.y, brick.w, brick.h);
            ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';
            ctx.fill();
            ctx.closePath();
        })
    })
}

//Draw everything
function draw(){
    //need to clear canavs first 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    drawPaddle();
    drawBricks();
}

//Update cavnas drawing and animation
function update(){
    //draw everything
    draw()
}

// Keyboard event handlers
//document.addEventListener('keydown', keyDown);
//document.addEventListener('keyup', keyUp);

//Rules and close event handlers 
rulesBtn.addEventListener('click', () => 
    rules.classList.add('show')
)

closeBtn.addEventListener('click', ()=>
    rules.classList.remove('show')
)

