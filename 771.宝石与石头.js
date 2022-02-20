/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
let jewels = "aA", stones = "aAAbbbb";
// 方法一: 直接使用数组过滤
var numJewelsInStones = function (jewels, stones) {
  return [...stones].filter(i => jewels.includes(i)).length
};

// 方法二: 双重循环遍历出两边值相等的计数
var numJewelsInStones = function (jewels, stones) {
  let count = 0
  for (let item of jewels) {    
    for (let val of stones) {
      if (item === val) {
        count++;
      }
    }
  }
  return count;
};

// 用哈希表来存取宝石的类型,遍历字符串累计数
var numJewelsInStones = function (jewels, stones) {
  let set = new Set(), count = 0;
  for (let item of jewels) {
    set.add(item)
  }
  for (let i of stones) {
    if (set.has(i)) {
      count++
    }
  }
  return count;
};
console.log(numJewelsInStones(jewels, stones));
// @lc code=end

