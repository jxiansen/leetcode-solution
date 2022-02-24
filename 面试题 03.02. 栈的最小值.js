/* 
构造一个辅助栈,与主栈保持同步,每当新push元素的时候,如果小于或等于辅助栈也同步push
小技巧: 可以预先给辅助栈中添加一个infinity值来避免判栈空操作
  有两种压栈方式,各有特点
  https://leetcode-cn.com/problems/min-stack-lcci/solution/lai-zi-zuo-shen-de-jie-ti-si-lu-wo-yi-yi-hyp4/
*/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.minStack = [Infinity]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (x <= this.minStack[this.minStack.length - 1]) this.minStack.push(x)
  // 如果新元素小于辅助栈栈顶就push进去
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let item = this.stack.pop()
  if (item === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */