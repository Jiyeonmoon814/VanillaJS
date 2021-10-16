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
        ${correctLetters.includes(letter) ? letter : ''}
        </span>
        `
        ).join('')
        //join method creates and returns a new string by concatenating all of the elements in an array
    }
    `
    
    console.log(selectedWord)
    
    const innerWord = wordEl.innerText.replace(/[ \n]/g, '')
    
    if(innerWord === selectedWord) {

    }
    
}

// Update the wrong letters 
const updateWrongLettersEl = () => {

}

// Show notification
const showNotification = () => {

}

document.addEventListener('DOMContentLoaded', displayWord())

window.addEventListener('keydown', e => {
    if(playable) {
        if(e.keyCode >= 65 && e.keyCode <= 90){
            const letter = e.key.toLowerCase()
            console.log(letter)
            if(selectedWord.includes(letter)) {
                if(!correctLetters.includes(letter)){
                    correctLetters.push(letter)

                    displayWord()
                }        
            }
        }
    }
})
// Keydonwn letter press 