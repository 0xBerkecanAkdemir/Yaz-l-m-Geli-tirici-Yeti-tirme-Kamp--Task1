let sayi1 = Number(prompt('1.sayıyı giriniz'))
let sayi2 = Number(prompt('2.sayıyı giriniz'))
let toplam1 = 0
let toplam2 = 0
for(let i=1;i<sayi1;i++){
    if(sayi1%i==0){
        toplam1=toplam1+i;
    }
}
for(let i=1;i<sayi2;i++){
    if(sayi2%i==0){
        toplam2=toplam2+i;
    }
}
if(sayi1==toplam2 && sayi2 ==toplam1){
    console.log('Bu 2 sayı Arkadaştır')
}else{
    console.log('Arkadaş değildir')
}