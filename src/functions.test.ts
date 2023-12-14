import { generateBingoRows, generateBingoColumns, generateBingoNumbers, markCalledNumber, checkForBingo } from './functions'
describe('bingo checker', () => {
    it('generates the bingo card rows', () => {
        const bingoNumbers = [{ 'number': 22, 'called': null }, { 'number': 13, 'called': null }, { 'number': 17, 'called': null }, { 'number': 11, 'called': null }]
        const bingoRows = [[{ 'number': 22, 'called': null }, { 'number': 13, 'called': null }], [{ 'number': 17, 'called': null }, { 'number': 11, 'called': null }]]
        expect(generateBingoRows(bingoNumbers)).toEqual(bingoRows);
    })

    it('generates the bingo card columns', () => {
        const bingoNumbers = [{ 'number': 22, 'called': null }, { 'number': 13, 'called': null }, { 'number': 17, 'called': null }, { 'number': 11, 'called': null }]
        const bingoColumns = [[{ 'number': 22, 'called': null }, { 'number': 17, 'called': null }], [{ 'number': 13, 'called': null }, { 'number': 11, 'called': null }]]
        expect(generateBingoColumns(bingoNumbers)).toEqual(bingoColumns);
    })

    it('generates an array of bingo numbers given an array of numbers', () => {
        const bingoInput = [1, 3, 5, 7, 9]
        const bingoOutput = [{ 'number': 1, 'called': null }, { 'number': 3, called: null }, { 'number': 5, called: null }, { 'number': 7, called: null }, { 'number': 9, called: null }]

        expect(generateBingoNumbers(bingoInput)).toEqual(bingoOutput)
    })

    it('marks off a number when it is called', () => {
        const numbersCalled = 5
        const bingoCard = [{ 'number': 1, 'called': null }, { 'number': 3, called: null }, { 'number': 5, called: null }, { 'number': 7, called: null }, { 'number': 9, called: null }]
        const markedCard = [{ 'number': 1, 'called': null }, { 'number': 3, called: null }, { 'number': 5, called: true }, { 'number': 7, called: null }, { 'number': 9, called: null }]

        expect(markCalledNumber(numbersCalled, bingoCard)).toEqual(markedCard)

    })

    it('checks a row or column for bingo', () => {
        const winningRowOrColumn = [{ 'number': 1, 'called': true }, { 'number': 3, called: true }, { 'number': 5, called: true }, { 'number': 7, called: true }, { 'number': 9, called: true }]
        const losingRowOrColumn = [{ 'number': 1, 'called': true }, { 'number': 3, called: true }, { 'number': 5, called: true }, { 'number': 7, called: null }, { 'number': 9, called: null }]

        expect(checkForBingo(winningRowOrColumn)).toBe(true)
        expect(checkForBingo(losingRowOrColumn)).toBe(false)
    })
})