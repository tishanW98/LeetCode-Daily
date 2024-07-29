var climbStairs = function(n) {
  let waysToClimb = [];
  waysToClimb[1] = 1;
  waysToClimb[2] = 2;

  for(let i = 3; i <= n; i++) {
      waysToClimb[i] = waysToClimb[i-1] + waysToClimb[i-2];
  }
  return waysToClimb[n];
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));