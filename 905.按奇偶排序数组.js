/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 暴力解法
var sortArrayByParity = function (nums) {
  return [...nums.filter(i => i % 2 === 0), ...nums.filter(i => i % 2 === 1)];
};

// 双指针
var sortArrayByParity = function (nums) {
  let [l, r] = [0, nums.length - 1];    // 左右双指针
  while (l <= r) {
    if (nums[l] % 2 === 1 && nums[r] % 2 === 0) {   // 左奇右偶则交换值
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
    };
    if (nums[r] % 2 === 1) r--;     // 左偶右移指针
    if (nums[l] % 2 === 0) l++;     // 右奇左移指针
  }
  return nums
};

// 使用额外数组+双指针
var sortArrayByParity = function (nums) {
  let res = nums.slice();
  let [l, r] = [0, nums.length - 1];
  for (let item of nums) {
    if (item % 2 === 0) {
      res[l] = item;
      l++;
    } else {
      res[r] = item;
      r--;
    }
  }
  return res
};
console.log(sortArrayByParity([3, 1, 2, 4]));
// @lc code=end
