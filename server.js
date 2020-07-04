const Screen = require("./screen");
const Veryfi = require("./functions/veryfication");
const fill = require("./functions/fill");
const Board = require("./models/board");

var screen = Screen();
var veryfi = Veryfi();
var br = new Board();
// var ver = veryfi(false);
let x = 7,
    y = 7;

screen.clear();


// br.setField(x, y, 2);
// br.board[x + 1][y + 1] = 3;
fill(br.board);
// screen.setValue(0, x, y, br.getField(x, y));
screen.setBoard(0, br.board);
// console.table(br.board);
// console.log(veryfi.field(br.board, x, y));
// console.log(veryfi.board(br.board));