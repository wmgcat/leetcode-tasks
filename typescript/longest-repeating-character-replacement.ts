function characterReplacement(s: string, k: number): number {
	const map = new Map<string, number>();
	
	let best = 0;
	let left = 0;
	let max = 0;
	for (let right = 0; right < s.length; right++) {
		map.set(s[right], (map.get(s[right]) ?? 0) + 1);
		max = Math.max(max, map.get(s[right]));
		while (((right - left + 1) - max) > k) {
			map.set(s[left], (map.get(s[left]) ?? 0) - 1);
			left++;
		}
		best = Math.max(best, right - left + 1);
	}
	return best;
}
