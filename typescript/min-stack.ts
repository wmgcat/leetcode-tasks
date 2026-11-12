class MinStack {
    stack: [ number, number ][];
    constructor() {
        this.stack = [];
    }

    push(value: number): void {
        if (typeof value != "number")
            return;
        this.stack.push([ value, Math.min(value, this.getMin() ?? value) ]);
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1]?.[0];
    }

    getMin(): number {
        return this.stack[this.stack.length - 1]?.[1];
    }
}
