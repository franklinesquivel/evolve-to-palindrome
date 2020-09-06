# Palindrome Evolution: Invert and Add :cherry_blossom:

The invert and add function starts from a number from which another is obtained with the order of their
inverted digits, and add both. If the sum is not a palindrome, the procedure will be repeated.
For example, if you start with 195 as the starting number, you will get the palindrome 9339
after the fourth operation:

```
195 + 591 = 786
786 + 687 = 1473
1473 + 3741 = 5214
5214 + 4125 = 9339
```

This method makes most of the integers evolve into palindromes in a few
Steps. But there are interesting exceptions. 196 is the first number for which no
found a palindrome, although it has not been possible to prove that it does not exist.
Write a program that returns the resulting palindrome with an initial number as data
(if there is one), and the number of iterations (sums) needed to reach it.
It can be assumed that all the numbers that will be used in the program have a solution to
which is reached in less than 1000 operations and no palindrome will be greater than
4,294,967,295. It should be taken into account that there are single digit palindromes.

### Input
An array of numbers.

### Ouput
For each integer N, a line will be displayed indicating the minimum number of iterations
necessary to calculate the palindrome, a soft space and the palindrome itself.

### Example
>**Input:** 3, 195, 265, 750  
 **Ouput**: 
```
4 9339
5 45254
3 6666
```

# Execute code

### Install dependencies
`npm install`

### Run functionality
`npm start`

### Run tests
`npm test`
