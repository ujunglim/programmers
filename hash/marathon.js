function solution(participant, completion) {
  participant.sort();
  completion.sort();
  
  for(let i in participant) {
    if(participant[i] !== completion[i]) return participant[i]
  }
}

const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

// const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
// const completion = ["josipa", "filipa", "marina", "nikola"]; // vinko

// const participant = ["mislav", "stanko", "mislav", "ana"];
// const completion = ["stanko", "ana", "mislav"]; // mislav

const result = solution(participant, completion);
console.log(result);