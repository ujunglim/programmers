const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // up right down left

function solution(maps) {
    const queue = [{x: 0, y: 0, step: 1}];
    const targetX = maps.length-1;
    const targetY = maps[0].length-1;


    const isMovable = (x, y) => x >=0 && x <= targetX && y >=0 && x <= targetY && maps[x][y] === 1;


    while(queue.length !== 0) {
        const current = queue.shift();
        const {x, y, step} = current;
        // console.log(x, y, step);
        // arrived
        if(x === targetX && y === targetY) return step;

        // up
        if(isMovable(x-1, y)) {
            queue.push({x: x-1, y: y, step: step+1});
            maps[x][y] = 0;
        }
        // right
        if(isMovable(x, y+1)) {
            queue.push({x: x, y: y+1, step: step+1});
            maps[x][y] = 0;
        }
        // down
        if(isMovable(x+1, y)) {
            queue.push({x: x+1, y: y, step: step+1});
            maps[x][y] = 0;
        }
        // left
        if(isMovable(x, y-1)) {
            queue.push({x: x, y: y-1, step: step+1});
            maps[x][y] = 0;
        }
    }
    return -1;
}

const input = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
// const input = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];
const result = solution(input);
console.log(result);
