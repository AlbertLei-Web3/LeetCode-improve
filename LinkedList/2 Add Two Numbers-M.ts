class ListNode {
    val: number; //value of node
    next: ListNode | null; //pointer to next node

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    //Create a dummy head to simplify the code
    const dummy = new ListNode(0);
    let current = dummy;
    //Carry 进位
    let carry = 0; //let 是声明变量 const 是常量
    
    //Continue while there are nodes in l1 or l2, or there's a carry 这句三个|| 看不懂
    while (l1 !==null || l2 !== null || carry !==0) {
        //Get values of current nodes, use 0 if node is null
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        //Calculate sum and carry
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        //Create new node
        current.next = new ListNode(sum % 10);
        current = current.next;

        //Move pointers
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
}


// ### 题目背景

// 给定两个非负整数，以链表形式表示，每个节点存储一个数字，数字按逆序存储，要求将这两个数字相加并返回结果链表。

// ### 解法概述

// 1. **初始化**：
//    - 创建一个虚拟头节点 `dummy`，用于简化结果链表的构建。
//    - 使用 `current` 指针指向当前结果链表的末尾。
//    - 初始化 `carry` 为 0，用于处理进位。

// 2. **遍历链表**：
//    - 使用 `while` 循环，条件为 `l1`、`l2` 或 `carry` 不为 0：
//      - 获取当前节点的值，若节点为 `null` 则值为 0。
//      - 计算当前位的和 `sum = val1 + val2 + carry`。
//      - 更新进位 `carry = Math.floor(sum / 10)`。
//      - 创建新节点 `current.next = new ListNode(sum % 10)`，并移动 `current` 指针。
//      - 移动 `l1` 和 `l2` 指针。

// 3. **返回结果**：
//    - 返回 `dummy.next`，即结果链表的头节点。

// ### 关键点

// - **时间复杂度**：O(max(m, n))，其中 \(m\) 和 \(n\) 是两个链表的长度。
// - **空间复杂度**：O(max(m, n))，用于存储结果链表。

// 这个方法有效地处理了两个链表表示的数字相加，并考虑了进位的情况。
