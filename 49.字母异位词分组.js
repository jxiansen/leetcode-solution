/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let res = [], map = {};
  // 对所有单词进行排序
  let arr = strs.map(i => [...i].sort().join(''))
  // 表中添加所有相同单词出现的索引
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    item in map ? map[item].push(i) : map[item] = [i]
  }
  // 遍历表中的索引,依据索引找到原字符串添加到结果中
  for (let key in map) {
    res.push(map[key].map(idx => strs[idx]))
  }
  return res
};
console.log(groupAnagrams(["a"]))
// @lc code=end







