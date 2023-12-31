import { BingoNumber, BingoResult, BingoRowOrColumn } from "./types";
import { generateBingoNumbers, markCalledNumber, generateBingoRows, checkForBingo, generateBingoColumns } from "./functions";

export const bingoBoardChecker = (calledNumbers: Array<number>, bingoBoard: Array<number>) => {
    const generatedBingoBoard: Array<BingoNumber> = generateBingoNumbers(bingoBoard);
    let markedBingoBoard = generatedBingoBoard;
    let isBingo: boolean = false;
    let winningNumber: Array<number> = [];

    calledNumbers.forEach((calledNumber, index) => {
        markedBingoBoard = markCalledNumber(calledNumber, markedBingoBoard);

        // only check for bingo once enough numbers have been called
        if (index >= Math.sqrt(generatedBingoBoard.length)) {

            const bingoBoardRows: Array<BingoRowOrColumn> = generateBingoRows(markedBingoBoard);
            bingoBoardRows.forEach((row) => {
                if (checkForBingo(row) === true) {
                    isBingo = true;
                    winningNumber.push(index);
                }
            });

            const bingoBoardColumns: Array<BingoRowOrColumn> = generateBingoColumns(markedBingoBoard);
            bingoBoardColumns.forEach((column) => {
                if (checkForBingo(column) === true) {
                    isBingo = true;
                    winningNumber.push(index);
                }
            });
        }
    })


    if (isBingo === false) {
        return {
            "win": false,
            "winningNumber": null
        };
    } else {
        return {
            "win": true,
            "winningNumber": winningNumber[0]
        };
    }
}

export const multipleBingoBoards = (calledNumbers: Array<number>, boards: Array<Array<number>>) => {
    let results: Array<BingoResult> = [];

    boards.forEach((board, index) => {
        const boardBingo = bingoBoardChecker(calledNumbers, board);

        const boardResult = {
            "board": index + 1,
            "win": boardBingo.win,
            "winningNumber": boardBingo.winningNumber
        };
        results.push(boardResult);
    })

    let bestBoard = {
        "board": null,
        "winningNumber": null
    };

    results.forEach((result) => {
        if (bestBoard.winningNumber === null) {
            bestBoard.board = result.board;
            bestBoard.winningNumber = result.winningNumber;
        } else if (bestBoard.winningNumber > result.winningNumber) {
            bestBoard.board = result.board;
            bestBoard.winningNumber = result.winningNumber;
        }

    })

    const resultString: string = bestBoard.winningNumber === null ? 'Unlucky - none of those boards got bingo :(' : `The best board to choose to beat the giant squid is board ${bestBoard.board}`;

    return resultString;
}