//display/ui
import { createboard, markTile, TILE_STATUSES, revealTile } from "./minesweeper.js";

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 10


const board = (createboard(BOARD_SIZE, NUMBER_OF_MINES));
const boardElement = document.querySelector('.board')
const mineLeftText = document.querySelector('[data-mine-count]')



board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
        tile.element.addEventListener('click', () => {
            revealTile(board, tile)
        })
        tile.element.addEventListener('contextmenu', e => {
            e.preventDefault()
            markTile(tile)
            listMinesLeft()
        })
    })
})



boardElement.style.setProperty('--size', BOARD_SIZE)
mineLeftText.textContent = NUMBER_OF_MINES



function listMinesLeft() {
    const markedTilesCount = board.reduce((count, row) => {
        return count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length
    }, 0)

    mineLeftText.textContent = NUMBER_OF_MINES - markedTilesCount
}









