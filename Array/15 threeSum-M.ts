function threeSum(nums: number[]): number[][] {
    nums.sort((a,b) => a - b);

    const result: number[][] = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

// 简化解题步骤 | Simplified Steps to Solve
// 排序数组：将输入数组按升序排序。
// Sort the array: Sort the input array in ascending order.
// 遍历数组：使用一个循环固定第一个数。
// Iterate through the array: Use a loop to fix the first number.
// 双指针查找：使用两个指针查找剩余两个数。
// Use two pointers: Use two pointers to find the remaining two numbers.
// 去重处理：在找到有效组合后，跳过重复的数字。
// Handle deduplication: After finding a valid combination, skip duplicate numbers.
// 返回结果：返回所有找到的三元组。
// Return the result: Return all found triplets.
// 这样就可以找到所有三数之和为零的组合了！
// This way, you can find all triplets that sum to zero!

// Three Sum (threeSum-M.ts)
// 时间复杂度: O(n^2)
// Time Complexity: O(n^2)
// 计算方法:
// 外层循环遍历 n 个元素。
// The outer loop iterates through n elements.
// 内层使用双指针查找的时间复杂度是 O(n)，所以总的时间复杂度是 O(n^2)。
// The inner two-pointer search has a time complexity of O(n), so the total time complexity is O(n^2).
// 空间复杂度: O(1)（不考虑返回结果的空间）
// Space Complexity: O(1) (excluding the space for the return result)
// 计算方法: 只使用了常量级别的额外空间来存储指针和结果数组，因此空间复杂度是 O(1)。
// Calculation Method: Only constant-level extra space is used to store pointers and the result array, so the space complexity is O(1).