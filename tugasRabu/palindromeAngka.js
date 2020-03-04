function angkaPalindrome(num) {
    while(num != 0){
      var balik=""
      num++
      var strNum = num.toString()
      for (var i=strNum.length-1; i>=0; i--){
        balik+=strNum[i]
      }
      if (balik == num){
        return num
      }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(1234567890)); // 181
  console.log(angkaPalindrome(1000)); // 1001