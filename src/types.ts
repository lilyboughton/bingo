export type BingoNumber = {
    number: number
    called: boolean | null
}

export type BingoRowOrColumn = Array<BingoNumber>