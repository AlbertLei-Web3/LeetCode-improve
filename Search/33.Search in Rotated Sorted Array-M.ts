function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        //judge if the left half is sorted
        if (nums[left] <= nums[mid]) {
            //check if target is in the left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; //keep searching in the left half
            } else {
                left = mid + 1; //search in the right half
            }
        } else { //right half is sorted
            //check if target is in the right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; //search in the right half
            } else {
                right = mid - 1; //search in the left half
            }
        }
    }

    return -1; //target not found
}

// 整体流程：
// 初始化 left 和 right 指针。
// 进入循环，直到 left 超过 right。
// 在每次迭代中计算 mid，并判断当前搜索范围的有序性。
// 根据有序性和目标值的位置更新指针，缩小搜索范围。
// 如果找到目标值，返回其索引；如果循环结束仍未找到，返回 -1
    //Initializeleft and right pointer
    //into loops until left > right
    //Calculate mid in each iteration and determine if the current search range is sorted
    //Update pointers based on the sorted property and target value position to narrow down the search range
    //if


// 时间复杂度：O(log n)，因为每次迭代都将搜索范围减半。
// 空间复杂度：O(1)，只使用了常数级别的额外空间。