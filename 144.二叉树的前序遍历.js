/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {

};

var preorderTraversal = function (root) {
  if (!root) return [];//判空 如果root是空 直接返回空
  let res = [];//存放遍历后结果
  let stack = [];//用到的栈
  stack.push(root)//先将整个root入栈
  while (stack.length) {//当栈为空时 遍历完毕
    let bit = stack.pop()//出栈 这里是指针
    //可以在这里将bit打印出来 更直观
    bit.val ? res.push(bit.val) : ''//判断树的根 入结果数组
    bit.right ? stack.push(bit.right) : ''//判断树的右子树 入栈
    bit.left ? stack.push(bit.left) : ''//判断树的左子树 入栈
  }
  return res
};
// @lc code=end

