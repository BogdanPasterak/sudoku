module.exports = function(board) {
    if (!board || !Array.isArray(board) || !Array.isArray(board[0])) return false;
    let is = true;
    let line = Array(9);

    // check columns
    for (let x = 0; x < 9; x++) {
        line.fill(false);
        for (let y = 0; y < 9; y++) {
            if (board[x][y]) {
                if (line[board[x][y]]) {
                    is = false;
                    break;
                } else {
                    line[board[x][y]] = true;
                }
            }
        }
        if (!is) break;
    }
    // check rows
    if (is) {
        for (let y = 0; y < 9; y++) {
            line.fill(false);
            for (let x = 0; x < 9; x++) {
                if (board[x][y]) {
                    if (line[board[x][y]]) {
                        is = false;
                        break;
                    } else {
                        line[board[x][y]] = true;
                    }
                }
            }
            if (!is) break;
        }
    }
    // check squers
    let x, y;
    if (is) {
        for (let s = 1; s < 9; s++) {
            line.fill(false);
            for (let f = 0; f < 9; f++) {
                x = (s % 3) * 3 + (f % 3);
                y = (s / 3 | 0) * 3 + (f / 3 | 0);
                if (board[x][y]) {
                    if (line[board[x][y]]) {
                        is = false;
                        break;
                    } else {
                        line[board[x][y]] = true;
                    }
                }
            }
            if (!is) break;
        }
    }

    return is;
}