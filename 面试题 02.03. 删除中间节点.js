/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
  // 给定的是要删除的目标节点,不是head节点,所以无需从头开始遍历
  // 要删除的节点的下一节点的值给当前节点,并指向下下节点,当前节点会被自动回收掉
};