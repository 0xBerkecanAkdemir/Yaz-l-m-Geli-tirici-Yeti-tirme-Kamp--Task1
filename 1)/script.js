let sayiAlma = Number(prompt('Bir sayı giriniz?'))
let sonuc = true;
for(let i=2; i<=Math.floor(sayiAlma/2);i++){
    if(sayiAlma%i==0){
        sonuc=false;
        break;
    }
}
if(sonuc){
    alert(sayiAlma +'asaldır.');
}else{
    alert(sayiAlma +'ASAL DEĞİLDİR.')
}