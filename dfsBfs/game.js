const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // up right down left

function solution(maps) {
  const queue = [[0,0,1]];  // init [x,y,step]
  const targetX = maps[0].length-1;
  const targetY = maps.length-1;

  while(queue.length !== 0) {
    const current = queue.shift();
    const [x, y, step] = current;
    // console.log(x, y, step);
    // arrived
    if(x === targetX && y === targetY) return step;

    // find adj
    for(let i = 0; i < 4; i++) {
      const [dx, dy] = directions[i];
      const adjX = x+dx;
      const adjY = y+dy;
      // out of map
      if(adjX < 0 || adjY < 0 || adjX > targetX || adjY > targetY) continue;
      // found route
      if(maps[adjX][adjY] === 1) {
        maps[adjX][adjY] = 0;
        // console.log('found:', [adjX, adjY]);
        queue.push([adjX, adjY, step+1]);
      }
    }
  }
  return -1;
}

// const input = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
const input = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];
const result = solution(input);
console.log(result);

// continue
// index계산이랑 adj계산 동일하게
