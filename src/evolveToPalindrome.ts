import reverseNumber from "./reverseNumber";
import isPal from "./isPalindrome";

export type evolveToPalindromeType = {
    value: number | null,
    tries: number
}

/**
 * Returns the evolution of a number to a palindrome and the times that
 * the number was in the cicle of operation (Iterations).
 * @param n 
 * @returns evolveToPalindromeType
 */
const evolveToPalindrome = (n: number): evolveToPalindromeType => {
    let i = 0;
    let flag = true;
    let res: number = null;

    while (flag) {
        i++;
        res = n + reverseNumber(n);

        if (isPal(res)) {
            flag = false
        } else {
            n = res;
        }

        if (i === 100) {
            flag = false;
            res = null;
        }
    }

    return {
        tries: i,
        value: res
    };
}

export default evolveToPalindrome;