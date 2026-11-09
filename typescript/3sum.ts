function threeSum(nums: number[]): number[][] {
    const numbers: number[][] = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i <= nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left: number = i + 1;
        let right: number = nums.length - 1;
        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum < -nums[i]) left++;
            if (sum > -nums[i]) right--;
            if (sum == -nums[i]) {
                numbers.push([ nums[i], nums[left], nums[right] ]);
                left++;
                right--;
                while (left < right && nums[left] == nums[left - 1]) left++;
            }
        }
    }

    return numbers;
}
