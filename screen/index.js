// module.exports = function(data) {
//     var functions = {
//         clear: function() {
//             console.clear();
//         }
//     };

//     return functions;
// }

module.exports = function(data) {

    const parts = "\u2554\u2557\u255a\u255d\u2550\u2551\u2564\u2567\u255f\u2562\u2500\u2502\u253c";


    var f = {
        clear: function() {
            console.clear();
            console.log('\33[35C\033[1;34m SUDOKU \033[0m\n');

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

        },
        setValue: function(b, x, y, v) {
            let xp = 4 + b * 26 + x * 2 + 2 * (x > 2) + 2 * (x > 5);
            let yp = y + 4 + (y > 2) + (y > 5);
            let vp = (v) ? v.toString() : ' ';
            s2 = '\033[' + yp + ';' + xp + 'H' + vp + '\033[16;0H';
            console.log(s2);
        },
        setBoard: function(b, values) {
            for (let x = 0; x < 9; x++) {
                for (let y = 0; y < 9; y++) {
                    this.setValue(b, x, y, values[x][y]);
                }

            }
        },
        comment: function(str) {
            console.log("\33[1A" + str);
        }
    };

    return f;
}