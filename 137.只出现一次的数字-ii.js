/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用对象存储次数
var singleNumber = function (nums) {
  let obj = {}, i = 0;
  while (i < nums.length) {
    nums[i] in obj ? obj[nums[i]]++ : obj[nums[i]] = 1;
    i++
  }
  for (let key in obj) {
    if (obj[key] === 1) return key
  }
};

// 先对数组排序,以3为步长向右移动,判断是否出现频次为 1 的数
var singleNumber = function (nums) {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i] !== nums[i + 1]) return nums[i]
  }
};


// 如果这个数只出现过一次,那么他在数组中的index和lastIndex是相同的
var singleNumber = function (nums) {
  for (let item of nums) {
    if (nums.indexOf(item) === nums.lastIndexOf(item)) return item
  }
};



// 数学方法: (去重后的数组乘三求 - 原来数组求和)  /  2
var singleNumber = function (nums) {
  let uniArr = [...new Set(nums)]
  let uniSum = uniArr.reduce((acc, cur) => acc + cur) * 3;
  let sum = nums.reduce((acc, cur) => acc + cur)
  return (uniSum - sum) / 2
};


console.log(singleNumber([2, 2, 3, 2]))
// @lc code=end

