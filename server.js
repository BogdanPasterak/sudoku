const Screen = require("./screen");
const Veryfi = require("./functions/veryfication");
const fill = require("./functions/fill");
const Board = require("./models/board");
const brute_force = require("./algorythms/brute-force");


var screen = Screen();
var veryfi = Veryfi();
var br = new Board();
// var ver = veryfi(false);
let x = 7,
    y = 7;

screen.clear();


// br.setField(x, y, 2);
// br.board[x + 1][y + 1] = 3;
let queue = fill(br.board);
br.clear();
let comment = br.fill(queue, 20);
screen.setBoard(1, br.board);

comment = brute_force(br.board);

screen.comment(comment);
// screen.setValue(0, x, y, br.getField(x, y));
screen.setBoard(0, br.board);
// screen.setBoard(2, br.board);



// console.table(br.board);
// console.log(veryfi.field(br.board, x, y));
// console.log(veryfi.board(br.board));
// for (const key in queue) {
//     if (queue.hasOwnProperty(key)) {
//         const element = queue[key];
//         // console.log(key, element);
//     }
// }
// for (const it of queue.queue) {
//     // console.log(it);
// }
// screen.clear();