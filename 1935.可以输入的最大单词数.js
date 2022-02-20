/*
 * @lc app=leetcode.cn id=1935 lang=javascript
 *
 * [1935] 可以输入的最大单词数
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
let text = "leet code", brokenLetters = "lt";
var canBeTypedWords = function (text, brokenLetters) {
  let arr = text.split(' '), count = 0;
  for (let i of arr) {    // 遍历目标单词
    for (let j of i) {    // 遍历每个目标单词中的字母
      if (brokenLetters.includes(j)) {    // 累计出遍历的字母中有损坏的单词
        count++;
        break;      // 遇到有损坏的单词后面的单词也不需要遍历了,直接break
      }
    }
  }           // count 是已经损坏的单词
  return arr.length - count   // 返回去掉损坏单词的所有单词数
};
console.log(canBeTypedWords(text, brokenLetters))
// @lc code=end

