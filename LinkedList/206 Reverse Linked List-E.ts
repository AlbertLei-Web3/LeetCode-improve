//Iterative Solution
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next) 
    }
}

// 迭代解法 | Iterative Solution
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null; 
    let curr: ListNode | null = head; 

    while (curr !== null) {
        let next: ListNode | null = curr.next; //Save the next node
        curr.next = prev; //Reverse pointer
        prev = curr;
        curr = next;
    }
    return prev;
}

// 递归解法 | Recursive Solution
function reverseList1(head: ListNode | null): ListNode | null {
    // 基本情况：空链表或只有一个节点 
    // Base case: empty list or single node
    if (head === null || head.next === null) {
        return head;
    }
    
    // 递归反转剩余部分 
    // Recursively reverse the rest
    const newHead = reverseList(head.next);
    
    // 改变指针方向 
    // Change pointer direction
    head.next.next = head;
    head.next = null;
    
    return newHead;
}

// 反转链表解法概括
// 初始化指针：
// prev 指向 null（前一个节点）。
// curr 指向链表头（当前节点）。
// 遍历链表：
// 使用 while (curr !== null) 循环：
// 保存下一个节点 next = curr.next。
// 反转指针 curr.next = prev。
// 更新指针 prev = curr 和 curr = next。
// 返回新头节点：
// 当 curr 为 null 时，返回 prev（新的头节点）。