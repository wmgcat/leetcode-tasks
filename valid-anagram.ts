function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length)
        return false;
    
    const memory = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        memory.set(s[i], (memory.get(s[i]) ?? 0) + 1);
        memory.set(t[i], (memory.get(t[i]) ?? 0) - 1);
    }

    return [...memory.values()].every((value) => value == 0);
}
