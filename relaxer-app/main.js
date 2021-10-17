const container = document.getElementById('container')
const text = document.getElementById('text')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5 

const breathAnimation = () => {
    text.innerText = 'Breath In!'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'
        
        setTimeout(() => {
            text.innerText = 'Breath Out'
            container.className = 'container shrink'
        }, holdTime)
    },breatheTime)
}

// offered on the Window, repeatedly calls a function or executes a code snippet
// with a fixed time delay between each call 
// so breathAnimation fx will be called every 7.5s 
setInterval(breathAnimation, totalTime)

document.addEventListener('DOMContentLoaded', breathAnimation())