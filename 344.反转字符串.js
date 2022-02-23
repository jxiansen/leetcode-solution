/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 直接使用库函数reverse()
var reverseString = function (s) {
  return s.reverse()
};

// 使用双指针从左右两边交换值
var reverseString = function (s) {
  let [l, r] = [-1, s.length]
  while (++l < --r) {         // 不太建议这样写,可读写略差,只是为了简洁
    [s[l], s[r]] = [s[r], s[l]]
  }
  return s
};


console.log(reverseString(["h", "a", "n", "n", "a", "H"]))
// @lc code=end

