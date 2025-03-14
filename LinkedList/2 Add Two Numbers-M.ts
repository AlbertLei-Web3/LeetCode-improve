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

