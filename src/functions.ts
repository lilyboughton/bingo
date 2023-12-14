import { BingoNumber, BingoRowOrColumn } from './types'

const singleBingoRow = (rowLength: number, bingoCard: Array<BingoNumber>) => {
    let row: BingoRowOrColumn = []
    for (let i = 0; i <= rowLength - 1; i++) {
        row.push(bingoCard[i])
    }

    return row
}

export const generateBingoRows = (bingoCard: Array<BingoNumber>) => {
    let bingoRows: Array<BingoRowOrColumn> = []
    const rowLength: number = Math.sqrt(bingoCard.length)
    for (let i = 0; i <= rowLength - 1; i++) {
        bingoRows.push(singleBingoRow(rowLength, bingoCard))
        bingoCard.splice(0, rowLength)
    }

    return bingoRows
}

const singleBingoColumn = (start: number, columnLength: number, bingoCard: Array<BingoNumber>) => {
    let column: BingoRowOrColumn = []
    for (let i = start; i <= bingoCard.length; i++) {
        column.push(bingoCard[i])
        i += columnLength - 1
    }

    return column
}

export const generateBingoColumns = (bingoCard: Array<BingoNumber>) => {
    let bingoColumns: Array<BingoRowOrColumn> = []
    const columnLength: number = Math.sqrt(bingoCard.length)
    for (let i = 0; i <= columnLength - 1; i++) {
        bingoColumns.push(singleBingoColumn(i, columnLength, bingoCard))
    }

    return bingoColumns
}

export const generateBingoNumbers = (bingoCard: Array<number>) => {
    let bingoNumbers: Array<BingoNumber> = []
    bingoCard.forEach((number) => { bingoNumbers.push({ 'number': number, called: null }) })
    return bingoNumbers

}

export const markCalledNumbers = (numbersCalled: Array<number>, bingoCard: Array<BingoNumber>) => {

    numbersCalled.forEach((calledNumber) => {
        bingoCard.forEach((bingoNumber) => {
            if (calledNumber === bingoNumber.number) bingoNumber.called = true
        })
    })
    return bingoCard
}

export const checkForBingo = (bingoRowOrColumn: BingoRowOrColumn) => {
    let bingo: boolean = true
    bingoRowOrColumn.forEach((number) => {
        if (number.called !== true) bingo = false
    })

    return bingo
}

