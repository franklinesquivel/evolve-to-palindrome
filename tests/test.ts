import isPal from "../src/isPalindrome";
import reverseNumber from "../src/reverseNumber";
import { expect } from 'chai';
import evolveToPalindrome from "../src/evolveToPalindrome";
import getEvolveFromArray from "../src/getEvolveFromArray";

describe('Is palindrome', function () {
    it('Should return true if a number is palindrome', function () {
        expect(isPal(88)).to.eq(true);
        expect(isPal(4573)).to.eq(false);
        expect(isPal(12321)).to.eq(true);
        expect(isPal(465)).to.eq(false);
        expect(isPal(1001)).to.equal(true);
    });
});

describe("Is the reverse of a number", function () {
    it('Should return the reverse of a number', function () {
        expect(reverseNumber(132)).to.eq(231);
        expect(reverseNumber(8459)).to.eq(9548);
    });
});

describe("Gets the first palindrome from the acumulate sum of the reverse of a number to the number", function () {
    it("Should retun the first palindrome find from the accumulate sum", function () {
        expect(evolveToPalindrome(3)).to.eql({ tries: 1, value: 6 });
        expect(evolveToPalindrome(195)).to.eql({ tries: 4, value: 9339 });
        expect(evolveToPalindrome(265)).to.eql({ tries: 5, value: 45254 });
        expect(evolveToPalindrome(750)).to.eql({ tries: 3, value: 6666 });
        expect(evolveToPalindrome(196)).to.eql({ tries: 100, value: null });
    });
})

describe("Get the palindrome result for an array of numbers", function() {
    it("Should return an array of objects with the palindromes and tries of every item in the array", function() {
        expect(getEvolveFromArray([3, 195])).to.have.deep.members([
            { tries: 1, value: 6 },
            { tries: 4, value: 9339 }
        ])
    })
})