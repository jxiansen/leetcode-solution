/*
 * @lc app=leetcode.cn id=1941 lang=javascript
 *
 * [1941] 检查是否所有字符出现次数相同
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
*/
let s = "abacbc";
var areOccurrencesEqual = function(s) {
  let obj = {}, arr = [];
  for (let item of s) {
    item in obj ? obj[item]++ : obj[item] = 1;    // 对象用来存储每个字符出现的次数
  }
  for (let key in obj) {
    arr.push(obj[key])      // 数组存放所有的次数
  }
  return [...new Set(arr)].length === 1;    // 使用set对数组去重,如果去重后的长度为一说明每个字符都出现相同的次数
};
console.log(areOccurrencesEqual(s));
// @lc code=end


