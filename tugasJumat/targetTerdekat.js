function targetTerdekat(arr) {
    var arrO = 0
    var arrX = []
    var dif = []
    var res
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "o") {
            arrO += i;
        } else if (arr[i] === "x") {
            arrX.push(i);
        }
    }
    for (var j = 0; j < arrX.length; j++) {
        if (arrO < arrX[j]) {
            dif.push(arrX[j] - arrO);
        } else if (arrO > arrX[j]) {
            dif.push(arrO - arrX[j]);
        }
    }
    // var min = Infinity;
    // for (var k = 0; k < dif.length; k++) {
    //     if (dif[k] < min) {
    //         min = dif[k]
    //     }
    // }
    // res = min;
    // if (arrX.length == 0) {
    //     return 0
    // }
    // return res

    for(var k = 0; k<dif.length;k++){
        for(var l =0;l<dif.length;l++){
            if(dif[l] > dif[l+1]){
                var temp = dif[l]
                dif[l] = dif[l+1]
                dif[l+1] = temp
            }
        }
    }
    if(arrX.length == 0){
        return 0
    }
    return dif[0]
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat(['x', ' ', ' ', ' ', ' ', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
