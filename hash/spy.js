// function solution(clothes) {
//     let answer = 1;
//     const obj = {};
//     clothes.forEach(e => {
//         const [_name, type] = e;
//         obj[type] ? (obj[type] += 1) : (obj[type] = 1);
//     })
//     const values = Object.values(obj).map(e => e+1);
//     for(const e of values) {
//         answer *= e;
//     }
//     return answer-1;
// }

function solution(clothes) {
    let answer = 1;
    const obj = {};
    for(let cloth of clothes) {
        const [_name, type] = cloth;
        obj[type] = (obj[type] || 0) + 1;
    }

    for(let key in obj) {
        answer *= (obj[key]+1);
    }

    // for(let value of Object.values(obj)) {
    //     answer *= (value+1);
    // }
    return answer-1;
}

const input = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];	// 5
// const input = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]; // 3
const result = solution(input);
// console.log(result);