/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 方法一: 遍历第二个数组,插入的位置
var merge = function (nums1, m, nums2, n) {
  nums1.length = m      // 先对数组进行预收缩,防止后面比较时多余的元素干扰
  let idx = 0;      // 初始索引
  for (let i = 0; i < n; i++) {
    let val = nums2[i]
    while (val > nums1[idx]) {      // 找到插入点
      idx++
    }
    nums1.splice(idx, 0, val)     // 插入元素
  }
};

// 方法二: 合并两个数组之后再排序
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i]
  }
  nums1.sort((a, b) => a - b)
};
// @lc code=end

