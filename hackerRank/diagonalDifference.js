function diagonalDifference(arr) {
let leftDig = 0;
let rigthDig = 0;

for(let i = 0; i < arr.length; i+=1) {
leftDig += arr[i][i];
rigthDig += arr[i][arr.length -1 - i];
}
return Math.abs(leftDig - rigthDig);
}
console.log(diagonalDifference([
    [1,2,3],
    [4,5,6],
    [9,8,9]
]));