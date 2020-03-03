function angkaPalindrome(num) {
    var numStr = num.toString();
    for(var i = 0; i < numStr.length; i++){
        if(numStr[i] === numStr[numStr.length - 1]){
            var toNum = parseInt(numStr);
            console.log(typeof numStr);
        }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001