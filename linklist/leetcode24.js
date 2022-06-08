
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val){
    this.val = val
    this.next = null
}
function buildlist(list){
    let head = new ListNode(0)
    let ptr = head
    for(let i=0;i<list.length;++i){
        let node = new ListNode(list[i]);
        ptr.next = node
        ptr = node
    }
    return head.next
}

function printList(node){
    while(node!==null){
        console.log(node.val)
        node =  node.next
    }
}

var swapPairs = function(head) {
    let myhead = new ListNode(0)
    myhead.next = head
    start = myhead
    while(head!==null && head.next !==null){
        end = head.next.next
        start.next = head.next
        start.next.next = head
        head.next = end
        start = head
        head = start.next
    }
    return myhead.next
};

let mylist = buildlist([1,2,3,4])
l3 = swapPairs(mylist)
printList(l3)