//display/ui
import { createboard, markTile, TILE_STATUSES, revealTile, checkWin, checkLose } from "./minesweeper.js";

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 10


const board = (createboard(BOARD_SIZE, NUMBER_OF_MINES));
const boardElement = document.querySelector('.board')
const mineLeftText = document.querySelector('[data-mine-count]')
const messageText = document.querySelector('.subtext')



board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
        tile.element.addEventListener('click', () => {
            revealTile(board, tile)
            checkGameEnd()

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


function checkGameEnd() {
    const win = checkWin(board)
    const lose = checkLose(board)


    if (win || lose) {
        boardElement.addEventListener('click', stopProp, { capture: true })
        boardElement.addEventListener('contextMenu', stopProp, { capture: true })
    }

    if (win) {
        messageText.textContent = 'You Win'
    }

    if (lose) {
        messageText.textContent = 'You Lose'
        board.forEach(row => {
            row.forEach(tile => {
                if (tile.TILE_STATUSES === TILE_STATUSES.MARKED)
                    if (tile.mine) revealTile(board, tile)
            })
        })

    }


}


function stopProp(e) {
    e.stopImmediatePropogation()
}






