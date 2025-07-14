//display/ui
import { createboard } from "./minesweeper.js";

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 2


const board = (createboard(BOARD_SIZE, NUMBER_OF_MINES));
const boardElement = document.querySelector('.board')



board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
    })
})



boardElement.style.setProperty('--size', BOARD_SIZE)



//Populate a board with tiles/mines



// left click on tiles


//reveal tiles


//right click on tiles


//mark tiles


//check for win/lose

