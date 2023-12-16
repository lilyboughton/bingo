import { bingoBoardChecker, multipleBingoBoards } from "./bingo";

describe('Bingo checker', () => {
    it('determines whether or not a single card wins bingo', () => {
        const calledNumbers = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1];
        const winningBingoCard = [22, 13, 17, 11, 0, 8, 2, 23, 4, 24, 21, 9, 14, 16, 7, 6, 10, 3, 18, 5, 1, 12, 20, 15, 19];
        const losingBingoCard = [31, 13, 17, 11, 0, 8, 27, 23, 4, 24, 21, 9, 28, 16, 7, 6, 10, 3, 29, 5, 1, 12, 20, 15, 30];

        const winningResult = {
            "win": true,
            "winningNumber": 13
        }

        const losingResult = {
            "win": false,
            "winningNumber": null
        }

        expect(bingoBoardChecker(calledNumbers, winningBingoCard)).toEqual(winningResult);
        expect(bingoBoardChecker(calledNumbers, losingBingoCard)).toEqual(losingResult);
    })
    it('returns the outcomes of multiple boards being checked', () => {
        const calledNumbers = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1];
        const boardOne = [22, 13, 17, 11, 0, 8, 2, 23, 4, 24, 21, 9, 14, 16, 7, 6, 10, 3, 18, 5, 1, 12, 20, 15, 19];
        const boardTwo = [31, 13, 17, 11, 0, 8, 27, 23, 4, 24, 21, 9, 28, 16, 7, 6, 10, 3, 29, 5, 1, 12, 20, 15, 30];
        const boardThree = [14, 21, 17, 24, 4, 10, 16, 15, 9, 19, 18, 8, 23, 26, 20, 22, 11, 13, 6, 5, 2, 0, 12, 3, 7];

        expect(multipleBingoBoards(calledNumbers, [boardOne, boardTwo, boardThree])).toEqual(`The best board to choose to beat the giant squid is board 3`);

    })
})