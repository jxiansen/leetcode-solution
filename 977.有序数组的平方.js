/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 双指针法
var sortedSquares = function (nums) {
  let [l, r, res] = [0, nums.length - 1, []];     // 分别声明左右指针和存放结果数组
  while (l <= r) {      // 左右双指针,依次添加元素到结果中
    if (Math.abs(nums[r]) >= Math.abs(nums[l])) {
      res.push(nums[r] ** 2)
      r--       // 分别移动指针
    } else {
      res.push(nums[l] ** 2)
      l++
    }
  }
  return res.reverse();
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));

// 直接使用暴力解法,先map后sort
var sortedSquares = function (nums) {
  return nums.map(i => i ** 2).sort((a, b) => a - b);
};
// @lc code=end
