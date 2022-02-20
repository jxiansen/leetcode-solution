/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word === word.toUpperCase() || word === word.toLowerCase() || word.length === 1) {
    return true           // 如果单词为全小写或者全大写,或者字符串长度为一,直接返回true;
  }
  let arr = [...word.toLowerCase()];      // 字符串先转小写,分割数组
  arr[0] = arr[0].toUpperCase()       //  修改数组第一项为大写
  let str = arr.join('');       // 拼接数组为字符串
  return str === word ? true : false;
};
console.log(detectCapitalUse('ggg'));
// @lc code=end

