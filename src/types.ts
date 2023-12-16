export type BingoNumber = {
    number: number
    called: boolean | null
}

export type BingoRowOrColumn = Array<BingoNumber>

export type BingoResult = {
    "board": number
    "win": boolean
    "winningNumber": number | null
}