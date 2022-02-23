/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 读写双指针: 读指针向右侧遍历遇到不是目标的元素则左侧的写指针开始复刻并移动指针.
var removeElement = function (nums, val) {
  let len = nums.length;      // 记录下最开始的长度
  for (var l = 0, r = 0; r < len; r++) {
    if (nums[r] !== val) {        // 遇到不是目标元素,左指针开始改写并右移
      nums[l] = nums[r]
      l++
    }
  }
  return l          // 改写完成后左指针的位置就是新数组的长度
};





console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
// @lc code=end



