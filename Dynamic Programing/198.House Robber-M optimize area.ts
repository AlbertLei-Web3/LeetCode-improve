function rob(nums: number[]): number {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    let prev1 = nums[0]; // dp[0]
    let prev2 = Math.max(nums[0], nums[1]); // dp[1]

    for (let i = 2; i < n; i++) {
        const current = Math.max(prev2, nums[i] + prev1);
        prev1 = prev2; // update dp[i - 2]
        prev2 = current; // update dp[i - 1]
    }

    return prev2; //return dp[n - 1]
}