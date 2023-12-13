import { generateBingoRows } from './functions'
describe('bingo checker', () => {
    it('generates the bingo card rows', () => {
        const bingoCard = '22,13,17,11,0,8,2,23,4,24,21,9,14,16,7,6,10,3,18,5,1,12,20,15,19';
        const bingoRows = [[22, 13, 17, 11, 0], [8, 2, 23, 4, 24], [21, 9, 14, 16, 7], [6, 10, 3, 18, 5], [1, 12, 20, 15, 19]];
        expect(generateBingoRows()).toEqual(bingoRows);
    })
})