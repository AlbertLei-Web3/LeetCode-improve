// 问题描述
// 给你一个整数数组 nums 和一个整数 k，请你统计并返回该数组中和为 k 的连续子数组的个数。

// 解题思路
// 这个问题可以使用前缀和和哈希表的组合来高效解决：
// 使用前缀和来快速计算任意子数组的和
// 使用哈希表来存储每个前缀和出现的次数
// 对于当前前缀和 sum，如果之前存在前缀和 sum - k，则说明存在和为 k 的子数组




function subarraySum(nums: number[], k: number): number {
    // create a map to store the prefix sum and its count 创建一个map来存储前缀和及其出现的次数
    const prefixSumCount = new Map<number, number>();
    // initialize the prefix sum and its count 初始化前缀和及其出现的次数，和为0的子数组出现1次（空数组）
    prefixSumCount.set(0, 1);

    let count = 0; // 记录和为k的子数组个数
    let currentSum = 0; // 当前前缀和

    for (const num of nums) {
        currentSum += num; // update current sum 更新当前前缀和

        // check if there is a previous prefix sum that has a difference of k 
        // 检查是否存在一个之前的前缀和，其与当前前缀和的差为k
        // 如果存在，则说明存在一个和为k的子数组
        if (prefixSumCount.has(currentSum - k)) {
            count += prefixSumCount.get(currentSum - k)!;
        }

        // update the prefix sum count 更新前缀和出现的次数
        prefixSumCount.set(currentSum,(prefixSumCount.get(currentSum) || 0) + 1);
    }

    return count;
}

// 详细过程解析
// 让我们以示例 nums = [1,2,3,4,5], k = 9 为例，详细解释算法的执行过程：

// 初始化：
// prefixSumCount = {0: 1} (前缀和为0出现1次)
// count = 0 (结果计数器)
// currentSum = 0 (当前前缀和)

// 遍历数组：
// 处理 nums[0] = 1:
// currentSum = 0 + 1 = 1
// 检查 currentSum - k = 1 - 9 = -8 是否在哈希表中: 否
// 更新哈希表: prefixSumCount = {0: 1, 1: 1}

// 处理 nums[1] = 2:
// currentSum = 1 + 2 = 3
// 检查 currentSum - k = 3 - 9 = -6 是否在哈希表中: 否
// 更新哈希表: prefixSumCount = {0: 1, 1: 1, 3: 1}

// 处理 nums[2] = 3:
// currentSum = 3 + 3 = 6
// 检查 currentSum - k = 6 - 9 = -3 是否在哈希表中: 否
// 更新哈希表: prefixSumCount = {0: 1, 1: 1, 3: 1, 6: 1}

// 处理 nums[3] = 4:
// currentSum = 6 + 4 = 10
// 检查 currentSum - k = 10 - 9 = 1 是否在哈希表中: 是，出现了1次
// 增加计数: count = 0 + 1 = 1
// 更新哈希表: prefixSumCount = {0: 1, 1: 1, 3: 1, 6: 1, 10: 1}

// 处理 nums[4] = 5:
// currentSum = 10 + 5 = 15
// 检查 currentSum - k = 15 - 9 = 6 是否在哈希表中: 是，出现了1次
// 增加计数: count = 1 + 1 = 2
// 更新哈希表: prefixSumCount = {0: 1, 1: 1, 3: 1, 6: 1, 10: 1, 15: 1}

// 最终结果:
// 返回 count = 2 (有2个子数组的和为9)
// 这两个子数组是: [2,3,4] 和 [4,5]

