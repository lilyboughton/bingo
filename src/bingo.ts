import { BingoNumber, BingoRowOrColumn } from "./types"
import { generateBingoNumbers, markCalledNumber, generateBingoRows, checkForBingo, generateBingoColumns } from "./functions"

export const bingo = (calledNumbers: Array<number>, bingoCard: Array<number>) => {
    const generatedBingoCard: Array<BingoNumber> = generateBingoNumbers(bingoCard)
    let markedBingoCard = generatedBingoCard
    let isBingo: boolean = false
    let winningNumber: Array<number> = []
    let message: string

    calledNumbers.forEach((calledNumber, index) => {
        markedBingoCard = markCalledNumber(calledNumber, markedBingoCard)

        const bingoCardRows: Array<BingoRowOrColumn> = generateBingoRows(markedBingoCard)
        bingoCardRows.forEach((row) => {
            if (checkForBingo(row) === true) {
                isBingo = true
                winningNumber.push(index)
            }
        })

        const bingoCardColumns: Array<BingoRowOrColumn> = generateBingoColumns(markedBingoCard)
        bingoCardColumns.forEach((column) => {
            if (checkForBingo(column) === true) {
                isBingo = true
                winningNumber.push(index)
            }
        })
    })

    if (isBingo === false) {
        message = 'Better luck next time!'
    } else {
        message = `Congratulations! You won! It only took ${winningNumber[0]} numbers to be called!`
    }

    return message
}