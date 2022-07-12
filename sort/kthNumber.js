function solution(array, commands) {
  var answer = [];
  let length = commands.length;
  
  commands.forEach(command => {
      const start = command[0]-1;
      const end = command[1];
      const number = command[2]-1;
      
      const newAnswer = array.slice(start, end).sort((a,b) => a-b)[number];
      answer.push(newAnswer);
  })
  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

// const array = [1, 30, 4, 21, 100000];
const result = solution(array, commands);
console.log(result);
