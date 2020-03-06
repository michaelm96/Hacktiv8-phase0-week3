function groupAnimals(animals) {
  var newArrResult = []
  var alphabet = "abcdefghijklmnopqrstuvwxyz"
  for(var i=0;i<alphabet.length;i++){
    var newArr =[]
    for (var j=0; j<animals.length; j++){
        if(animals[j][0] == alphabet[i]){
          newArr.push(animals[j])
        }
    }
    if (newArr.length > 0) {
      newArrResult.push(newArr);
    }
  }
  return newArrResult
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]