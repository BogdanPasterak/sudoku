class Board {
    constructor() {
        this.board = Array.from(Array(9), () => new Array(9));
    }
    get board() {
        return this._board;
    }
    set board(value) {
        this._board = value;
    }
    setField(x, y, v) {
        this.board[x][y] = v;
    }
    getField(x, y) {
        return this.board[x][y] || 0;
    }
    clear() {
        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                this._board[x][y] = 0;
            }
        }
    }
    fill(queue, limit) {
        const l = queue.queue.length;
        const max = (limit) ? (limit < l) ? limit : l : l;

        let comment = "";

        for (let i = 0; i < max; i++) {
            const f = queue.queue[i];
            this.board[f.x][f.y] = f.v;
        }
        return comment;
    }
}

module.exports = Board;