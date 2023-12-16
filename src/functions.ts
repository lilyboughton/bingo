import { BingoNumber, BingoRowOrColumn } from './types';

const singleBingoRow = (start: number, rowLength: number, bingoBoard: Array<BingoNumber>) => {
    let row: BingoRowOrColumn = [];
    for (let i = start; i <= start + rowLength - 1; i++) {
        row.push(bingoBoard[i]);
    };
    return row;
}

export const generateBingoRows = (bingoBoard: Array<BingoNumber>) => {
    let bingoRows: Array<BingoRowOrColumn> = [];
    const rowLength: number = Math.sqrt(bingoBoard.length);
    for (let i = 0; i <= bingoBoard.length - 1; i++) {
        bingoRows.push(singleBingoRow(i, rowLength, bingoBoard));
        i += rowLength - 1;
    };
    return bingoRows;
}

const singleBingoColumn = (start: number, columnLength: number, bingoBoard: Array<BingoNumber>) => {
    let column: BingoRowOrColumn = [];
    for (let i = start; i <= bingoBoard.length - 1; i++) {
        column.push(bingoBoard[i]);
        i += columnLength - 1;
    };
    return column;
}

export const generateBingoColumns = (bingoBoard: Array<BingoNumber>) => {
    let bingoColumns: Array<BingoRowOrColumn> = [];
    const columnLength: number = Math.sqrt(bingoBoard.length);
    for (let i = 0; i <= columnLength - 1; i++) {
        bingoColumns.push(singleBingoColumn(i, columnLength, bingoBoard));
    };
    return bingoColumns;
}

export const generateBingoNumbers = (bingoBoard: Array<number>) => {
    let bingoNumbers: Array<BingoNumber> = [];
    bingoBoard.forEach((number) => { bingoNumbers.push({ 'number': number, called: null }) });
    return bingoNumbers;
}

export const markCalledNumber = (calledNumber: number, bingoBoard: Array<BingoNumber>) => {
    bingoBoard.forEach((bingoNumber) => {
        if (calledNumber === bingoNumber.number) bingoNumber.called = true;
    });
    return bingoBoard;
}

export const checkForBingo = (bingoRowOrColumn: BingoRowOrColumn) => {
    let bingo: boolean = true;
    bingoRowOrColumn.forEach((number) => {
        if (number.called !== true) bingo = false;
    });
    return bingo;
}

