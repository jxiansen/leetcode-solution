/*
 * @lc app=leetcode.cn id=2011 lang=javascript
 *
 * [2011] 执行操作后的变量值
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
// 直接reduce求和就行
var finalValueAfterOperations = function (operations) {
  return operations.reduce((acc, cur) => acc + (/\-/g.test(cur) ? -1 : 1), 0)
};
// @lc code=end