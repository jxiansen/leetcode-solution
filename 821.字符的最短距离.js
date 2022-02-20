/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
let s = "aaab", c = "b";
// 中心扩展法: 最符合直觉
var shortestToChar = function (s, c) {
  let res = []
  for (let i = 0; i < s.length; i++) {    // 遍历字符串
    let step = 0        // 步长: 用来累计距离
    for (; step < Infinity; step++) {     // 对遍历到的字符串分别从左右扩展寻找目标元素
      if (s[i + step] === c || s[i - step] === c) break     // 找到目标元素则跳出循环
    }
    res[i] = step
  }
  return res
};
console.log(shortestToChar(s, c));
// @lc code=end
