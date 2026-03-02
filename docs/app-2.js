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
let wastePile;
let selectCard;
let selectPile;
/*------------------------ Cached Element References ------------------------*/
const resetButton = document.getElementById("reset")

/*-------------------------------- Functions --------------------------------*/

// Function to Generate a Deck of 52 Cards
const generateCards = () => {

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
                    pile: undefined}
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
    renderTableaus()
    userWin = false
    
};

// Function to distribute cards to various piles, and flip top card of each tableau to face up
const startGame = () => {

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
    // for (let tab of masterTableau){
    //     tab[tab.length - 1].faceDown = false
    // }

    Object.keys(masterTableau).forEach (
    key => masterTableau[key][masterTableau[key].length -1].faceDown = false 
    )

    // This part places remaining card to draw pile.

    for (let item in deck){

        let randomIndex = Math.floor(Math.random() * deck.length)
        let randomCard = deck[randomIndex]        
        drawPile.push(randomCard)
    }

}

// Function to select a card to move

const selectCardFunction = () => {
    selectCard = prompt("Which card do you want to move?") // To include event listeners.
}

// Function to select the pile to move to 

const selectPileFunction = () => {
    selectPile = prompt(`Which pile do you want to shift ${selectCard} to?`) // To include event listeners.
}

// Function to shift card from Tableau to Foundation

// const shiftCardToFoundation = () => {

//     // Check if card is of different color and running in sequence
//     const sameSuit = card.suit === selectPile
//     const cardInSequence = ((selectPile.length === 0 && selectCard.rank === 1) || (selectPile))
//     if () {
//         selectPile.push(selectCard)
//     } 
   
// } 

  
/*----------------------------- DOM Functions -----------------------------*/
const newCardElement = (card) => {
    const newCardDiv = document.createElement('div');
    newCardDiv.className = 'card';
    newCardDiv.textContent = card.display
    return newCardDiv
}

const renderTableaus = () => {

    const allTableausDiv = document.getElementById('tableau')

    Object.entries(masterTableau).forEach(([key,value], index) => {
        const parentTableaus = document.createElement('div')
        parentTableaus.classList = 'parent-tableaus'
        parentTableaus.innerText = `Tableau ${index+1}`

        for (const item of value) {
            const addCard = newCardElement(item)
            parentTableaus.appendChild(addCard)

        }

        allTableausDiv.appendChild(parentTableaus)
    })
}
/*----------------------------- Event Listeners -----------------------------*/
resetButton.addEventListener('click', init)
/*----------------------------- Run Functions  -----------------------------*/
// init()