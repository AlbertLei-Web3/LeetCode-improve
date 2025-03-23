function maxSumSubarray(nums: number[], k: number): number {
    let maxSum = 0;
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += nums[i]; // Initialize the window sum
    }
    maxSum = windowSum; // Initialize maxSum with the initial window sum

    // Slide the window and update maxSum
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k]; // Slide the window and update windowSum
        maxSum = Math.max(maxSum, windowSum); // Update maxSum if windowSum is greater ()
    }

    return maxSum;
}

// 测试用例
console.log(maxSumSubarray([2, 3, 4, 1, 5], 3));  // 输出: 10
console.log(maxSumSubarray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));  // 输出: 17