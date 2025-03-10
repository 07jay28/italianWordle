import { WORDS } from "./italianwords.js";

const TOTAL_GUESSES = 6;
let guessesRemaining = TOTAL_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
console.log(rightGuessString)
