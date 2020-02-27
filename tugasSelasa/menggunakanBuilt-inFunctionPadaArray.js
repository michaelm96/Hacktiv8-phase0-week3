function dataHandling2(args2){
    var nama = args2[1]
    var nama2 = nama + "Elsharawy"
    var provinsi = args2[2]
    var provinsi2 = "Provinsi " + provinsi
    args2.splice(1,1, nama2);
    args2.splice(2,1, provinsi2);
    args2.splice(4,2, "Pria", "SMA Internasional Metro");
    console.log(args2);
    var bulan = args2[3].split("/");
    var bulan2 = bulan[1];
    switch(parseInt(bulan2)){
        case 1:
		    console.log('Januari');
		break;
        case 2:
            console.log('Februari');
        break;
        case 3:
		    console.log('Maret');
        break;
        case 4:
		    console.log('April');
        break;
        case 5:
		    console.log('Mei');
        break;
        case 6:
		    console.log('Juni');
        break;
        case 7:
		    console.log('Juli');
        break;
        case 8:
		    console.log('Agustus');
        break;
        case 9:
		    console.log('September');
        break;
        case 10:
		    console.log('Oktober');
        break;
        case 11:
		    console.log('November');
        break;
        case 12:
		    console.log('Desember');
		break;
    }
    // bulan.sort(function(value1, value2) { return value1 > value2 });
    bulan3 = bulan.sort(function(a,b){
        return b-a
    });
    console.log(bulan3);
    bulan4 = args2[3].split("/").join("-");
    console.log(bulan4);
    var nama15 = args2[1].slice(0,15);
    console.log(nama15);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);