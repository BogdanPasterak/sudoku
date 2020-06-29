// module.exports = function(data) {
//     var functions = {
//         clear: function() {
//             console.clear();
//         }
//     };

//     return functions;
// }

module.exports = function(data) {

    // const board1 = "\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2564\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557"
    // const board2 = "\u2551       \u2502       \u2502       \u2551"
    // const board3 = "\u255f\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2562"
    // const board4 = "\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2567\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d"
    const parts = "\u2554\u2557\u255a\u255d\u2550\u2551\u2564\u2567\u255f\u2562\u2500\u2502\u253c";


    var f = {
        clear: function() {
            console.clear();
            console.log('\33[35C\033[1;34m SUDOKU \033[0m\n');
            // console.log('\n', board1, '\n', board2, '\n', board2, '\n', board2);
            // console.log('\33[1D', board3, '\n', board2, '\n', board2, '\n', board2);
            // console.log('\33[1D', board3, '\n', board2, '\n', board2, '\n', board2);
            // console.log('\33[1D', board4, '\n');

            let s = " ",
                s2;

            for (let y = 0; y < 13; y++) {
                for (let x = 0; x < 25; x++) {
                    if (x && x < 24 && x % 8) { // fields
                        //          first                all              4-th        last
                        s += (!y) ? parts[4] : (y % 4) ? " " : (y < 12) ? parts[10] : parts[4];
                    } else if (x == 24) { // last row
                        s += (!y) ? parts[1] : (y % 4) ? parts[5] : (y < 12) ? parts[9] : parts[3];
                        s += "\33[1B\33[25D"; // next line
                    } else if (!x) { // first row
                        s += (!y) ? parts[0] : (y % 4) ? parts[5] : (y < 12) ? parts[8] : parts[2];
                    } else { // 4-th row
                        s += (!y) ? parts[6] : (y % 4) ? parts[11] : (y < 12) ? parts[12] : parts[7];
                    }
                }
            }
            const next = "\33[13A\33[25C";
            const full = s + next + s + next + s;
            console.log(full);

            // console.log('\033[3A\033[5;35m Bogdan \033[3B\033[8D');
        },
        // setValue: function(x, y, v) {
        //     let s = `\033[${y};${x}H`;
        //     console.log(s);
        // }
        setValue: function(b, x, y, v) {
            let xp = 2 + (b - 1) * 26 + x * 2 + 2 * (x > 3) + 2 * (x > 6);
            let yp = y + 3 + (y > 3) + (y > 6);
            s2 = '\033[' + yp + ';' + xp + 'H' + v.toString() + '\033[16;0H';
            console.log(s2);
        }
    };

    return f;
}