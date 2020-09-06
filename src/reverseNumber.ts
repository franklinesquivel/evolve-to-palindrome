/**
 * Returns the reverse of a number.
 * @example 158 -> 851
 * @param n 
 * @returns number
 */
const reverseNumber = (n: number): number => {
    let reverse = 0, rem : number;

    while (n != 0) {
        rem = n % 10;
        reverse = reverse * 10 + rem;
        n = Math.floor(n / 10);
    }

    return reverse;
}

export default reverseNumber;