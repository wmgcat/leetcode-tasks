pub fn check_inclusion(s1: String, s2: String) -> bool {
    if (s1.len() > s2.len()) {
        return false;
    }

    let mut need = [0; 26];
    let mut win = [0; 26];

    for (right, char) in s1.chars().enumerate() {
        need[((char as u8) - b'a') as usize] += 1;
    }
    for (right, char) in s2.chars().enumerate() {
        let index = ((char as u8) - b'a') as usize;
        win[index] += 1;
        
        if (right >= s1.len()) {
            let c = s2.as_bytes()[right - s1.len()] as char;
            win[((c as u8) - b'a') as usize] -= 1;
        }
        if (win == need) {
            return true;
        }
    }

    false
}
