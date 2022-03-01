/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function (head) {
  if (!head) return head
  // 判断为空情况
  let list = [], cur = head;
  // 遍历添加值到数组中
  while (cur) {
    list.push(cur.val)
    cur = cur.next;
  }
  // 排序
  list.sort((a, b) => a - b)
  // 最排序的数组返回节点
  list = list.map(i => new ListNode(i, null))
  // 连接节点
  list.reduce((acc, cur) => acc.next = cur)
  return list[0]
};
// @lc code=end