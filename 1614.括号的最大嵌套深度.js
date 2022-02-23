/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/* 
  栈模拟: 遍历字符,如果遇到左括号则深度加一
         遇到右括号则深度减一
         用max存取栈曾经有过的最大深度
  并不需要真正的栈去处理
*/
var maxDepth = function (s) {
  let dep = 0, max = 0;
  for (let item of s) {
    if (item === '(') dep++
    if (item === ')') dep--
    max = Math.max(dep, max)
  }
  return max;
};
console.log(maxDepth("(1+(2*3)+((8)/4))+1"))
// @lc code=end

