/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// 使用数组当作哈希表使用: 数组的索引为26个字母的映射值,数组的值默认填充为0表示出现的次数
var canConstruct = function (ransomNote, magazine) {
  let arr = new Array(26).fill(0), base = 'a'.charCodeAt()    // base: 基准定位
  for (let char of magazine) {
    arr[char.charCodeAt() - base]++
  }
  for (let str of ransomNote) {
    let idx = str.charCodeAt() - base;
    if (!arr[idx]) return false;        // 哈希表中找到的值为空,直接返回false
    arr[idx]--        // 哈希表中存在该字符值--
  }
  return true;
};


// 使用对象来当作哈希表使用
var canConstruct = function (ransomNote, magazine) {
  let map = {}
  for (let item of magazine) {
    item in map ? map[item]++ : map[item] = 1;
  }
  for (let char of ransomNote) {
    if (!(char in map)) return false
    map[char]--
  }
  for (let key in map) {
    if (map[key] < 0) return false
  }
  return true;
};
// @lc code=end


