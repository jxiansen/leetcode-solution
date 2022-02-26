/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */

/* 
  定义一个函数cross: 对两个字符串求交集(交集中允许同一字符出现多次)

  举例: 
  第一轮:label    ['r','o','l','l','e','r']  res: 'l'  在数组中找到同是 "l" 的索引,并改写他,防止下次被遍历到
        ↑                  ↑ : 改写为 '*'
  第二轮:label    ['r','o','*','l','e','r']  res: 'l'  找不到 'a' 不用管
         ↑                              
  第三轮:label    ['r','o','*','l','e','r']  res: 'l'  找不到 'b' 不用管
          ↑
  第四轮:label    ['r','o','*','l','e','r']  res: 'le'  找到 'e' 拼接
           ↑                       ↑
  第四轮:label    ['r','o','*','l','*','r']  res: 'lel'  找到了 'l' 拼接
            ↑                  ↑

   只要 words 数组中的长度还大于一,就一直把最前面两个字符串shift出来,用函数处理后push到数组中
  最后的结果就是数组中所有字符串的共用字符了
*/

var commonChars = function (words) {
  var cross = (str1, str2) => {
    let res = '', arr = [...str2];
    for (let char of str1) {
      let idx = arr.findIndex(i => i === char)
      if (idx !== -1) {
        res += char;
        arr[idx] = '*'
      }
    }
    return res
  }
  while (words.length > 1) {
    words.push(cross(words.shift(), words.shift()))
  }
  return [...words[0]]
};
// @lc code=end


 