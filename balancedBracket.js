function isBalancedBrackets(input) {
    const stack = [];
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let char of input) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return "NO";
            }
        }
    }
    return stack.length === 0 ? "YES" : "NO";
}

console.log(isBalancedBrackets("{ [ ( ) ] }")); // Output: YES
console.log(isBalancedBrackets("{ [ ( ] ) }")); // Output: NO
console.log(isBalancedBrackets("{ ( ( [ ] ) [ ] ) [ ] }")); // Output: YES
