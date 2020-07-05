class Queue {
    constructor() {
        this.queue = Array();
    }
    get queue() {
        return this._queue;
    }
    set queue(value) {
        this._queue = value;
    }
    push(next) {
        this._queue.push(next);
    }
    pop() {
        return this._queue.pop();
    }
}

module.exports = Queue;