// const arr = [3,2,1,6]
// const arr = [4,3,4,3,1,2] 
const arr = [3,3,3,3,3]
function ArrayChallenge() { 
    const token = "x4spty83gb5"
    const rTimes = arr.length - arr[0]
    if(arr.length <= 2) {
      for(let i = 0; i<rTimes; i++){
        arr.unshift(arr.pop())
      }
    } else {
      let nums = arr.splice(arr.length - rTimes)
      arr.unshift(...nums)
    }
    const tokenArr = token.split("")
    // console.log(tokenArr, arr)
    let result = arr.filter(char=>!tokenArr.includes(String(char))).join(""); 
    return result.length<1?"" :result
  
  }
     
  // keep this function call here 
  // console.log(ArrayChallenge());