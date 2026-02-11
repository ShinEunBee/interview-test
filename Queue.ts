class Queue<T> {
    private items: T[] = [];
    private head = 0;

    enqueue(value: T) {
        this.items.push(value);
    }

    dequeue(): T | null {
        if (this.items.length < 1 || this.items.length - 1 === this.head) return null;

        let value = this.items[this.head];
        this.head++;

        return value;
    }

    peek(): T | null {
        if (this.items.length < 1 || this.items.length - 1 === this.head) return null;

        return this.items[this.items.length - 1];
    }

    size(): number {
        if (this.items.length > 0 || this.items.length - 1 !== this.head) return this.items.length;

        return 0;
    }

    isEmpty(): boolean {
        if (this.items.length < 1 || this.items.length - 1 === this.head) return true;
        return false;
    }
}