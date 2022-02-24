/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

// https://leetcode-cn.com/problems/valid-parentheses/solution/dai-ma-sui-xiang-lu-dai-ni-gao-ding-zhan-x3xw/
var isValid = function (s) {
  let stack = []
  let map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  for (let str of s) {
    if (str in map) {   // 遇到左括号就入栈
      stack.push(str)
      continue;
    }
    if (map[stack.pop() !== str]) return false
    // 遇到右括号就出栈顶元素查表看其是否匹配
  }
  return !stack.length    // 如果最后栈中还有元素说明没有匹配抵消完
};
// @lc code=end
 