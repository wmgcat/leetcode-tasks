pub fn is_valid(s: String) -> bool {
    let mut stack: Vec<char> = Vec::new();
    for b in s.chars() {
        match b {
            '(' | '[' | '{' => stack.push(b),
            ')' | ']' | '}' => {
                let a = stack.pop();
                if b == ')' && a != Some('(') {
                    return false;
                }
                if b == ']' && a != Some('[') {
                    return false;
                }
                if b == '}' && a != Some('{') {
                    return false;
                }
            },
            _ => {}
        }
    }
    
    stack.len() == 0
}
