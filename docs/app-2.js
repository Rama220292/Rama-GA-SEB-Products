/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let deck = [];
let noOfTableaus;
let userWin;

let foundationPiles = {
    spades: [],
    hearts: [],
    clubs: [],
    diamonds:[]
}
let masterTableau = {}; 
let drawPile = [];
let wastePile = [];
let selectedCard;
let selectedPile;
let selectedCardPile; //ChatGPT suggested to create these variables. This is so that we can identify which pile the card is from.
let selectedCardKey; //ChatGPT suggested to create these variables This is so that we can identify which pile the card is from.
/*------------------------ Cached Element References ------------------------*/
const resetButton = document.getElementById("reset")
const drawButton = document.getElementById("draw-pile")
const wastePileDiv = document.getElementById('waste-pile')
const foundationClass = document.querySelectorAll('foundation')
const tableauClass = document.querySelectorAll('parent-tableaus')
const cardClass = document.querySelectorAll('card')

/*-------------------------------- Functions --------------------------------*/

// Function to Generate a Deck of 52 Cards
const generateCards = () => {
    deck = []
    const suits = ['spades', 'hearts', 'clubs', 'diamonds']
    const charCardRank =[['A', 1], ['J', 11], ['Q', 12], ['K', 13]]

    // Generate 52 cards 
    suits.forEach(s => {
        for (let i = 1; i <= 13; i++){
            const card = {
                    character: i,
                    rank: i,
                    suit: s,
                    faceDown: true,
                    }
            deck.push(card)
        }

    })
    // Assign a color for each card
    for (const item of deck){
        if (item.suit === 'spades' || item.suit === 'clubs'){
            item.color = 'black'
        } else {
            item.color = 'red'
        }
    }
    // Change the character for Ranks 1 to A, 11 to J, 12 to Q and K to 13
    for (const item of deck){
        if (item.rank === 1){
            item.character = 'A'
        } else if (item.rank === 11){
            item.character = 'J'
        } else if (item.rank === 12){
            item.character = 'Q'
        } else if (item.rank === 13){
            item.character ='K'
        }
    
    // Create an object called display to show what the card is
    for (const item of deck) {
        item.display = item.character + " " + item.suit
    }
    
    }
}

// Function to initialise game and distribute cards

const init = () => {
    generateCards()
    startGame()
    masterRender()
    userWin = false
    
};

// Function to distribute cards to various piles, and flip top card of each tableau to face up, and clear the Waste Pile
const startGame = () => {
    drawPile = []
    wastePile = []
    masterTableau = {}

    // Ask user for how many Tableaus he wants and generate Tableaus
    noOfTableaus = prompt("How many Tableaus do you want? Choose from 3 to 7.")
    for (let i = 0; i < Number(noOfTableaus); i++) {
        masterTableau[`tab${i+1}`] = [];
    }

    // This part generates card for each Tableau (i.e. first Tableau 1 card, second Tableau 2 cards, etc).
    for (let j = 0; j < Number(noOfTableaus); j++) {
        for (let k = 0; k < j+1; k++) {
            let randomIndex = Math.floor(Math.random() * deck.length)
            const randomCard = deck[randomIndex]

            masterTableau[`tab${j+1}`].push(randomCard) // insert random card into the Tableau
            deck.splice(randomIndex, 1) // remove cards distributed from main deck
        }
    }

    // This part flips the last card of each Tableau to face up.

    Object.keys(masterTableau).forEach (key => 
        masterTableau[key][masterTableau[key].length -1].faceDown = false 
    )

    // This part places remaining cards to draw pile.
    drawPile = deck
}

// Function to draw a card from Draw Pile, and move it to Waste Pile

const drawCard = () => {
    // if the Draw Pile is empty, then put back the cards from Waste Pile into Draw Pile in reverse order, and face all cards down.
    if (drawPile.length === 0) {
        drawPile = wastePile.reverse()
        wastePile = []
        drawPile.forEach(item => item.faceDown = true)
    // Take the first card from Draw Pile, then show it face-up, and put it into Waste Pile
    } else {
        const newCard = drawPile.pop()
        newCard.faceDown = false
        wastePile.unshift(newCard)
    }

    masterRender()

}

// Function to select a card. Feedback from ChatGPT was to capture the name of the array the card came from, 
// and the name of the object the array came. This is to place cards in the correct array, and the array in the correct object.

const selectCardFunction = (card, cardPile, cardKey) => {
    if (card.faceDown) {
        alert("Cannot select face down card.")
        return
    }

    selectedCard = card
    selectedCardPile = cardPile //This is either 'tableau' or 'foundation' or 'waste'
    selectedCardKey = cardKey //This is either 'tabX' or 'spades/hearts/clubs/diamonds' or 'waste'
}

// Function to select a pile. Feedback from ChatGPT was to capture the pile name and the pile key. 
// This is to place cards in the correct pile subsequently.

const selectPileFunction = (pile, key) => {
    selectedPile = {piletype: pile,   // pile here is either 'tableau' or 'foundation' or 'waste' 
                    pilekey: key}     // key here either 'tabX' or 'spades/hearts/clubs/diamonds' or 'waste'
    
    moveCard()
}

const moveCard = () => {

    if (!selectedCard || !selectedPile) {
        alert("Choose a card and a pile!")
        return
    }

    if (selectedPile.piletype === 'tableau' && selectedCardPile === 'tableau') {
        console.log("Hi")
        moveTabToTab()
    } else if (selectedPile.piletype === 'foundation' && selectedCardPile === 'tableau'){
        console.log("HiHi")
        moveTabToFtn()
    } else if (selectedPile.piletype === 'foundation' && selectedCardPile === 'waste'){
        console.log("HiHiHi")
        moveWasteToFtn()
    } else if (selectedPile.piletype === 'tableau' && selectedCardPile === 'waste'){
        console.log("HiHiHiHi")
        moveWasteToTab()
    }

    clearClick()
    masterRender()

}

// Function to clear card and pile variables. 
const clearClick = () =>{
    selectedCard = null
    selectedCardPile = null 
    selectedCardKey = null
    selectedPile = null
}


/*----------------------------- DOM Functions -----------------------------*/
// DOM Function to display a card
const newCardElement = (card) => {
    const newCardDiv = document.createElement('div');
    newCardDiv.className = 'card';
    if (card.faceDown) {
        newCardDiv.textContent = "Card Face Down"
    } else {
        newCardDiv.textContent = card.display    
    }
    return newCardDiv
}

// DOM Function to display the Tableaus
const renderTableaus = () => {

    const allTableausDiv = document.getElementById('tableau')
    allTableausDiv.textContent = ''

    // Loop through each Tableau
    Object.entries(masterTableau).forEach(([key,value], index) => {
        const parentTableaus = document.createElement('div')
        parentTableaus.classList = 'parent-tableaus'
        parentTableaus.id = key
        parentTableaus.innerText = `Tableau ${index}`

        // Loop through each Card in Tableau
        for (const item of value) {
            const addCard = newCardElement(item)
            parentTableaus.appendChild(addCard)

        allTableausDiv.appendChild(parentTableaus)
        }
    })
}

// DOM Function to display the Draw Pile and Waste Pile

const renderDrawPile = () => {
    
    if (drawPile.length > 0) {
        drawButton.textContent = `Draw Pile: ${drawPile.length} card(s) left in draw pile. Click to draw.`    
    } else
        drawButton.textContent = `Draw Pile: No cards left in draw pile. Click to recycle draw pile.`

}

const renderWastePile = () => {

    if (wastePile.length > 0) {
        wastePileDiv.textContent = `Waste Pile: The card is ${wastePile[0].display}. ${wastePile.length} cards in Waste Pile.`
    } else {
        wastePileDiv.innerHTML = "No Cards in Waste Pile"
    }
}

// DOM Function to display the top most card in the Foundation Piles

const renderFtn = () => {

    for (let suit in foundationPiles){
        const ftnElement = document.getElementById(suit) 
        ftnElement.textContent = `${suit} Foundation: There are no cards.`
        
    if (foundationPiles[suit].length != 0) {
        const lastCardOfPile = foundationPiles[suit][foundationPiles[suit].length - 1]
        ftnElement.textContent = lastCardOfPile.display
    } 

    }

}
    
// Create a master render function to nest all other render functions

const masterRender = () => {

    renderTableaus()
    renderDrawPile()
    renderWastePile()
    renderFtn()
}


/*----------------------------- Event Listeners -----------------------------*/
resetButton.addEventListener('click', init)
drawButton.addEventListener('click', drawCard)

// Event Listener to Select Card from Waste Pile
wastePileDiv.addEventListener('click', () => {
        if (wastePile.length > 0) {
            selectCardFunction(wastePile[0], 'waste', 'wastePile')
        }})

// Event Listener to Select Foundation Pile to Move card to
foundationClass.forEach(foundation => {foundation.addEventListener('click', () => {
            selectPileFunction('foundation', foundation.id)
        })})

// Event Listener to Select Tableau Pile to Move card to
parentTableaus.forEach(tableau => tableau.addEventListener('click', () => {
            if (selectedCard === null){
                selectPileFunction('tableau', key)
            }
        }))

// Event Listener to Select Card to Move
cardClass.forEach(card => card.addEventListener('click', () => { 
                selectCardFunction(item, 'tableau', card.parentElement.id)
            })
)


/*----------------------------- Run Functions  -----------------------------*/
