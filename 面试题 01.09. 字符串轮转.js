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
var isFlipedString = function (s1, s2) {
  return s2.length === s1.length ? s1.repeat(2).includes(s2) : false;
  // 如果两个字符串的长度一样判断s1拼接两次后的字符串中是否包含s2,长度不一样直接返回false
}
console.log(isFlipedString("", ""));