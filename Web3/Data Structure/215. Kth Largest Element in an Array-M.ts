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