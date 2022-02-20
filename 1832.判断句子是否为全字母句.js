/*
 * @lc app=leetcode.cn id=1832 lang=javascript
 *
 * [1832] 判断句子是否为全字母句
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
let sentence = "leetcode";
var checkIfPangram = function (sentence) {
  let res = [];
  for (let i = 97; i <= 122; i++) {       // 遍历字母表
    let str = String.fromCharCode(i);
    if (!sentence.includes(str)) {      // 判断给定的字符中是否包含有字母表的全部
      return false;
    }
  }
  return true;
};
console.log(checkIfPangram(sentence));
// @lc code=end

