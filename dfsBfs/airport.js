function solution(tickets) {
  function dfs (current, remainTickets) {
    // console.log("remainTickets:", remainTickets)
    const len = remainTickets.length;
    let paths = [];
    if (len === 0) return [[current]];

    // found next airports
    for(let i = len-1; i >= 0; i--) {
      const [depart, arrive] = remainTickets[i];
      if(depart === current) {
        const newTickets = [...remainTickets];
        newTickets.splice(i,1);
        const result = dfs(arrive, newTickets);
        for(let route of result) {
          route.unshift(current);
          paths.push(route);
        }
      }
    }

    return paths;
  }

  return dfs('ICN', tickets).sort()[0];
}

const tickets = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]];
// const tickets = [["ICN", "SFO"], ["SFO", "ATL"], ["ATL", "ICN"]];
const result = solution(tickets);
console.log("result:", result);
