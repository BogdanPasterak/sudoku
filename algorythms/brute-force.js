const Queue = require("../models/queue");
const Veryfi = require("../functions/veryfication");

module.exports = function(board) {
    const queue = new Queue();
    const veryfi = Veryfi();
    const list = new Array();

    let ans = next(board, 0, 0);

    return "now " + ans.x + " " + ans.y;
}

function next(board, x, y) {
    let ans = empty(board, x, y);
    if (ans) {
        x = ans.x;
        y = ans.y;
        board[x][y] = 1;

        next(board, x, y);
        return { x, y };
    }
    return false;
}

function empty(board, x, y) {
    do {
        if (!board[x][y]) {
            return { x, y };
        }
        x++;
        if (x == 9) {
            x = 0;
            y++;
        }
    } while (y < 9);
    return false;
}