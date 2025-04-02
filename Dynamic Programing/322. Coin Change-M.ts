function coinChange(coins: number[], amount: number): number {
    // 初始化一个数组，表示凑各个金额最少需要的硬币数
    // 初始值设为无穷大，表示暂时无法凑出
    const dp: number[] = new Array(amount + 1).fill(Infinity);
    // 凑0元不需要硬币
    dp[0] = 0;
    
    // 尝试凑出每一个金额
    for (let i = 1; i <= amount; i++) {
        // 尝试每一种硬币
        for (const coin of coins) {
            // 如果硬币面额不超过当前金额
            if (coin <= i) {
                // 更新dp[i]：选择当前硬币后，需要的最少硬币数
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    // 如果无法凑出目标金额，返回-1
    return dp[amount] === Infinity ? -1 : dp[amount];
}