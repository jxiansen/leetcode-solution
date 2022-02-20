/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  return s.length === goal.length && s.repeat(2).includes(goal);
  // 当两个字符串长度一样并且第一个字符串首尾拼接的字符串中包含第二个字符串都满足的时候返回true
};
console.log(rotateString("abcde", "abced"));
// @lc code=end

