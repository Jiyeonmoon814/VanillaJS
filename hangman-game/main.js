const wordEl = document.getElementById('word')
const wrongLettersEl = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-button')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')
const finalMessageRevealWord = document.getElementById('final-message-reveal-word')

const figureParts = document.querySelectorAll('.figure-part')

const words = ['application', 'programming', 'interface', 'wizard']

let selectedWord = words[Math.floor(Math.random() * words.length)]

let playable = true 

const correctLetters = []
const wrongLetters = []


const displayWord = () => {
    wordEl.innerHTML = `
    ${selectedWord.split('').map(letter => 
        `<span class="letter">
        ${correctLetters.includes(letter) ? letter : '' }
        </span>
        `
        ).join('')
        //join method creates and returns a new string by concatenating all of the elements in an array
    }
    `
    
    console.log(selectedWord)

    const innerWord = wordEl.innerText.replace(/[ \n]/g, '')
    
    if(innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You Won'
        finalMessageRevealWord.innerText = ''
        popup.style.display = 'flex'

        playable = false
    }    
}

// Update the wrong letters 
const updateWrongLettersEl = () => {
    // Display wrong letters 
    wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `

    // Display parts 
    figureParts.forEach(( part, idx ) => {
        const errors = wrongLetters.length 

        if(idx < errors){
            part.style.display = 'block'
        }else {
            part.style.display = 'none'
        }
    })

    // Check if lost 
    if(wrongLetters.length === figureParts.length) {
        finalMessage.innerText = 'Unfortunately you lost.'

        finalMessageRevealWord.innerText = `The word was : ${selectedWord}`
        popup.style.display = 'flex'

        playable = false
    }
}

// Show notification
const showNotification = () => {
    notification.classList.add('show')
    
    setTimeout(() => {
        notification.classList.remove('show')
    },2000)
}

document.addEventListener('DOMContentLoaded', displayWord())
// Keydown letters event
window.addEventListener('keydown', e => {
    if(playable) {
        if(e.keyCode >= 65 && e.keyCode <= 90){
            const letter = e.key.toLowerCase()
            console.log(letter)
            if(selectedWord.includes(letter)) {
                if(!correctLetters.includes(letter)){
                    correctLetters.push(letter)

                    displayWord()
                }else{
                    showNotification()
                }     
            } else{
                if(!wrongLetters.includes(letter)){
                    wrongLetters.push(letter)

                    updateWrongLettersEl()
                }else {
                    showNotification()
                }
            }
        }
    }
})

// Play Again event 
playAgainBtn.addEventListener('click', () => {
    playable = true 

    // Empty arrays 
    correctLetters.splice(0)
    wrongLetters.splice(0)

    selectedWord = words[Math.floor(Math.random() * words.length)]

    displayWord()
    updateWrongLettersEl()

    popup.style.display = 'none'
})