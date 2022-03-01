/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 三指针迭代遍历链表
var reverseList = function (head) {
  let pre = null, cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};


// 使用数组存链表反转
var reverseList = function (head) {
  // 如果数组为空直接返回head
  if (!head) {
    return head;
  }

  let arr = [], cur = head;
  while (cur) {
    arr.unshift(cur);
    cur = cur.next;
  }
  // 遍历反转过的数组元素,构造链表
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1];
  }
  arr[arr.length - 1].next = null;   // 单独设置尾节点指向null
  return arr[0];
};


// 递归法,不断的调用自身函数达到不断反转链表的指针和节点
var reverseList = function (head) {
  // 如果数组为空直接返回head
  if (!head || !head.next) {
    return head;
  }
  // 生成新节点,递归调用
  let newNode = reverseList(head.next)
  // 将头节点的下一个指针指向头节点,从而反转
  head.next.next = head;
  // 头节点指向null
  head.next = null;
  return newNode;
};



// @lc code=end



 
