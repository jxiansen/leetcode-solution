/*
 * @lc app=leetcode.cn id=1417 lang=javascript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let str = s.replace(/\d/g, '');       // 正则表达式处理得到字符串和数字分组
  let num = s.replace(/[a-z]/g, '');
  if (Math.abs(str.length - num.length) > 1) return '';     // 字符差的数量大于1直接返回空字符
  function strSplit(str1, str2) {         // 拼接两个不等长字符串函数: 默认 str1.length >= str2.length
    let res = ''
    for (let i = 0; i < str1.length; i++) {
      res += str2[i] === undefined ? str1[i] + '' : str1[i] + str2[i];      //遍历到最后,str2因为长度较短,所以访问不到str2[i],手动拼接一个空字符串
    }
    return res
  }
  return str.length >= num.length ? strSplit(str, num) : strSplit(num, str);
};

/* 
* 使用正则表达式处理得到字符串和数字串
* 如果两串长度之差大于1,直接返回空串
* 定义一个函数: 函数传两个字符串参数,对传入的字符串进行拼接,默认str1.length >= str2.length,因为str2的长度短,对于访问不到的值拼接空字符串
* 依据字符串和数字串长度进行判断返回

*/

console.log(reformat("1229857369"))
// @lc code=end






