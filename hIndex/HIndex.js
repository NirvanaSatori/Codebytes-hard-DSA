// const citations = [3,0,6,1,5]
const citations = [1,3,1]
var hIndex = function() {
    citations.sort((a, b) => b - a);
    let i = 0;
    while (citations[i] > i) i++;
    return i;
  };
hIndex()