// const nums = [2,3,0,1,4]
const nums = [2,3,1,1,4]
var jump = function() {
    let jumps = 0;
    let cur_end = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; ++i) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i === cur_end) {
            ++jumps;
            cur_end = farthest;
        }
    }

    return jumps;
};