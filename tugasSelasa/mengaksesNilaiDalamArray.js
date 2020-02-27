function balikString(str){
    var char = ""
    for(var i=str.length-1; i >= 0 ; i--){
        char+=str[i];
    }
    return char;
}

console.log(balikString("hello world"));
console.log(balikString("hello"));
console.log(balikString("abcdefghijklmnopqrstuvwxyz"));