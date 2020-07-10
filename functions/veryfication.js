module.exports = function() {

    const f = {
        board: function(boardArr) {
            if (!boardArr || !Array.isArray(boardArr) || !Array.isArray(boardArr[0])) return false;
            let is = true;
            let line = Array(10);

            // check columns
            for (let x = 0; x < 9; x++) {
                line.fill(false);
                for (let y = 0; y < 9; y++) {
                    if (boardArr[x][y]) {
                        if (line[boardArr[x][y]]) {
                            is = false;
                            break;
                        } else {
                            line[boardArr[x][y]] = true;
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
                        if (boardArr[x][y]) {
                            if (line[boardArr[x][y]]) {
                                is = false;
                                break;
                            } else {
                                line[boardArr[x][y]] = true;
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
                        if (boardArr[x][y]) {
                            if (line[boardArr[x][y]]) {
                                is = false;
                                break;
                            } else {
                                line[boardArr[x][y]] = true;
                            }
                        }
                    }
                    if (!is) break;
                }

            }
            return is;
        },
        field: function(boardArr, x, y) {
            if (!boardArr || !Array.isArray(boardArr) || !Array.isArray(boardArr[0])) return false;
            let is = true;
            let line = Array(10);

            line.fill(false);
            for (let yi = 0; yi < 9; yi++) {
                if (boardArr[x][yi]) {
                    if (line[boardArr[x][yi]]) {
                        is = false;
                        break;
                    } else {
                        line[boardArr[x][yi]] = true;
                    }
                }
            }
            if (is) {
                line.fill(false);
                for (let xi = 0; xi < 9; xi++) {
                    if (boardArr[xi][y]) {
                        if (line[boardArr[xi][y]]) {
                            is = false;
                            break;
                        } else {
                            line[boardArr[xi][y]] = true;
                        }
                    }
                }
            }
            if (is) {
                line.fill(false);
                let s = (x / 3 | 0) + (y / 3 | 0) * 3;
                for (let f = 0; f < 9; f++) {
                    x = (s % 3) * 3 + (f % 3);
                    y = (s / 3 | 0) * 3 + (f / 3 | 0);
                    if (boardArr[x][y]) {
                        if (line[boardArr[x][y]]) {
                            is = false;
                            break;
                        } else {
                            line[boardArr[x][y]] = true;
                        }
                    }
                }
            }


            return is;
        }
    }


    return f;
}