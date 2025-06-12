let language="Javscript"
let mode="fronthend"

//console.log(language+" "+mode);
//console.log(`This is ${language} currently being used for ${mode}`); // String Interpolation


let editor=new String("VS Code")
//console.log(editor);
// console.log(editor[0]); // accessing string letters through it's index

// console.log(editor.length);
// console.log(editor.toLowerCase()); //convert string to lowercase
// console.log(editor.toUpperCase()); //convert string to uppercase
// console.log(editor.charAt(5)); //returns character present at defined index
// console.log(editor.indexOf('C')); // returns index of specified character

let newstr=editor.substring(0,4)
console.log(newstr); // 0 => start index , 4 =>ending index but char at index 4 is not considered

let newstr2=editor.substr(0,5)
console.log(newstr2); // 0 =>string index , 5=>length of sub string 



let str2=editor.slice(-4,5)
console.log(str2);

let demostr="     alfiya    "
console.log(demostr);
console.log(demostr.trim()); // trims the whitespaces
console.log(demostr.trimRight()); // trims white space from right
console.log(demostr.trimLeft()); // trims white space from left

let string="https.javascript.com"
console.log(string.replace("javascript","alfiya")); // used to replace characters of string 

console.log(string.includes("https")); // returns true is specified characters are present int the string otherwisw false



let student="Alfiya-sameer-shekh"
console.log(student.split('-')); //converts string to array based on specifies seperator







