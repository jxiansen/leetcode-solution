/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let obj = {}, set = new Set(), count = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] && obj[s[i]] !== t[i]) return false
    obj[s[i]] = t[i]
  }
  for (let key in obj) {
    count++
    set.add(obj[key])
  }
  if (set.size < count) return false
  return true;
};

// @lc code=end

// 使用字符串方法,判断遍历到的字符串是否与之前出现过的映射规律相同
var isIsomorphic = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false
  }
  return true
};

// 双哈希表法,两个哈希表分别映射
var isIsomorphic = function (s, t) {
  let [S, T, i] = [new Map(), new Map(), -1];
  while (i++ < s.length) {
    let a = s[i], b = t[i];
    if (S.get(a) !== T.get(b)) return false
    S.set(a, i)
    T.set(b, i)
  }
  return true
};