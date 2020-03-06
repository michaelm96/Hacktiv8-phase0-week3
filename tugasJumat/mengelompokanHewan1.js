function groupAnimals(animals) {
    var result = []
    
    for (var i=0; i<animals.length; i++){
        var flag = false 
        for (let j = 0; j < result.length; j++) {
            if (result[j][0][0] === animals[i][0]){
                flag = true 
                result[j].push(animals[i])
            }
        }
        if (!flag){
            result.push([animals[i]])
        }
    }
    for(var k = 0; k<result.length; k++){
        for(var l = 0; l<result.length; l++){
            if(result[l+1] < result[l]){
                var temp = result[l]
                result[l] = result[l+1]
                result[l+1] = temp
            }
        }
    }
    return result;
}
  
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]