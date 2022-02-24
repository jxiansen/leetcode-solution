var CQueue = function () {
  this.stackA = []
  this.stackB = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stackA.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  // 如果栈B中还有元素,先紧着他出队列,出干净了再push新元素到栈B中
  if (this.stackB.length) {
    return this.stackB.pop()
  } else {
    // 此时栈B已经空了,需要把栈A中的元素倒过来腾挪到栈B中
    while (this.stackA.length) {
      this.stackB.push(this.stackA.pop())
    }
    return this.stackB.length === 0 ? -1 : this.stackB.pop()
    // 如果栈B此时没有元素就返回-1,否则就返回栈B的顶部
  }
};