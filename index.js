function isPalindrome(str) {
  // Write your algorithm here
  const strArr = str.split("")
  const reversedrArr = str.split("").reverse()
  let a = 0
  for (let i in reversedrArr){
    
    if (reversedrArr[i] === strArr[i]){
       a++;
    }
  }
  if (a===strArr.length){
    return true;
  }
  else{
    return false;
  }
}

/* 
  Add your pseudocode here
*/

/*
-splitting the string
-reversing the string
-taking each letter by for loop
-if condition for comparing each character
-incraese a
-if the character is equal to the lenghth return true 
-otherwise return false
 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("lal"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
