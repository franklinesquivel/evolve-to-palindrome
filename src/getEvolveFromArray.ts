import evolveToPalindrome, { evolveToPalindromeType } from "./evolveToPalindrome";

/**
 * Returns an array of evolutions of numbers to palindromes
 * @param data 
 * @returns evolveToPalindromeType[]
 */
const getEvolveFromArray = (data: number[]): evolveToPalindromeType[] => {
    return data.map(evolveToPalindrome);
}

export default getEvolveFromArray;