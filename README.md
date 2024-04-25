#Codebytes DSA Elements Challenge

HTML Elements
Hide Question
Have the function HTMLElements(str) read the str parameter being passed which will be a string of HTML DOM elements and plain text. The elements that will be used are: b, i, em, div, p. For example: if str is "<div><b><p>hello world</p></b></div>" then this string of DOM elements is nested correctly so your program should return the string true.

If a string is not nested correctly, return the first element encountered where, if changed into a different element, would result in a properly formatted string. If the string is not formatted properly, then it will only be one element that needs to be changed. For example: if str is "<div><i>hello</i>world</b>" then your program should return the string div because if the first <div> element were changed into a <b>, the string would be properly formatted.

Once your function is working, take the final output string and remove any characters (case-insensitive) from it that appear in your ChallengeToken. If the new final string is empty, return the string EMPTY.

Your ChallengeToken: x4spty83gb5
