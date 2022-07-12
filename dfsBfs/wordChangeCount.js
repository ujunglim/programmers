const diffChar = (word1, word2) => {
  const length = word1.length;
  let diff = 0;
  for (let i = 0; i < length; i++) {
    if (word1[i] !== word2[i]) {
      diff++;
    }
  }
  return diff;
};

function solution(begin, target, words) {
  // init
  let queue = [{current: begin, level: 0}];

  while(queue.length !== 0) {
    const {current, level} = queue.shift();
    let newWords = []; // remain words

    if(current === target) return level;
    
    // find adjacent
    for(let i = 0; i < words.length; i++) {
      const diff = diffChar(current, words[i]);
      if(diff === 1) {
        queue.push({current: words[i], level: level + 1});
      }
      else {
        newWords.push(words[i]);
      }
    }
    words = newWords;
  }
  return 0;
}

const begin = "hit";
const target = "cog"; //cog
const words = ["hot", "dot", "dog", "lot", "log", "cog"];
const result = solution(begin, target, words);
console.log(result);

