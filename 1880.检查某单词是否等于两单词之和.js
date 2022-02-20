/*
 * @lc app=leetcode.cn id=1880 lang=javascript
 *
 * [1880] 检查某单词是否等于两单词之和
 */

// @lc code=start
/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
let firstWord = "aaa", secondWord = "a", targetWord = "aaaa";
var isSumEqual = function (firstWord, secondWord, targetWord) {
  let getNum = str => Number([...str].map(i => i.charCodeAt() - 97).join(''));
  return getNum(firstWord) + getNum(secondWord) === getNum(targetWord);
};
console.log(isSumEqual(firstWord, secondWord, targetWord));
// @lc code=end