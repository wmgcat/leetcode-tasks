function runningSum(nums: number[]): number[] {
	if (!nums.length)
		return [];

	const arr = [ nums[0] ];
	let sum = nums[0];

	for (let i = 1; i < nums.length; i++) {
		sum += nums[i];
		arr.push(sum);
	}

	return arr;
}
