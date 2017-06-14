// @flow
const sum = (arr: Array<number>)  => (arr.reduce((sum, item) => sum + item, 0): number);

let myStr: string;
let myNumber: number;

myStr = sum([1,2,3]);
myNumber = sum([2,3,4]);

console.log(myStr, myNumber);
