function solution(numbers, target) {
  function dfs(sum, i) {
      if(i === numbers.length) {
          if(sum === target) return 1;
          return 0;
      }
      return dfs(sum+numbers[i], i+1) + dfs(sum-numbers[i], i+1);
  }
  return dfs(0, 0);
}

// function dfs(n, numbers, sum, target) {
//   if(n === numbers.length) {
//       if(sum === target) {
//           return 1;
//       }
//       return 0;
//   }
//   return dfs(n+1, numbers, sum+numbers[n], target) + dfs(n+1, numbers, sum-numbers[n], target);
// }

// function solution(numbers, target) {
//   return dfs(0, numbers, 0, target);
// }


// function solution(numbers, target) {
//   let answer = 0;
//   dfs(0,0);

//   function dfs(n, sum) {
//     if(n < numbers.length) {
//       dfs(n+1, sum + numbers[n]);
//       dfs(n+1, sum - numbers[n]);
//     }
//     else if(sum === target){
//       answer++;
//     }
//   }
//   return answer;
// }

const input = [1, 1, 1, 1, 1];
const target = 3;
const result = solution(input, target);