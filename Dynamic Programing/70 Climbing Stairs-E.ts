function climbStairs(n: number): number {
    if (n <= 2) return n;
    
    let prev1 = 1;  // 初始时，表示到达第1阶的方法数 dp[1]
    let prev2 = 2;  // 初始时，表示到达第2阶的方法数 dp[2]
    let current = 0; // 将要计算的当前阶的方法数 dp[i]
    
    // 从第3阶开始计算，一直到第n阶
    for (let i = 3; i <= n; i++) {
        // 计算当前阶的方法数 = 前一阶的方法数 + 前两阶的方法数 dp[i] = dp[i-1] + dp[i-2]
        current = prev1 + prev2;
        
        // 向前移动：更新prev1和prev2为新的"前两阶"和"前一阶"
        prev1 = prev2;     // 前两阶变成前一阶前面的那一阶 dp[i-2] = dp[i-1]
        prev2 = current;   // 前一阶变成当前阶 dp[i-1] = dp[i]
    }
    
    // 循环结束后，prev2就是到达第n阶的方法数
    return prev2;
}

// let dp = [0, 1, 2, 3, 5, 8];  // dp[i]表示爬到第i阶的方法数
// 计算过程：
// dp[1] = 1（初始值）
// dp[2] = 2（初始值）
// dp[3] = dp[1] + dp[2] = 1 + 2 = 3
// dp[4] = dp[2] + dp[3] = 2 + 3 = 5
// dp[5] = dp[3] + dp[4] = 3 + 5 = 8