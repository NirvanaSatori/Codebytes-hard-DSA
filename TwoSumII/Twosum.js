// const numbers = [2,7,11,15], target = 9
// const numbers = [2,3,4], target = 6
const numbers = [-1,0], target = -1
var twoSum = function() {
    let p1 = 0
    let p2 = numbers.length - 1
    while(numbers[p1] + numbers[p2] !== target ){
        if(numbers[p1] + numbers[p2]>target){
            p2--
        }else{
             p1++   
            }      
    }
        return [p1+1, p2+1]
};

twoSum()