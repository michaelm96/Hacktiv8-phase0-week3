function dataHandling(args){
    for(var i=0; i < args.length; i++){
        var id = args[i][0];
        var nama = args[i][1];
        var tempat = args[i][2];
        var tl = args[i][3];
        var hobi = args[i][4];
        console.log("Nomor ID: " + id);
        console.log("Nama Lengkap: " + nama);
        console.log("TTL: " + tempat + " " + tl);
        console.log("Hobi: " + hobi);
        console.log("");
    }
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input));