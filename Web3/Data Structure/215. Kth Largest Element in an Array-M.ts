// 问题描述
// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例
// 输入: [3,2,1,5,6,4], k = 2
// 输出: 5

// 输入: [3,2,3,1,2,4,5,5,6], k = 4
// 快速选择:
// 时间复杂度: 平均情况 O(n)，最坏情况 O(n²)
// 空间复杂度: O(log n)，递归调用栈的空间

function findKthLargest(nums: number[], k: number): number {
    // index of the kth largest element 转化为索引（第k大的元素在排序后的索引为nums.length - k）
    const targetIndex = nums.length - k;
    
    // 快速选择算法
    return quickSelect(nums, 0, nums.length - 1, targetIndex);
}

function quickSelect(nums: number[], left: number, right: number, targetIndex: number): number {
    //分区函数 function to partition the array
    function partition(l: number, r: number): number {
        //选择一个基准元素 pivot 最右边的元素作为基准
        const pivot = nums[r];
        let i = l;
        //遍历数组，将小于基准的元素放在左边，大于基准的元素放在右边
        for (let j = l; j < r; j++) {
            if (nums[j] < pivot) {
                //交换nums[i]和nums[j]
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
            }
        }
        //将基准元素放在正确的位置
        [nums[i], nums[r]] = [nums[r], nums[i]];
        return i;
    }
    // main loop
    while (left <= right) {
        //get the pivot index
        const pivotIndex = partition(left, right);
        //found target index
        if (pivotIndex === targetIndex) {
            return nums[pivotIndex];
        }
        //如果目标在左边, 缩小右边界
        else if (pivotIndex > targetIndex) {
            right = pivotIndex - 1;
        }
        //如果目标在右边, 缩小左边界
        else {
            left = pivotIndex + 1;
        }
    }
    //如果未找到目标，返回-1
    return -1;
}