let nums = [11, 9, 3, 7, 16, 4, 2, 0]
var exchange = function (nums) {
  let [l, r] = [0, nums.length - 1];        // 左右指针从首尾逼近
  while (l < r) {
    if (nums[l] % 2 === 0 && nums[r] % 2 === 1) {     // 左偶右奇: 交换彼此值
      [nums[l], nums[r]] = [nums[r], nums[l]]
      l++
      r--
    };
    if (nums[l] % 2 === 1) l++      // 左指针为奇数：指针后移
    if (nums[r] % 2 === 0) r--      // 右指针为偶数: 指针左移
  }
  return nums
};

console.log(exchange(nums));  