/*
 * @lc app=leetcode.cn id=1281 lang=javascript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let n = 234;
var subtractProductAndSum = function (n) {
  let arr = [...n.toString()].map(i => parseInt(i));
  let Power = arr.reduce((acc, cur) => acc * cur, 1);
  let sum = arr.reduce((acc, cur) => acc + cur);
  return Power - sum;
};


// 方法二
var subtractProductAndSum = function (n) {
  let Power = 1, sum = 0;
  for (let item of n.toString()) {
    sum += Number(item);
    Power *= Number(item);
  }
  return Power - sum;
};
console.log(subtractProductAndSum(n));
// @lc code=end

