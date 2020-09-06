/**
 * Returns if the parameter is a palindrome number
 * @param n 
 * @returns boolean
 */
const isPalindrome = (n: number): boolean => {
    let divisor = 1;

    while (n / divisor >= 10)
        divisor *= 10;

    while (n != 0) {
        const leading = Math.floor(n / divisor);
        const trailing = n % 10;

        if (leading != trailing)
            return false;

        n = Math.floor((n % divisor) / 10);

        divisor /= 100;
    }

    return true;
}

export default isPalindrome;