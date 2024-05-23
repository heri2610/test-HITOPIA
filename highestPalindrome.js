function highestPalindrome(str, k) {
    let arr = str.split('');
    function findPalindrome(arr, k, left, right) {
        if (k === 0) {
            let temp = arr.join('');
            if (temp === temp.split('').reverse().join('')) {
                return parseInt(temp);
            } else {
                return -1;
            }
        }
        if (left >= right) {
            return parseInt(arr.join(''));
        }
        if (arr[left] !== arr[right]) {
            let maxChar = Math.max(arr[left].charCodeAt(0), arr[right].charCodeAt(0));
            arr[left] = arr[right] = String.fromCharCode(maxChar);
            k--;
        }
        return findPalindrome(arr, k, left + 1, right - 1);
    }
    return findPalindrome(arr, k, 0, arr.length - 1);
}
console.log(highestPalindrome("3943", 1)); // output : 3993
console.log(highestPalindrome("992239", 2)); // output : 992299
