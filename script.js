import { WORDS } from "./italianwords.js";

const TOTAL_GUESSES = 6;
let guessesRemaining = TOTAL_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
console.log(rightGuessString)


function initBoard() {
    let board = document.getElementById("game-board")

    for(let i = 0; i < TOTAL_GUESSES; i++) {
        let row = document.createElement("div")
        row.className = "rowLetter"

        for(let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "boxLetter"
            row.append(box)
        }

        board.append(row)
    }
}

initBoard()