const cardsContainer = document.querySelector('#cards-container')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const currentEl = document.querySelector('#current')
const showBtn = document.querySelector('#show')
const hideBtn = document.querySelector('#hide')
const questionEl = document.querySelector('#question')
const answerEl = document.querySelector('#answer')
const addCardBtn = document.querySelector('#add-card')
const clearBtn = document.querySelector('#clear')
const addContainer = document.querySelector('#add-container')

//keep track of current card 
let currentActiveCard = 0

//Store DOM cards
const cardsEl = []

//Store card data
//const cardsData = getCardsData()

//Create all cards
function createCards() {
    cardsData.forEach((data, index) => createCard(data,index))
}

//Create a single card in DOM
function createCard(data, index){
    const card = document.createElement('div')
    card.classList.add('card')

    if(index===0){
        card.classList.add('active')
    }

    card.innerHTML = `
    <div class="inner-card">
        <div class="inner-card-front">
            <p>${data.question}</p>
        </div>
        <div class="inner-card-back">
            <p>${data.answer}</p>
        </div>
    </div>
    `

    card.addEventListener('click',() => 
        card.classList.toggle('show-answer')
    )

    // Add to DOM cars
    cardsEl.push(card)

    cardsContainer.appendChild(card)

    //updateCurrentText()
}

//Add card to local storage
function setCardsData(cards) {
    localStorage.setItem('cards', JSON.stringify(cards))
    window.location.reload()
}

//Event Listeners 
//Show add container 
showBtn.addEventListener('click',() => addContainer.classList.add('show'))

//Hide add Container 
hideBtn.addEventListener('click',() => addContainer.classList.remove('show'))

//Add new Card
addCardBtn.addEventListener('click', () => {
    const question = questionEl.value 
    const answer = answerEl.value 

    if(question.trim()&&answer.trim()){
        const newCard = { question, answer }

        createCard(newCard)

        questionEl.value=''
        answerEl.value=''

        addContainer.classList.remove('show')

        cardsData.push(newCard)
        setCardsData(cardsData)
    }
})
