/*
 * @lc app=leetcode.cn id=1844 lang=javascript
 *
 * [1844] 将所有数字用字符替换
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let shift = (str, num) => String.fromCharCode(str.charCodeAt() + +num);
  return [...s].map((cur, idx, arr) => /\d/.test(cur) ? shift(arr[idx - 1], cur) : cur).join('')
};
console.log(replaceDigits("a1c1e1"))
// @lc code=end