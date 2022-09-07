let sayi = Number(prompt('Sayı giriniz'))
let toplam =0;

for(let i=1;i<sayi;i++){
    if(sayi%i==0){
        toplam = toplam+i
    }
}
if(toplam ==sayi){
    console.log(sayi+'Mükemmel sayidir')
}else{
    console.log(sayi+'Mükemmel sayi DEĞİLDİR');
}