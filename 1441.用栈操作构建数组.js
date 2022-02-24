/*
 * @lc app=leetcode.cn id=1441 lang=javascript
 *
 * [1441] 用栈操作构建数组
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */

var buildArray = function (target, n) {
  let res = [], len = 0;
  for (let i = 1; i <= n; i++) {
    if (target.includes(i)) {
      res.push('Push')
      len++
    } else {
      res.push('Push', 'Pop')
    }
    if (len === target.length) return res     // 当长度和target相等时,直接返回
  }
};
console.log(buildArray([1, 2, 3], 3))
// @lc code=end

