function solution(citations) {
  var answer = 0;
  const citatCount = [];
  for(const cita of citations) {
    const filtered = citations.filter(e => e >= cita);
    console.log(filtered.length, cita)
    if(filtered.length >= cita) {
      citatCount.push(filtered.length);
    }
  }
  return citatCount.sort((a, b) => b-a)[0];
}

const input = [3, 0, 6, 1, 5];
const result = solution(input);
console.log(result);
