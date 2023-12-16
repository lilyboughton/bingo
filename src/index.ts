import { bingoBoardChecker, multipleBingoBoards } from "./bingo";
import * as taskOneData from "../bingoBoards/singleBingoBoard.json"
import * as taskTwoData from "../bingoBoards/multipleBingoBoards.json";

const taskOne = bingoBoardChecker(taskOneData.calledNumbers, taskOneData.bingoBoard);
const taskTwo = multipleBingoBoards(taskTwoData.calledNumbers, [taskTwoData.boardOne, taskTwoData.boardTwo, taskTwoData.boardThree]);

console.log(`Task one: It is ${taskOne.win} that this board would beat the giant squid`);
console.log(`Task two: ${taskTwo}`);