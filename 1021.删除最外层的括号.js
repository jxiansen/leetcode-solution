/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 计数法: 遇到左括号，我们的计数器 +1+1+1，遇到右括号，我们的计数器 −1-1−1。
// https://leetcode-cn.com/problems/remove-outermost-parentheses/solution/ji-shu-fa-shan-chu-zui-wai-ceng-de-gua-h-55id/
var removeOuterParentheses = function (s) {
  let res = '', count = 0;
  for (let str of s) {
    if (str === '(' && count++ > 0) res += str
    if (str === ')' && count-- > 1) res += str
  }
  return res
};
// @lc code=end



// 使用辅助栈来存取元素
/* 
想象栈是一个薯片桶,我一直往里放薯片,薯片"有正有负",相邻的正负碰到一起就会"抵消"
只要薯片桶底部还有薯片就用空字符串拼接纪录从倒数第二个开始的薯片出场顺序
当要新加的薯片可以"抵消"掉最底层的薯片时,停止拼接字符串
*/
var removeOuterParentheses = function (s) {
  let stack = [], res = '';
  for (let str of s) {
    if (str === '(') {
      stack.push(str)     // 如果取到的是'(',栈中添加元素
      if (stack.length > 1) res += str;   // 当栈深大于1的时候,顺便拼接字符串,相当于把"最外面皮"给剥下来了
    } else {
      if (stack.length > 1) res += str;   // 取到 "(",依旧拼接字符串
      stack.length && stack.pop()         // 只要栈不为空就让之前进栈的左括号出栈
    }
  }
  return res
};