/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 方法一 : 左右指针分别处理字符串
var backspaceCompare = function (s, t) {
  let compare = str => {      // 定义一个比较函数,对字符串进行处理
    let arr = [...str]
    for (let r = 0; r < arr.length; r++) {    // 右指针遍历字符串数组
      if (arr[r] === '#') {         // 右指针扫到"#",左指针就向前找到第一个不是"#"的元素,并改写它为"#"
        let l = r - 1;
        while (arr[l] === '#') {
          l--
        }
        arr[l] = '#'
      }
    }
    return arr.filter(i => i !== '#').join('')    // 过滤掉所有的退格符号,拼接出字符串
  }
  return compare(s) === compare(t)
};

// 栈方法
var backspaceCompare = function (s, t) {
  let filterStr = str => {
    let stack = []
    for (let item of str) {
      item === '#' ? stack.pop() : stack.push(item);    // 遍历字符串,不是"#"入栈,遇到"#"则出栈
    }
    return stack.join('')     // 栈中留下的都是处理好的字符串
  }
  return filterStr(s) === filterStr(t)
};
 
// 方法三: 对字符串进行模拟退格处理
var backspaceCompare = function (s, t) {
  let replStr = str => {
    let res = '', count = 0;
    for (let i = str.length - 1; i >= 0; i--) {     // 从后往前遍历字符串: 三种情况
      if (str[i] === '#') {       // 1. 遇到 "#", 累计出 "#"的个数
        count++
      } else if (count > 0) {     // 2. 不是 "#", 当前存在 "#",减少累计数模拟删除
        count--
      } else {
        res = str[i] + res      // 3. 不是 "#"并且累计数已经清空,将这个元素拼接到结果字符串
      }
    }
    return res      // 返回的结果就是已经模拟出退格处理
  }
  return replStr(s) === replStr(t)
};
console.log(backspaceCompare("a#c", "b"));
// @lc code=end

