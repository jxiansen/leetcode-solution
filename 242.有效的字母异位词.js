/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// api法: 对字符串打散了以后按照Asics表排序再拼接判断是否一致
var isAnagram = function (s, t) {
  return [...s].sort().join('') === [...t].sort().join('')
};


// 方法二: 哈希计数
/* 
  遍历第一个字符串,用map统计出每个字符串出现的次数
  遍历第二个字符串,如果遇到map中没有此key,直接返回false,对遍历到的字符串计数--
  如果遍历map,如果map中还有value不为0,说明没有抵消完全,返回false
*/
var isAnagram = function (s, t) {
  let map = {}
  for (let char of s) {
    char in map ? map[char]++ : map[char] = 1;
  }
  for (let item of t) {
    if (!(item in map)) return false
    map[item]--
  }
  for (let key in map) {
    if (map[key] !== 0) return false
  }
  return true
};
// @lc code=end

