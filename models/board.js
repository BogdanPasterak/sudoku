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
        this.board[x - 1][y - 1] = v;
    }
    getField(x, y) {
        return this.board[x - 1][y - 1] || 0;
    }
}

module.exports = Board;