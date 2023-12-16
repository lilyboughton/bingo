import { bingoBoardChecker, multipleBingoBoards } from "./bingo";

describe('Bingo checker', () => {
    describe('bingo board checker', () => {
        it('determines whether or not a single board wins bingo', () => {
            const calledNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
            const winningBoard = [1, 2, 3, 4];
            const losingBoard = [8, 9, 10, 11];

            const winningResult = {
                "win": true,
                "winningNumber": 2
            };

            const losingResult = {
                "win": false,
                "winningNumber": null
            };

            expect(bingoBoardChecker(calledNumbers, winningBoard)).toEqual(winningResult);
            expect(bingoBoardChecker(calledNumbers, losingBoard)).toEqual(losingResult);
        })
    })

    describe('multiple bingo boards', () => {
        it('returns the outcomes of multiple boards being checked', () => {
            const calledNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
            const boardOne = [1, 2, 3, 4];
            const boardTwo = [9, 10, 11, 12];
            const boardThree = [5, 6, 7, 8];

            expect(multipleBingoBoards(calledNumbers, [boardOne, boardTwo, boardThree])).toEqual(`The best board to choose to beat the giant squid is board 3`);

        })

        it('returns specific message if no boards entered would get bingo', () => {
            const calledNumbers = [8, 9, 10, 11, 12, 13, 14, 15, 16];
            const boardOne = [1, 2, 3, 4];
            const boardTwo = [5, 6, 7, 8];

            expect(multipleBingoBoards(calledNumbers, [boardOne, boardTwo])).toEqual('Unlucky - none of those boards got bingo :(');
        })

        it('has the same functionality even if only one board is entered', () => {
            const calledNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
            const winningBoard = [1, 2, 3, 4];
            const losingBoard = [8, 9, 10, 11];

            expect(multipleBingoBoards(calledNumbers, [winningBoard])).toEqual(`The best board to choose to beat the giant squid is board 1`);
            expect(multipleBingoBoards(calledNumbers, [losingBoard])).toEqual('Unlucky - none of those boards got bingo :(');
        })

    })
})