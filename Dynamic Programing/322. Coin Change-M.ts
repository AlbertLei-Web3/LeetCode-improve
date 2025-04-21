// 问题描述
// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
// 你可以认为每种硬币的数量是无限的。



// 解题思路
// 这是一个典型的动态规划问题。我们需要找出凑成每个金额 0 到 amount 所需的最少硬币数。
// 定义状态
// dp[i] 表示凑成金额 i 所需的最少硬币数。
// 状态转移方程
// 初始状态：dp[0] = 0，因为凑成金额 0 不需要任何硬币。
// 对于金额 i，我们考虑每个硬币 coin，如果 i ≥ coin，则 dp[i] = min(dp[i], dp[i-coin] + 1)。
// 这意味着，用当前硬币凑成金额 i 的最小硬币数 = 凑成金额 (i-coin) 的最小硬币数 + 1个当前硬币。


function coinChange(coins: number[], amount: number): number {
    // 初始化一个数组，表示凑各个金额最少需要的硬币数
    // 初始值设为无穷大，表示暂时无法凑出
    const dp: number[] = new Array(amount + 1).fill(Infinity);
    // 凑0元不需要硬币
    dp[0] = 0;
    
    // 尝试凑出每一个金额
    for (let i = 1; i <= amount; i++) {
        // 尝试每一种硬币 coin是当前硬币面额 coins是所有硬币面额
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