import { bingo } from "./bingo";

describe('Bingo checker', () => {
    it('determines whether or not a card wins bingo', () => {
        const calledNumbers = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1]
        const winningBingoCard = [22, 13, 17, 11, 0, 8, 2, 23, 4, 24, 21, 9, 14, 16, 7, 6, 10, 3, 18, 5, 1, 12, 20, 15, 19];
        const losingBingoCard = [31, 13, 17, 11, 0, 8, 27, 23, 4, 24, 21, 9, 28, 16, 7, 6, 10, 3, 29, 5, 1, 12, 20, 15, 30];

        expect(bingo(calledNumbers, winningBingoCard)).toEqual('Congratulations! You won! It only took 13 numbers to be called!')
        expect(bingo(calledNumbers, losingBingoCard)).toEqual('Better luck next time!')
    })
})