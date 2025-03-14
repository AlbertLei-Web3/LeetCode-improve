function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }

        map.set(nums[i], i); // Store the current number and its index in the map
    }

    return [];
}

// 简化解题步骤 | Simplified Steps to Solve
// 创建哈希表：使用一个哈希表存储已遍历的数字及其索引。
// Create a hash map: Use a hash map to store the numbers and their indices.
// 遍历数组：使用一个循环遍历数组中的每个数字。
// Iterate through the array: Use a loop to iterate through each number in the array.
// 计算补数：对于当前数字，计算其与目标值的差值，即补数。
// Calculate the complement: For the current number, calculate the difference between it and the target value, which is the complement.
// 检查哈希表：在哈希表中查找该补数。
// Check the hash map: Look for the complement in the hash map.
// 返回结果：如果找到补数，返回其索引和当前数字的索引；否则返回空数组。
// Return the result: If the complement is found, return the indices of the complement and the current number; otherwise, return an empty array.
// 这样就可以找到两个数之和为目标值的组合了！
// This way, you can find the combination of two numbers that sum to the target value!

// 1. Two Sum (twoSum-E.ts)
// 时间复杂度: O(n)
// Time Complexity: O(n)
// 计算方法: 遍历数组一次，查找补数的操作在哈希表中是 O(1) 的，所以总的时间复杂度是 O(n)。
// Calculation Method: Iterate through the array once, and the lookup for the complement in the hash map is O(1), so the total time complexity is O(n).
// 空间复杂度: O(n)
// Space Complexity: O(n)
// 计算方法: 最坏情况下，哈希表需要存储所有 n 个数字及其索引，因此空间复杂度是 O(n)。
// Calculation Method: In the worst case, the hash map needs to store all n numbers and their indices, so the space complexity is O(n).