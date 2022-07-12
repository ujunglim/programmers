// function solution(nums) {
//   const max = nums.length / 2;
//   const type = {};
//   const keys = [];
//   nums.forEach((e) => {
//     if(!type[e] === true) {
//       type[e] = true;
//       keys.push(e);
//     }
//   });

//   return keys.length <= max ? keys.length : max;
// }

function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];
  
  return arr.length <= max ? arr.length : max;
}

// const input = [3,1,2,3]; // 2
// const input = [3,3,3,2,2,4]	// 3
const input = [3,3,3,2,2,2]	// 2

const result = solution(input);
console.log(result);