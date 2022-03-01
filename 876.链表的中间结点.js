/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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

//方法一: 遍历求出链表的长度并计算出他中间节点的位置
var middleNode = function (head) {
  let cur = head, count = 0;
  while (cur) {
    count++
    cur = cur.next
  }
  count = count % 2 === 0 ? count / 2 + 1 : Math.ceil(count / 2);
  cur = head;
  while (count - 1) {
    cur = cur.next;
    count--
  }
  return cur
};
// @lc code=end

// 用数组存取
var middleNode = function (head) {
  let list = [], cur = head;
  while (cur) {
    list.push(cur)
    cur = cur.next;
  }
  let idx = Math.trunc(list.length / 2) // 因为数组的索引是比少一的,使用trunc分割正好满足要求
  return list[idx]
};


// 快慢指针
var middleNode = function (head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;       // 慢指针每次移动一步
    fast = fast.next.next   // 快指针每次移动两步
  }
  return slow     // 最后慢指针的位置就是中点
};

/* 

慢指针:              ↓            
let arr = [1, 2, 3, 4, 5, 6]
快指针:                 ↑

*/