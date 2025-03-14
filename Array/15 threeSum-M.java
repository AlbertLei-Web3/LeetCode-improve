import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums); //Step 1: Sort the array
        List<List<Integer>> result = new ArrayList<>();

        for (int i = 0; i < nums.length - 2; i++){
            if (i > 0 && nums[i] == nums[i-1]) continue; //Skip duplicat numbers

            int left = i + 1, right = nums.length - 1; //Step 2: Initialize two pointers
            while(left < right) {
                int sum = nums[i] + nums[left] + nums[right]; //Step 3: Compute sum

                if(sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right])); //Stor volid triplets
                    left++;       
                    right--;

                    while(left < right && nums[left] == nums[left - 1])left++; // Skip duplict
                    while(left < right && nums[right] == nums[right + 1])right--; // Skip duplict 
                }else if (sum < 0) {
                    left++; //Move left pointer to increase sum
                }
                else{
                    right--;
                }
            }
        }
        return result;
    }
}