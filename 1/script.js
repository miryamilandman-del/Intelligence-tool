// const board = document.getElementById("gameBoard");

// // Array of emojis (can be anything)
// const emojis = ["🍎", "🍌", "🍒", "🍇", "🍉", "🥝", "🍍", "🍑"];

// // Duplicate emojis to make pairs
// let cardValues = [...emojis, ...emojis];

// // Shuffle function
// function shuffle(array) {
//     return array.sort(() => Math.random() - 0.5);
// }

// cardValues = shuffle(cardValues);

// let firstCard = null;
// let secondCard = null;
// let lockBoard = false;

// // Create cards
// cardValues.forEach((emoji) => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.dataset.emoji = emoji;
//     card.textContent = "";
//     board.appendChild(card);

//     card.addEventListener("click", flipCard);
// });

// function flipCard() {
//     if (lockBoard || this === firstCard) return;

//     this.classList.add("flipped");
//     this.textContent = this.dataset.emoji;

//     if (!firstCard) {
//         firstCard = this;
//         return;
//     }

//     secondCard = this;
//     checkMatch();
// }

// function checkMatch() {
//     if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
//         firstCard.removeEventListener("click", flipCard);
//         secondCard.removeEventListener("click", flipCard);
//         resetBoard();
//     } else {
//         lockBoard = true;
//         setTimeout(() => {
//             firstCard.classList.remove("flipped");
//             secondCard.classList.remove("flipped");
//             firstCard.textContent = "";
//             secondCard.textContent = "";
//             resetBoard();
//         }, 1000);
//     }
// }

// function resetBoard() {
//     [firstCard, secondCard, lockBoard] = [null, null, false];
// }
