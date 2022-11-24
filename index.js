function isPalindrome(word) {
  if (word === word.split('').reverse().join('')){
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here
  Need to make sure all input coming in is in lowercase
  need to reverse the string and compare it to the original
    can reverse string by spliting into an array, reversing the array,
    then joining it back together
  return true for words that pass the test
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
