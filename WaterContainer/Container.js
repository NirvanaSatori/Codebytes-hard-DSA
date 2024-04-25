// const height = [1,8,6,2,5,4,8,3,7]
const height = [1,1]

var maxArea = function() {
    let j = height.length-1
    let i = 0
    let area = 0
    while(i<j){
        area = Math.max(area, Math.min(height[i], height[j]) *(j - i) )
        height[i] <= height[j] ? i++ : j--
    }
    return area
};

maxArea()