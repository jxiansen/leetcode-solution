/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

// 直接暴力解法: 遇到0则添加一个0,最后收缩下区间
var duplicateZeros = function (arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      i++
    }
  }
  arr.length = len
};
let arr = [1, 0, 2, 3, 0, 4, 5, 0]
duplicateZeros(arr)
console.log(arr);
// @lc code=end