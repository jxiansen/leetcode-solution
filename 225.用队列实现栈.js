/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */
// 双队列实现
var MyStack = function () {
  this.queueA = []    // 主队列
  this.queueB = []    // 副队列
};

MyStack.prototype.push = function (x) {
  while (this.queueA.length) {          // 主队列先搬到辅队列中
    this.queueB.push(this.queueA.shift())
  }
  this.queueA.push(x)         // 主队列中添加元素就确保了最后添加的元素在队列头
  while (this.queueB.length) {
    this.queueA.push(this.queueB.shift())   // 再把辅助队列搬回到主队列中
  }
};

MyStack.prototype.pop = function () {
  return this.queueA.shift()
};

MyStack.prototype.top = function () {
  return this.queueA[0];
};

MyStack.prototype.empty = function () {
  return this.queueA.length === 0
};

// @lc code=end



// 单队列实现
var MyStack = function () {
  this.queue = []
};

MyStack.prototype.push = function (x) {
  this.queue.push(x)
};

MyStack.prototype.pop = function () {
  let count = this.queue.length - 1;
  while (count--) {
    this.queue.push(this.queue.shift())
  }
  return this.queue.shift()
};


MyStack.prototype.top = function () {
  return this.queue[this.queue.length - 1]
};

MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};