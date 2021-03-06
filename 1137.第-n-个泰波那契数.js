/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 递归写法: 性能太差
var tribonacci = function (n) {
  if (n === 2 || n === 1) return 1
  if (n === 0) return 0
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
};

// 递推公式1
var tribonacci = function (n) {
  let arr = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }
  return arr[n]
};
console.log(tribonacci(25));
// @lc code=end
