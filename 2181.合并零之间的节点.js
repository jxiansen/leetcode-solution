// 方法一: 从数组中构造链表
var mergeNodes = function (head) {
  let list = [], cur = head.next, sum = 0;
  // 遍历链表得到零之间节点的和,并添加到数组中
  while (cur) {
    if (cur.val) {
      sum += cur.val
    } else {
      list.push(new ListNode(sum, null))
      sum = 0;
    }
    cur = cur.next;
  }
  // 从数组中重新构造节点,串起来
  for (let i = 0; i < list.length - 1; i++) {
    list[i].next = list[i + 1]
  }
  return list[0]
}

// 方法二: 直接在遍历链表的时候,用处理好的数构造链表
var mergeNodes = function (head) {
  let dummy = new ListNode(0, null), idx = dummy, cur = head.next, sum = 0;
  while (cur) {
    if (cur.val) {
      sum += cur.val
    } else {
      idx.next = new ListNode(sum, null)
      idx = idx.next
      sum = 0;
    }
    cur = cur.next;
  }
  return dummy.next
}

 
// 双指针法: cur: 当前遍历的指针, pre: 指向 '0' 节点的指针
var mergeNodes = function (head) {
  let cur = head, pre = null;
  while (cur) {
    if (cur.val) {  // 如果是正常数字的话
      pre.val += cur.val
    } else {      // 遇到 0 ,前置指针已经累加完毕,指向当前遍历指针
      if (pre) pre.next = cur.next ? cur : null;
      pre = cur
    }
    cur = cur.next
  }
  return head;
};