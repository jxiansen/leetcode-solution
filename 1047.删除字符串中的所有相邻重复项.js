/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = []
  for (let str of s) {
    if (stack.length && str === stack[stack.length - 1]) {
      stack.pop()     // 如果栈不为空,且将要遍历到的字符串等于栈顶元素,直接pop
    } else {
      stack.push(str)
    }
  }
  return stack.join('')
};


console.log(removeDuplicates("abbaca"))
// @lc code=end
