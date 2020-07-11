const Queue = require("../models/queue");
const Veryfi = require("../functions/veryfication");
const readline = require('readline');


module.exports = function(board) {
    // const queue = new Queue();
    const veryfi = Veryfi();
    // const list = new Array();

    let ans = next(veryfi, board, 0, 0);

    return ans;
}

function next(veryfi, board, x, y) {

    var query = require('cli-interact').getChar;
    var answer = query('?', 'abcdez\n');
    console.log('you answered:', answer);
    // const ans = askQuestion("Are you sure you want to deploy to PRODUCTION? ");

    // ans.then(a => console.log("A", a));

    let empt = empty(board, x, y);
    if (empt) {
        for (let val = 1; val <= 9; val++) {
            board[empt.x][empt.y] = val;
            if (veryfi.field(board, empt.x, empt.y)) {
                let back = next(veryfi, board, empt.x, empt.y);
                if (!back) {
                    board[empt.x][empt.y] = 0;
                } else {
                    return "Fill !!";
                }
            } else {
                board[empt.x][empt.y] = 0;
            }
        }
        return false;
    } else {
        return "Fill !!";
    }
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

// function askQuestion(query) {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     });

//     return new Promise(resolve => rl.question(query, ans => {
//         rl.close();
//         resolve(ans);
//     }))
// }

// const stdin = process.stdin;
// stdin.setRawMode(true);
// stdin.resume();
// stdin.setEncoding('utf8');
// stdin.on('data', function(key) {
//     // ctrl-c ( end of text )
//     if (key === '\u0003') {
//         process.exit();
//     }
//     // write the key to stdout all normal like
//     process.stdout.write(key);
// });