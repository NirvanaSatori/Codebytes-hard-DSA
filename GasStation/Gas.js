const gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// const gas = [2,3,4], cost = [3,4,3]
var canCompleteCircuit = function() {
    
    let lastIndex = 0
    let low = 1e10
    let sum = 0

    for(let i = 0; i < gas.length; i++) {
        sum += gas[i] - cost[i]

        if(sum <= low) {
            low = sum
            lastIndex = i
        }
    }
    return sum >= 0 ? (lastIndex + 1) % gas.length : -1
};

console.log(canCompleteCircuit())