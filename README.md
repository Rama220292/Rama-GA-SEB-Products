# Project Brief
---
## Overview

This is my first project during the Software Engineering Bootcamp. There is 4 day timeline to develop the product from start to finish, and is being developed using JS, HTML and CSS. I landed on the basic version of Solitaire aka Klondike. This was a game I was familiar with, that has some complexity, and would enhance my development in software engineering. 

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
2. As a user, I want to shift a card from one Tableau to another Tableau. 
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
1. userWin = ; takes on the value of true or false  
2. foundationPileAce = ; starts off as an empty pile, and will take the form of an array.
3. foundationPileHearts = ; starts off as an empty pile, and will take the form of an array.
4. foundationPileClover = ; starts off as an empty pile, and will take the form of an array.
5. foundationPileDiamond = ; starts off as an empty pile, and will take the form of an array.
6. tableau1 = ; starts off with one card face-up, and will take the form of an array.
7. tableau2 = ; starts off with two cards. One card face-up, the rest face down. Take the form of an array.
8. tableau3 = ; starts off with three cards. One card face-up, the rest face down. Take the form of an array.
9. tableau4 = ; starts off with four cards. One card face-up, the rest face down. Take the form of an array.
10. tableau5 = ; starts off with five cards. One card face-up, the rest face down. Take the form of an array.
11. tableau6 = ; starts off with six cards. One card face-up, the rest face down. Take the form of an array.
12. tableau7 = ; starts off with seven cards. One card face-up, the rest face down. Take the form of an array.
13. drawPile = ; starts with the rest of the undistributed cards.
14. wastePile = ; starts with no cards. 
15. deck = ; standard pack of 52 cards.

---
## View
![Project Screenshot](game-layout.png)

## Controller
1. init() = ; initialise the game. Shuffle the card. Distribute the cards to Tableaus and Draw Pile.
2. shiftTabToFtn = ; shift card from Tableau to Foundation
3. shiftTabToTab = ; shift card from Tableau to Tableau
4. shiftStackTabtoTab = ; shift a stack of cards from Tableau to Tableau
5. drawCard = ; draw a card from Draw pile. If there was a previous card, then shift that previous card to the Waste Pile.
6. drawToTab = ; shift a card from Draw pile to Tableau. 
7. drawToFtn = ; shift a card from Draw pile to Foundation.

---

