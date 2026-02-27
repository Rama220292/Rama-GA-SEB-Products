/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let deck;
let noOfTableaus;
let userWin;
let foundationPileSpade = [];
let foundationPileHearts = [];
let foundationPileClubs = [];
let foundationPileDiamond = [];
let masterTableau = [];
let drawPile = [];
let wastePile;
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
// Function to generate a deck of cards. 
const init = () => {
  deck = [
    "dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02",
    "hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02",
    "cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02",
    "sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02",
  ];

  userWin = false
};

// Function to generate the game layout based on number of Tableaus chosen by the user.
const gameLayout = () => {

    // This part generates one array for each Tableau.
    noOfTableaus = prompt("How many Tableaus do you want? Choose from 3 to 7.")
    for (let i = 0; i < Number(noOfTableaus); i++) {
        masterTableau.push(Array(0))
    }

    // This part generates card for each Tableau (i.e. first Tableau 1 card, second Tableau 2 cards, etc).
    for (let j = 0; j < Number(noOfTableaus); j++) {
        for (let k = 0; k < j+1; k++) {
            let random_index = Math.floor(Math.random() * deck.length)

            const card = {
                card: deck[random_index],
                faceDown: true, 
            }  

            masterTableau[j].push(card) // insert random card into the Tableau
            deck.splice(random_index, 1) // remove cards distributed from main deck
        }
    }

    // This part flips the last card of each Tableau to face up.
    for (let tab of masterTableau){
        tab[tab.length - 1].faceDown = false
        console.log(tab[tab.length - 1])
    }

    // This part places remaining card to draw pile.

    for (let item in deck){

        let random_index = Math.floor(Math.random() * deck.length)
            const card = {
                card: item,
                faceDown: true, 
            }

            drawPile.push(card)
          
    }
    
}

// Function to shift a card from Tableau to Foundation

let const shiftTabToFtn = () => {

    const selectCard = prompt("Which card do you want to move?") 
    const selectPile = prompt("Which pile do you want to move to")

}
/*----------------------------- Event Listeners -----------------------------*/

/*----------------------------- Run Functions  -----------------------------*/
init()
gameLayout()
// console.log(masterTableau)
// console.log("-----------")
// console.log(drawPile)
// console.log(drawPile.length)