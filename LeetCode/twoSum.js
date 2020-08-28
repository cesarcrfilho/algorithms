// Available at:
// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    // create a hash table to save visited elements of nums
    const hash = new Map();
    
    // iterate through nums
    for(let i = 0; i < nums.length; i++) {
        // if (target - current element) is in the hash, return an array with indexes
        if(hash.has(target - nums[i])) {
            return [hash.get(target - nums[i]), i];
        }
        // else, save the nums[i] to the hash
        else {
            hash.set(nums[i], i);
        }  
    }
    // return an empty array if there's no match
    return [];
};

// some test cases
console.log(twoSum([2, 7, 11, 15, 3, 6], 9));
console.log(twoSum([], 1));
console.log(twoSum([5, 4, 8, 7, 0, 2, 9, 8, 7, 4, 1, 5, 8, 7, 4, 9, 7], 17));
console.log(twoSum([1, 2], 1));