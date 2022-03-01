/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
// 方法一: 转字符串倒序遍历拼接
var thousandSeparator = function (n) {
  let str = n.toString(), res = '';
  for (let i = str.length - 1, count = 0; i >= 0; i--, count++) {
    if (count === 3) {
      res = '.' + res;
      count = 0;
    }
    res = str[i] + res;
  }
  return res;
};
console.log(thousandSeparator(987))
// @lc code=end

// 方法二: 
var thousandSeparator = function (n) {
  return (n).toLocaleString()
};
console.log(thousandSeparator(9345687))