/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stack = [], oper = {
    'C': st => st.pop(),
    'D': st => st.push(st[st.length - 1] * 2),
    '+': st => st.push(+st[st.length - 1] + +st[st.length - 2])
  }
  for (let item of ops) {
    item in oper ? oper[item](stack) : stack.push(+item);
  }
  return stack.reduce((sum, cur) => sum + cur, 0)
};
// @lc code=end
