function solution(numbers) {
  let answer = '';
  const strNums = numbers.map(e => e.toString());

  const sortedNums = strNums.sort((a, b) => {
    return a+b < b+a ? 1 : -1
  })

  answer = sortedNums.join('');

  if(answer[0] === '0') {
    answer = '0';
  }

  return answer;
}

// const numbers = [6, 10, 2];
const numbers = [3, 30, 34, 5, 9];
// const numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// const numbers = [0];
// const numbers = [104, 1];
// const numbers = [0, 01];

const result = solution(numbers);
console.log(result);
