//-----Task 1:-----

const things = [
  "nail file",
  "lotion",
  "pool stick",
  "washing machine",
  "box",
  "button",
  "flowers",
  "mouse pad",
  "phone",
  "tomato",
  "cup",
  "remote",
  "eye liner",
  "iPad",
  "picture frame",
  "apple",
  "toothpaste",
  "mirror",
  "piano",
  "bowl",
];

//go into array
//loop over array
//keep items that don't start with a vowel (aeiou)
//create a new array with these filtered values .filter

//write function

let answer =things.filter(
  function (word) {
    if(word.charAt(0) === "a"||
    word.charAt(0) === "e"||
    word.charAt(0) === "i"||
    word.charAt(0) === "o"||
    word.charAt(0) === "u"){
      return false
    } else {
      return true}
  })

console.log(answer)

//
  let answerTwo =answer.map(
   function (wordTwo) {
   return wordTwo.charAt(0).toUpperCase() + wordTwo.slice(1)
   })
   
console.log(answerTwo);


//👉 Your code here!

//-----Task 2:-----



//👉 Your code here!
