class MyListNode {
    val: number; //value of node
    next: ListNode | null; //pointer to next node

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val); // 三元运算符 true ? 0 : val 如果val为undefined，则赋值为0，否则赋值为val，口诀：三元运算true1，false2
        this.next = (next === undefined ? null : next); // 如果next为undefined，则赋值为null，否则赋值为next
    }
}
// 1 -> 2 -> 3 -> 4 -> 5
//Create a linked list
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

//Traversing a linked list
function printList(head: ListNode | null): void {
    let current = head;
    while (current !== null){
        console.log(current.val);
        current = current.next;
    }
}

//Inserting a new node
//Insert at the beginning of the list
function insertAtBeginning(head: ListNode | null, val: number): ListNode {
    let newNode = new ListNode(val);
    newNode.next = head;
    return newNode;
}
//Insert at the end of the list
function insertAtEnd(head: ListNode | null, val: number): ListNode {
    let newNode = new ListNode(val);

    if (head === null) {
        return newNode;
    }

    let current = head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;
    return head;

}

//Deleting a node
function deleteNode(head: ListNode | null, val: number): ListNode | null {
    if (head === null) return null;

    //If head node is the one to be deleted
    if (head.val === val) {
        return head.next;
    }

    //Traverse the list to find the node to be deleted
    let current = head;
    while (current.next !== null) {
        if (current.next.val === val) {
            current.next = current.next.next;
            break;
        }
        current = current.next;
    }
    return head;
}

//Practical Example
let list: MyListNode | null = new MyListNode(1, new MyListNode(2, new MyListNode(3, new MyListNode(4))));

console.log("Original list:");
printList(list); // 1 2 3 4

//Insert at the beginning
list = insertAtBeginning(list, 0);
console.log("After inserting at the beginning:");
printList(list); // 0 1 2 3 4

//Insert at the end
list = insertAtEnd(list, 5);
console.log("After inserting at the end:");
printList(list); // 0 1 2 3 4 5

//Delete a node
list = deleteNode(list, 3);
console.log("After deleting node 3:");
printList(list); // 0 1 2 4 5





