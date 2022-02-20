// 方法1: 对数组转成二进制后再分割统计出 '1'的个数
var countBits = function (n) {
  let arr = []
  for (let i = 0; i <= n; i++) {
    let num = [...i.toString(2)].reduce((acc, cur) => {
      if (cur === '1') acc++
      return acc
    }, 0);
    arr.push(num)
  }
  return arr
};

// 方法二: 封装一个求数字转二进制后其中字符串'1'的个数
var countBits = function (n) {
  let arr = [];
  var countBit = function (num) {
    let count = 0
    while (num > 1) {
      let tmp = num % 2;
      num = (num - tmp) / 2;
      if (tmp === 1) count++
    }
    if (num === 1) count++
    return count
  }

  for (let i = 0; i <= n; i++) {
    arr.push(countBit(i))
  }
  return arr
};