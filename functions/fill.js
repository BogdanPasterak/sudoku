const Veryfi = require("../functions/veryfication");
const Queue = require("../models/queue");

module.exports = function(board) {
    let x, y, v, f, ok, max = 0;
    const veryfi = Veryfi();
    let comment = "Bogdan";
    let queue = new Queue();

    let fields = Array.from(Array(81).keys());
    let values = Array.from(Array(81).keys()).map(x => (x % 9) + 1);

    for (let i = 0; i < 71; i++) {

        do {
            ok = false;
            // random place from avaliable
            f = fields.splice(Math.random() * fields.length | 0, 1)[0];
            x = f % 9;
            y = f / 9 | 0;

            // random value from avaliable
            v = values.splice(Math.random() * values.length | 0, 1)[0];
            board[x][y] = v;

            if (!veryfi.field(board, x, y)) {
                board[x][y] = 0;
                fields.push(f);
                values.push(v);
                ok = true;
                // unverified
                max++;
                // comment = "x = " + x + "  y = " + y + "  v = " + v + "  i = " + i + "  max = " + max;
                if (max > 500) break;
            } else {
                queue.push({ x, y, v });
                // comment = "x = " + queue.queue[0].x + "  y = " + queue.queue[0].y + "  v = " + queue.queue[0].v;
            }
        } while (ok);
        if (max > 500) break;
    }
    // console.log("\033[1A" + comment);
    return queue;

};