function subarraySumTest(nums: number[], k: number): number {
    const prefixSumCount = new Map<number, number>();
    prefixSumCount.set(0, 1);

    let count = 0;
    let currentSum = 0;

    for (const num of nums) {
        currentSum += num;

        if (prefixSumCount.has(currentSum - k)) {
            count += prefixSumCount.get(currentSum - k)!; // 获取当前前缀和出现的次数
        }

        prefixSumCount.set(currentSum,(prefixSumCount.get(currentSum) || 0) + 1);
    }

    return count;
}