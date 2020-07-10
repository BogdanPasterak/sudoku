const Queue = require("../models/queue");
const Veryfi = require("../functions/veryfication");

module.exports = function(board) {
    const queue = new Queue();
    const veryfi = Veryfi();
    const list = new Array();

    let ans = next(veryfi, board, 0, 0, 1);

    return "now " + ans.x + " " + ans.y;
}

function next(veryfi, board, x, y, v) {
    let ans = empty(board, x, y);
    if (ans) {
        if (x !== ans.x || y !== ans.y) {
            v = 1;
            x = ans.x;
            y = ans.y;
        }
        board[x][y] = v;
        if (veryfi.field(board, x, y)) {;
        } else {
            v++;
            board[x][y] = 0;
            if (v > 9) return false;
        }

        return next(veryfi, board, x, y, v);
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