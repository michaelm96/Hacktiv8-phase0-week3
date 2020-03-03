function hitungJumlahKata(kalimat) {
    var kataCounter = 0;
    for (var i = 0; i <= kalimat.length; i++){
        if(kalimat[i] === kalimat[kalimat.length]){
            kataCounter++
        } else if (kalimat[i] === " "){
            kataCounter++
        }
    }
    return kataCounter;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5