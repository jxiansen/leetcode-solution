/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 直接使用库函数
var reverseWords = function (s) {
  return s.trim().split(/\s+/g).reverse().join(' ')
};


// 双指针法: O(1) 额外空间复杂度的原地解法
/* 
  1. 先对字符串转成可操作的数组并翻转
  2. 对字符串中的每个单词翻转
  3. 去除多余的空格和首尾的空格

  举个例子，源字符串为："the sky is blue "
    移除多余空格 : "the sky is blue"
    字符串反转："eulb si yks eht"
    单词反转："blue is sky the"
*/
var reverseWords = function (s) {
  var arr = [...s];
  var l = 0, r = arr.length - 1;

  // 翻转字符串
  function reverseStr(i, j) {
    let [l, r] = [i, j]
    while (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]]
      l++
      r--
    }
  }

  // 翻转字符串中的单词
  function reverseWord() {
    let l = 0, r = 0;
    while (r < arr.length) {
      while (arr[r] === ' ') {
        r++
      }
      l = r
      while (arr[r] !== ' ' && arr[r]) {
        r++
      }
      reverseStr(l, r - 1)
    }
  }

  // 移除多余空格
  function removeSpace() {
    let [slow, fast] = [0, 0];
    while (fast < arr.length) {
      // 跳过首位和中间超过一的的空格
      if (arr[fast] === ' ' && (fast === 0 || arr[fast - 1] === ' ')) {
        fast++
      } else {
        arr[slow++] = arr[fast++]
      }
    }
    // 去除尾部的多余空格; 慢指针有可能在最后一个元素后面第一个或者第二个,所以需要判断
    arr.length = arr[slow - 1] === ' ' ? slow - 1 : slow;
  }

  reverseStr(l, r)
  reverseWord(arr)
  removeSpace(arr)
  return arr.join('')
};
// @lc code=end

