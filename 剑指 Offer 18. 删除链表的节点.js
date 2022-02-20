/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  // val是头节点
  if (head.val === val) {         // 如果目标值为头节点,直接返回头节点的下一节点
    return head.next;
  }

  // val不在头节点
  let pre = head;     // 声明前置指针
  while (pre.next !== null) {         // 只要前置指针的下一节点不是空节点,指针就一直后移
    if (pre.next.val === val) {         // 如果前置指针的下一节点值为目标值
      pre.next = pre.next.next;         // 前置指针指向下下个节点
      return head
    }
    pre = pre.next;
  }
};

/* 
  解法
定义一个虚拟头节点 dummy 指向 head，pre 指针初始指向 dummy。
循环遍历链表，pre 往后移动。当指针 pre.next 指向的节点的值等于 val 时退出循环，将 pre.next 指向 pre.next.next，然后返回 dummy.next。
*/

var deleteNode = function (head, val) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let pre = dummy;
  while (pre.next && pre.next.val != val) {
    pre = pre.next;
  }
  pre.next = pre.next ? pre.next.next : null;
  return dummy.next;
};
