let sayac = 0;

for(let sayi=2;sayi<=1000;sayi++){
    let kontrol = 0;
    for(let i=2;i<sayi;i++){
        if(sayi%i==0){
            kontrol = 1;
            break;
        }
    }
    if(kontrol==1){
        console.log(sayi +'asal değildir')
    }else{
        console.log(sayi +'asal sayıdır')
    }
}
