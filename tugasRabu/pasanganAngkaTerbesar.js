function pasanganTerbesar(num) {
    var numStr = num.toString()
  var newArr = []
  for (var i = 0; i < numStr.length - 1; i++) {
    newArr.push(numStr[i] + numStr[i + 1])
  }
  for (var j = 0; j < newArr.length; j++) {
    for (var k = 0; k < newArr.length; k++){
      if(newArr[k] < newArr[k+1]){
        var temp = newArr[k]
        newArr[k] = newArr[k+1]
        newArr[k+1] = temp
      }
    }
  }
  return parseInt(newArr[0]);
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
