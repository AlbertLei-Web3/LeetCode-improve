function searchRange(nums: number[], target: number): number[] {
    const result: number[] = [-1, -1];

    // 找到目标值的任意一个位置
    let leftIndex = findIndex(nums, target, true);
    if (leftIndex === -1) {
        return result; // 如果没有找到目标值，返回 [-1, -1]
    }

    // 找到目标值的结束位置
    const rightIndex = findIndex(nums, target, false);
    result[0] = leftIndex;
    result[1] = rightIndex;

    return result;
}

function findIndex(nums: number[], target: number, isLeft: boolean): number {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            index = mid; // 找到目标值，记录索引
            if (isLeft) {
                right = mid - 1; // 继续在左半部分查找
            } else {
                left = mid + 1; // 继续在右半部分查找
            }
        } else if (nums[mid] < target) {
            left = mid + 1; // 在右半部分查找
        } else {
            right = mid - 1; // 在左半部分查找
        }
    }

    return index; // 返回找到的索引
}

// 测试用例
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // 输出: [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // 输出: [-1, -1]

// 使用二分搜索找到目标值 target 在数组中的任意一个位置。
// 从该位置向左查找，找到目标值的最左边位置；向右查找，找到最右边位置。
// 返回这两个位置的索引，如果未找到目标值，则返回 [-1, -1]。