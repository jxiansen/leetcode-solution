/*
 * @lc app=leetcode.cn id=1544 lang=javascript
 *
 * [1544] 整理字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 函数用来判断栈顶字符和当前字符是否大小写是否相异
// 如果栈中有元素并且大小写不匹配就出栈顶, 否则就入栈
var makeGood = function (s) {
  var stack = []
  // 判断栈顶字符和当前字符是否大小写相异
  let isMatch = char => Math.abs(char.charCodeAt() - (stack[stack.length - 1]).charCodeAt()) === 32;
  for (let str of s) {
    stack.length && isMatch(str) ? stack.pop() : stack.push(str);
  }
  return stack.join('')
};

console.log(makeGood("abBAcC"))
// @lc code=end