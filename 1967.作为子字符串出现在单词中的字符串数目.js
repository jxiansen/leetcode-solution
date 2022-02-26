/*
 * @lc app=leetcode.cn id=1967 lang=javascript
 *
 * [1967] 作为子字符串出现在单词中的字符串数目
 */

// @lc code=start
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
// reduce遍历数组匹配求和
var numOfStrings = function (patterns, word) {
  return patterns.reduce((acc, cur) => {
    if (new RegExp(cur).test(word)) acc++
    return acc
  }, 0)
};
// filter直接过滤出是子字符串的元素
var numOfStrings = function (patterns, word) {
  return patterns.filter(i => word.includes(i)).length;
};
// @lc code=end

