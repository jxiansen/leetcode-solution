
/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let isWord = str => str.toLowerCase() !== str.toUpperCase()
  let arr = [...s].filter(i => isWord(i)).reverse(), res = '';      // 过滤出字母数组并反转
  for (let item of s) {       // 遍历字符串,拼接反转过后的数组元素
    res += isWord(item) ? arr.shift() : item;
  }
  return res
};


// 双指针从左右位置分别开始遍历,交换左右指针的值
var reverseOnlyLetters = function (s) {
  let isWord = str => str.toLowerCase() !== str.toUpperCase()   // 判断是否为字母
  let arr = [...s], l = 0, r = arr.length - 1;
  while (l < r) {
    if (!isWord(arr[l])) l++;       // 指针遇到非字母左移或者右移
    if (!isWord(arr[r])) r--;
    if (isWord(arr[l]) && isWord(arr[r])) {     // 左右指针都为字母,则交换值
      let tmp = arr[l];
      arr[l] = arr[r];
      arr[r] = tmp;
      l++
      r--
    }
  }
  return arr.join('')         // 拼接数组为字符串
};
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
// @lc code=end

