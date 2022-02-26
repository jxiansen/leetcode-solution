/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/* 
  主栈和辅助栈双栈实现: 
*/
var MyQueue = function () {
  this.stackA = []
  this.stackB = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stackA.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stackB.length) {
    return this.stackB.pop()
  }
  while (this.stackA.length) {
    this.stackB.push(this.stackA.pop())
  }
  return this.stackB.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stackB.length) {
    return this.stackB[this.stackB.length - 1]
  }
  while (this.stackA.length) {
    this.stackB.push(this.stackA.pop())
  }
  return this.stackB[this.stackB.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stackA.length && !this.stackB.length
  // 主栈和辅助栈都要为空才返回空
};
 
// @lc code=end