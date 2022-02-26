/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  // 定义一个计算对象,对参数和操作符进行处理
  let compMap = {
    '+': (a, b) => +a + +b,   // 防止识别 "+" 为拼接字符串,进行类型转换
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b)
  }

  for (let str of tokens) {
    if (stack.length > 1 && str in compMap) {
      let [right, left] = [stack.pop(), stack.pop()]
      stack.push(compMap[str](left, right))     // 每次计算完的结果重新push到栈中等待下次计算
    } else {
      stack.push(str)
    }
  }
  return stack[0]
}


// @lc code=end

