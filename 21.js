/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(-1);
    let current = new ListNode.next(0);
    console.log(dummy);
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); // [1, 1, 2, 3, 4, 4]