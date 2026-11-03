function lengthOfLongestSubstring(s: string): number {
	const win = new Set<string>();

	let left = 0;
	let max = 0;

	for (let i = 0; i < s.length; i++) {
		while(win.has(s[i])) {
			win.delete(s[left]);
			left++;
		}
		win.add(s[i]);
		max = Math.max(max, i - left + 1);
	}

	return max;
}
