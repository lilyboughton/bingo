import { BingoNumber, BingoRowOrColumn } from "./types"
import { generateBingoNumbers, markCalledNumbers, generateBingoRows, checkForBingo } from "./functions"

export const bingo = (calledNumbers: Array<number>, bingoCard: Array<number>) => {
    const generatedBingoCard: Array<BingoNumber> = generateBingoNumbers(bingoCard)
    const markedBingocard: Array<BingoNumber> = markCalledNumbers(calledNumbers, generatedBingoCard)
    const bingoCardRows: Array<BingoRowOrColumn> = generateBingoRows(markedBingocard)
    let isBingo: boolean = false
    bingoCardRows.forEach((row) => {
        if (checkForBingo(row) === true) isBingo = true
    })

    return isBingo
}