/**
 * Main functionality
 */
import getEvolveFromArray from "./getEvolveFromArray";

const data = [3, 195, 265, 750];
console.log(`Input: [${data.join(', ')}] \n`);

const results = getEvolveFromArray(data);

console.log(`Ouput:`);
results.forEach(res => console.log(res.tries, res.value));
