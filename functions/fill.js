const Veryfi = require("../functions/veryfication");

module.exports = function(board) {
    let x, y, v, f, ok, max = 0;
    const veryfi = Veryfi();
    let comment = "Bogdan";

    let fields = Array.from(Array(81).keys());
    let values = Array(9);
    values.fill(9);

    for (let i = 0; i < 50; i++) {

        do {
            ok = true;
            // do {
            //     f = rnd81();
            //     if (fields[f] === false) {
            //         fields[f] = true;
            //         ok = true;
            //     }
            // } while (!ok); // ok true
            f = fields.splice(Math.random() * fields.length | 0, 1)[0];
            x = f % 9;
            y = f / 9 | 0;

            do {
                v = Math.random() * 9 | 0;
                if (values[v]) {
                    values[v]--;
                    ok = false;
                }
            } while (ok); // ok false
            board[x][y] = v + 1;

            if (!veryfi.field(board, x, y)) {
                board[x][y] = 0;
                fields.push(f);
                ok = true;
                // unverified
                max++;
                // if (comment == "Bogdan")
                comment = "x = " + x + "  y = " + y + "  v = " + (v + 1) + "  i = " + i + "  max = " + max;
            } else {
                // comment = "x = " + x + "   y = " + y +;
                // break;
                // max--;
                // if (max < 0) {
                //     comment = "x = " + x + "   y = " + y;
                //     ok = true;
                // }
            }
        } while (ok);

    }
    console.log("\033[1A" + comment);

};