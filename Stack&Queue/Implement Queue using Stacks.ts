class MyQueue {
    private stack1: number[];  // 输入栈 (Input Stack)
    private stack2: number[];  // 输出栈 (Output Stack)

    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(x: number): void {
        this.stack1.push(x);
    }

    pop(): number {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()!);
            }
        }
        return this.stack2.pop()!;
    }

    peek(): number {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()!);
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    empty(): boolean {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}
// 使用两个栈来实现队列
// 一个栈用于存储输入元素（push操作）
// 另一个栈用于存储输出元素（pop操作）
// 当需要进行pop或peek操作时，如果输出栈为空，则将输入栈中的元素依次弹出并压入输出栈，然后从输出栈中弹出或查看栈顶元素
// 这样可以确保队列的先进先出（FIFO）特性

//想象两个纸箱子，一个放东西，一个拿出来，第一个入栈的元素在底部，最后一个入栈的元素在顶部
//元素顺序从底部到顶部依次是：1,2,3,4,5 转换为第二个箱子的顺序是：5,4,3,2,1
