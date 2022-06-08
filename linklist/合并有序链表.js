/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 1->2->4, 1->3->4
 */
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 
let list1 = [1,2,4]
let list2 = [1,3,4]
function buildlist(list){
    let head = new ListNode(0)
    let node = head
    for(let i=0;i<list.length;++i){
        node.next = new ListNode(list[i])
        node = node.next
    }
    return head.next
}
let linklist1 = buildlist(list1)
let linklist2 = buildlist(list2)
let mergeTwoLists = function (l1, l2) {
    let head = new ListNode(0)
    let node = head
    while(l1!==null && l2!=null){
        if(l1.val<=l2.val){
            node.next = l1
            node = node.next
            l1=l1.next
        } else{
            node.next = l2
            node = node.next
            l2 = l2.next
        }
    }
    if(l1!==null){
        node.next = l1
    }
    if(l2!==null){
        node.next = l2
    }
    return head.next
};

function printList(linklist){
    while(linklist!==null){
        console.log(linklist.val)
        linklist = linklist.next
    }
}
let l3 = mergeTwoLists(linklist1,linklist2)
printList(linklist1)