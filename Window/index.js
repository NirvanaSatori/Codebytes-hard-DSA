// const strArr = ["aaabaaddae", "aed"]
const strArr = ["ahffaksfajeeubsne", "jefaa"]
// const strArr = ["aaffhkksemckelloe", "fhea"]
const token = "x4spty83gb5"

function StringChallenge() { 
    let k = strArr[1], n = strArr[0],min = "", left = 0, right = -1;
    let map = {}
    k.split('').forEach(element => {
        if (map[element]==null) map[element] = 1;
        else map[element] = map[element] + 1;
    });
    let count = Object.keys(map).length
  
    while(right <= n.length){
        if (count == 0) {
            let current = n[left];
            if (map[current] != null) map[current]++;
            if (map[current] > 0) count++;    
            let temp = n.substring(left, right+1)
            if (min == "") min = temp;
            else min = min.length<temp.length?min:temp;
            left++;
        } else {
            right++;
            let current = n[right];
        if (map[current] != null) map[current]--
        if (map[current] == 0) count--
      }
    }
    let output = min.split("")
    let tokenArr = token.split("")
    return output.filter(char=>!tokenArr.includes(char)).join("")
    console.log(finalOutput)
    // return output.join("")
    
  }
     
  // keep this function call here
//   StringChallenge() 
  console.log(StringChallenge());
