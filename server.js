// var http = require('http');

// var handleReguest = function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end("Witaj bogdan\n");
// };

// var server = http.createServer(handleReguest);
// const port = process.env.PORT || 3000;

// server.listen(port, 'localhost');

const screen = require("./screen");
const veryfi = require("./functions/veryfication");
const Board = require("./models/board");

var scr = screen();
var br = new Board();
// var ver = veryfi(false);
let x = 8,
    y = 4;

scr.clear();


br.setField(x, y, 2);

br.board[x][y] = 3;
// scr.setValue(1, x, y, br.getField(x, y));
scr.setBoard(1, br.board);
// console.table(br.board);
console.log(veryfi(br.board));