// const str = "<div><b><p>hello world</p></b></div>" 
// const str ="<div><div><b></b></div></p>"
let str = "<div>abc</div><p><em><s>test test test</b></em></p>"
const token = "x4spty83gb5"

function StringChallenge() { 
    str.replace(/>(.*?)</g, '><').trim();
    const matches = str.match(/<[^>]+?>/g);
    if (!matches) return ""; // No tags found

    // Remove angle brackets and slashes
    const cleanedTags = matches.map(tag => tag.replace(/[<>\/]/g, ''));
    
    // Return tags as a string
    const elements = cleanedTags.join(",").split(",")
    const countMap = elements.reduce((acc,curr)=>{
        return acc[curr] ? ++acc[curr] : acc[curr] = 1,acc
    },{})
    const uneven = Object.values(countMap).find(value => value%2)
    const output = Object.keys(countMap).find(key => countMap[key] === uneven)
    if(output === undefined){
        return ""
    }
    // console.log(output.split(" "))
    let tokenArr = token.split("")
    return output.split(" ").filter(char=>!tokenArr.includes(char)).join("")
  
  }
     
  // keep this function call here 
  console.log(StringChallenge());