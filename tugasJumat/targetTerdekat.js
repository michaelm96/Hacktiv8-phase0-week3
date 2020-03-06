function targetTerdekat(arr) {
    var arrO = 0
    var arrX = []
    for(var i = 0; i<arr.length; i++){
        if(arr[i]==="o"){
            arrO = i
        } else if(arr[i]==="x"){
            arrX.push(i)
        }
    }

    if (arrX.length === 0) return 0;

    var hasil = arrX[0];
    for (var k = 0; k < arrX.length; k++){
        if (arrX[k] > 0) hasil = arrX[k];
    }

    for (var j=0; j<arrX.length; j++){
        if(arrO > arrX[j]){
            var temp = arrO - arrX[j];
        }else if(arrO < arrX[j]){
            var temp = arrX[j] - arrO;
        }
        if (hasil > temp){
            hasil = temp;
        } else if (hasil == 0) {
            return temp - hasil;
        }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat(['x', ' ', ' ', ' ', ' ', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2