/*
 * @lc app=leetcode.cn id=1991 lang=javascript
 *
 * [1991] 找到数组的中间位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  let getSum = arr => arr.reduce((acc, cur) => acc + cur, 0)
  for (let i = 0; i < nums.length; i++) {
    let [left, right] = [getSum(nums.slice(0, i)), getSum(nums.slice(i + 1))]     // 指针左右数组分别求和
    if (left === right) return i      // 左右和相等则返回指针
  }
  return -1       // 未找到返回错误指针
};
// @lc code=end