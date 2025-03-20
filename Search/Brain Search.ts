function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2); // 计算中间索引，防止溢出

        if (nums[mid] === target) {
            return mid; // 找到目标值，返回索引
        } else if (nums[mid] < target) {
            left = mid + 1; // 目标值在右半部分
        } else {
            right = mid - 1; // 目标值在左半部分
        }
    }

    return -1; // 目标值不存在，返回 -1
}

// 测试用例
console.log(search([-1, 0, 3, 5, 9, 12], 9));  // 输出: 4
console.log(search([-1, 0, 3, 5, 9, 12], 2));  // 输出: -1
