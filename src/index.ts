import { BingoNumber, BingoRowOrColumn } from "./types"
import { generateBingoNumbers, markCalledNumbers, generateBingoRows, checkForBingo, generateBingoColumns } from "./functions"

export const bingo = (calledNumbers: Array<number>, bingoCard: Array<number>) => {
    const generatedBingoCard: Array<BingoNumber> = generateBingoNumbers(bingoCard)
    const markedBingocard: Array<BingoNumber> = markCalledNumbers(calledNumbers, generatedBingoCard)

    const bingoCardRows: Array<BingoRowOrColumn> = generateBingoRows(markedBingocard)
    let isBingoByRow: boolean = false
    bingoCardRows.forEach((row) => {
        if (checkForBingo(row) === true) isBingoByRow = true
    })

    const bingoCardColumns: Array<BingoRowOrColumn> = generateBingoColumns(markedBingocard)
    let isBingoByColumn: boolean = false
    bingoCardColumns.forEach((column) => {
        if (checkForBingo(column) === true) isBingoByColumn = true
    })

    return isBingoByRow || isBingoByColumn ? true : false
}