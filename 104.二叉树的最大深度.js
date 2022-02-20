/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0       // 如果根节点不存在,直接返回深度为0
  let dep = 0, queue = [];    // 初始化队列
  queue.push(root)          // 队列入根节点
  while (queue.length) {  // while循环控制遍历深度
    let size = queue.length
    for (let i = 0; i < size; i++) {    // for循环控制每一层的遍历
      let node = queue.shift()          // 让头节点出队
      if (node.left) queue.push(node.left)    // 头节点的左节点存在则入队
      if (node.right) queue.push(node.right)  // 头节点的右节点存在则入队
    }
    dep++       // 深度加一
  }
  return dep
};
// @lc code=end

