function rob1(nums: number[]): number {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0]; 

    const dp: number[] = new Array(n);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }

    return dp[n - 1];
}

// 解决动态规划的中心思想
// 1. 抓状态
// 2 列出状态转移方程

