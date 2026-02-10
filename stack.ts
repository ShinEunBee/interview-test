class Stack<T> {
    private items: T[] = [];

    push(value: T) {
        this.items.push(value);
    }

    pop(): T | null {
        let value = this.peek();
        this.items.pop();
        return value;
    }

    peek(): T | null {
        return this.items[this.items.length - 1];
    }

    size(): number {
        if (this.items.length !== 0) return this.items.length;
        return 0;
    }

    isEmpty(): boolean {
        if (this.items.length === 0) return true;
        return false;
    }
}

const s = new Stack();

s.push(1);
s.push(2);
s.push(3);

s.pop();

console.log(s.peek());