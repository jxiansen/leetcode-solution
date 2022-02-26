/*
 * @lc app=leetcode.cn id=2161 lang=javascript
 *
 * [2161] 根据给定数字划分数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let left = [], middle = [], right = [];
  for (let num of nums) {
    if (num < pivot) left.push(num)
    if (num > pivot) right.push(num)
    if (num === pivot) middle.push(num)
  }
  return [...left, ...middle, ...right];
};
console.log(pivotArray([-3, 4, 3, 2], 2))
// @lc code=end

