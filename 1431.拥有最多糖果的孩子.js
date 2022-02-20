/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
let candies = [2, 3, 5, 1, 3], extraCandies = 3;
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map(i => i + extraCandies >= max ? true : false)
};
console.log(kidsWithCandies(candies, extraCandies));
// @lc code=end