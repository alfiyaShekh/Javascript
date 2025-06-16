// ********* for of loop ***********

// ** for of on array **
const arr=[1,2,3,4,5]
for (const val of arr) {
    //console.log(val);
    
}

// ** for of on string **
let str="Hello alfiya"
for (const val of str) {
    if(val==" ")
        continue
    //console.log(val);
    
}

// ** for of on map **
// Maps :: used for entering unique values
const map=new Map()
map.set('alfiya',"TYCO") // here alfiya is key and TYCO is value
map.set('alfiya',"TYCO") // again it will not get print due to charactiristics of map
map.set('abc',"TYCSE")
//console.log(map);

for (const [key,value] of map) {
    //console.log(key,' :- ',value);
}

// for of on object and below syntax will not work on object
// let game={
//     1:"subway",
//     2:"BGMI"
// }
// for (const [key,value] of game) {
//     console.log(key,value);
    
    
// }




// ********** for-in *********

// ** for-in object **
const language={
    js:"javascipt",
    cpp:"c++",
    rb:"ruby"
}
for (const key in language) {
    //console.log(`${key} for shortcut ${language[key]}`) // key=> to access keys , language[key] => to access values 
}


// ** for-in on arrays **
const a=[1,2,3,4,5]
for (const key in a) {
    //console.log(a[key]); // a[key] => used to access elements of array
    
}


// ** for-in on map (cannot be iterated)**
// let maps=new Map()
// maps.set('js','javascipt')
// maps.set('rb','ruby')
// for (const [key,value] in maps) {
//     console.log(key,value);
    
//}