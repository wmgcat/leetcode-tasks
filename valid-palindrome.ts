function isPalindrome(s: string): boolean {
    const str = s.toLowerCase();
    const chars = "qwertyuiopasdfghjklzxcvbnm1234567890";
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if (!chars.includes(str[left]))
            left++;
        else
        if (!chars.includes(str[right]))
            right--;
        else {
            if (str[left] != str[right])
                return false;
            left++;
            right--;
        }
    }

    return true;
}
