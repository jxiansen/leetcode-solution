// 读写双指针改写
var replaceSpace = function (s) {
  // 字符串分割为数组
  let arr = [...s], count = 0;

  // 计算出空格数,用来扩容
  for (let item of arr) {
    if (item === ' ') count++
  }

  // 左右双指针遍历
  let [l, r] = [arr.length - 1, arr.length + count * 2 - 1]
  while (l >= 0) {
    if (arr[l] === ' ') {       // 左指针遇到了空格,右指针开始写字符串,并不断左移
      arr[r--] = '0'
      arr[r--] = '2'
      arr[r--] = '%'
      l--                 // 右指针写完后,左指针左移
    } else {
      arr[r--] = arr[l--]     // 左指针遇到正常字符: 将左指针读到的值写入右指针,并各自左移
    }
  }
  return arr.join('')     // 拼接字符串
};


// 方法一: 直接使用api
var replaceSpace = function (s) {
  return s.replaceAll(' ', "%20")
};

// 第二种使用api方法
var replaceSpace = function (s) {
  return s.split(' ').join('%20');
};

// 方法二: 切割成数组拼接
var replaceSpace = function (s) {
  let arr = [...s];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") arr[i] = "%20"
  }
  return arr.join('')
};


// 遍历字符串拼接
var replaceSpace = function (s) {
  let res = "";
  for (let item of s) {
    item === " " ? res += "%20" : res += item;
  }
  return res
};





console.log(replaceSpace('we are happy'))