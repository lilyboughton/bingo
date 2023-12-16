import { generateBingoRows, generateBingoColumns, generateBingoNumbers, markCalledNumber, checkForBingo } from './functions'
describe('bingo checker', () => {
    it('generates the bingo board rows', () => {
        const bingoNumbers = [{ 'number': 1, 'called': null }, { 'number': 2, 'called': null }, { 'number': 3, 'called': null }, { 'number': 4, 'called': null }]
        const bingoRows = [[{ 'number': 1, 'called': null }, { 'number': 2, 'called': null }], [{ 'number': 3, 'called': null }, { 'number': 4, 'called': null }]]
        expect(generateBingoRows(bingoNumbers)).toEqual(bingoRows);
    })

    it('generates the bingo board columns', () => {
        const bingoNumbers = [{ 'number': 1, 'called': null }, { 'number': 2, 'called': null }, { 'number': 3, 'called': null }, { 'number': 4, 'called': null }]
        const bingoColumns = [[{ 'number': 1, 'called': null }, { 'number': 3, 'called': null }], [{ 'number': 2, 'called': null }, { 'number': 4, 'called': null }]]
        expect(generateBingoColumns(bingoNumbers)).toEqual(bingoColumns);
    })

    it('generates an array of bingo numbers given an array of numbers', () => {
        const bingoInput = [1, 2, 3, 4]
        const bingoOutput = [{ 'number': 1, 'called': null }, { 'number': 2, called: null }, { 'number': 3, called: null }, { 'number': 4, called: null }]

        expect(generateBingoNumbers(bingoInput)).toEqual(bingoOutput)
    })

    it('marks off a number when it is called', () => {
        const numberCalled = 3
        const bingoBoard = [{ 'number': 1, 'called': null }, { 'number': 2, called: null }, { 'number': 3, called: null }, { 'number': 4, called: null }]
        const markedBoard = [{ 'number': 1, 'called': null }, { 'number': 2, called: null }, { 'number': 3, called: true }, { 'number': 4, called: null }]

        expect(markCalledNumber(numberCalled, bingoBoard)).toEqual(markedBoard)

    })

    it('checks a row or column for bingo', () => {
        const winningRowOrColumn = [{ 'number': 1, 'called': true }, { 'number': 2, called: true }, { 'number': 3, called: true }, { 'number': 4, called: true }]
        const losingRowOrColumn = [{ 'number': 1, 'called': true }, { 'number': 2, called: true }, { 'number': 3, called: true }, { 'number': 4, called: null }]

        expect(checkForBingo(winningRowOrColumn)).toBe(true)
        expect(checkForBingo(losingRowOrColumn)).toBe(false)
    })
})