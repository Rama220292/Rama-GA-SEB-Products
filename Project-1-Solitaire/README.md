# Project Brief
---
## Overview

This is my first project during the Software Engineering Bootcamp. There is 3.5 day timeline to develop the product from start to finish, and is being developed using JS, HTML and CSS. I landed on the basic version of Solitaire aka Klondike. This was a game I was familiar with, that has some complexity, and would enhance my development in software engineering. 

---
## Timeline 

Day 1: Work on MVC. AM - Work on the HTML Layout and the Model Logic. PM - Work on the Controller, and User Stories.  
Day 2: AM - HTML. PM - Functions 
Day 3: AM - Functions. PM - DOMs
Day 4: AM - CSS. PM - Back-up  

---
## Use of LLMs

My focus for the first project is to hone my software development skills, and spend less time on design. And to develop good grounding in SWE, my plan is to avoid using LLMs as a baseline, and only when I face significant roadblocks which I cannot overcome after troubleshooting. So the main use of AI for me are (1) to trouble shoot my code when I face errors which I cannot solve and (2) develop the CSS style for the game. I will use Claude Code, since it is widely being used by peers/friends and Microsoft Co-Pilot, since I have a paid version from my work.

---
## User Stories:

1. As a user, I want to shift a card from the Tableau to the Foundation Pile.
2. As a user, I want to shift a card from one Tableau to another. 
3. As a user, I want to shift a stack of ordered cards from one Tableau to another Tableau.
4. As a user, I want to draw a card from the Draw Pile.
5. As a user, I want to shift a card from the Draw Pile to the Tableau.
6. As a user, I want to shift a card from the Draw Pile to the Foundation Pile.
7. As a user, I want to be informed when I have won or lost the game.
8. As a user, I want to reset the game.
9. [Stretch Item] As a user, I want a timer for the game.
10. [Stretch Item] As a user, I want to track my past scores (i.e. how many games I have won, lost and the time I took for each game.)

---
## Model
userWin = ; takes on the value of true or false
foundationPileAce = ; starts off as an empty pile
foundationPileHearts = ; starts off as an empty pile
foundationPileClover = ; starts off as an empty pile
foundationPileDiamond = ; starts off as an empty pile
tableau1 = ; starts off with one card face-up
tableau2 = ; starts off with two cards. One card face-up, the rest face down.
tableau3 = ; starts off with three cards. One card face-up, the rest face down.
tableau4 = ; starts off with four cards. One card face-up, the rest face down.
tableau5 = ; starts off with five cards. One card face-up, the rest face down.
tableau6 = ; starts off with six cards. One card face-up, the rest face down.
tableau7 = ; starts off with seven cards. One card face-up, the rest face down.
drawPile = ; starts with no cards
wastePile = ; starts with the rest of the undistributed cards. 
deck = ;standard pack of 52 cards.

---
## View
![Project Screenshot](game-layout.png)


## Controller
init() = ; initialise the game. Distribute the cards to Tableaus and Draw Pile.
shiftTabToFtn = ; shift card from Tableau to Foundation
shiftTabToTab = ; shift card from Tableau to Tableau
shiftStackTabtoTab = ; shift a stack of cards from Tableau to Tableau
drawCard = ; draw a card from draw pile. If there was a previous card, then shift it to the Waste Pile.
drawToTab = ; shift a card from Draw pile to Tableau.
drawToFtn = ; shift a card from Draw pile to Foundation.

---