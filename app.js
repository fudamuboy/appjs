

  let dizel=24.53 , benzin=22.35 , LPG=10.11; 
 const newLine="\r\n"; // ceci est notre retour a la ligne 
 const  yakitSecenekleri="1.dizel"+ newLine+"2.benzin"+newLine+ "3.LPG"+newLine+"CHOISISEZ VOTRE PREFERENCE DS LE TYPE";

 const  yakitTipi=prompt( yakitSecenekleri);
 let yakitLitresi=Number(prompt("Entrez votre litre:"));// litresinizi girin lutfen
 let bakiyeniz=Number(prompt("Entrez votre solde:"));// bakiyeniz de girin lutfen

 

if(yakitTipi=="1"){ // first type dizel

    let fiyat=dizel*yakitLitresi;

    if(fiyat<bakiyeniz)
    {
       
        alert("Satis oldu"
            +newLine+"bakiye:"+bakiyeniz+"TL"
            +newLine+"Kalanustu:"+(bakiyeniz-fiyat)+"TL");
    }else{
        alert("Satis olmadi yetersiz bakiye"
            +newLine +"fiyat:"+ fiyat+"TL"
            +newLine+"bakiyeniz:"+bakiyeniz+"TL"
            +newLine+"Kalanpara:"+(fiyat-bakiyeniz)+"TL");
    }


}
else if(yakitTipi=="2"){ // second type benzin 
    let fiyat=benzin*yakitLitresi;

    if(fiyat<bakiyeniz)
    {
       
        alert("Satis oldu"
            +newLine+"bakiye:"+bakiyeniz
            +newLine+"Kalanustu:"+(bakiyeniz-fiyat));
    }else{
        alert("Satis olmadi yetersiz bakiye"
            +newLine +"fiyat:"+ fiyat
            +newLine+"bakiyeniz:"+bakiyeniz
            +newLine+"Kalanpara:"+(fiyat-bakiyeniz));
    }





}else if(yakitTipi=="3"){// Third choose 
    let fiyat=LPG*yakitLitresi;

    if(fiyat<bakiyeniz)
    {
       
        alert("Satis oldu"
            +newLine+"bakiye:"+bakiyeniz
            +newLine+"Kalanustu:"+(bakiyeniz-fiyat));
    }else{
        alert("Satis olmadi yetersiz bakiye"
            +newLine +"fiyat:"+ fiyat
            +newLine+"bakiyeniz:"+bakiyeniz
            +newLine+"Kalanpara:"+(fiyat-bakiyeniz));
    }




} else {
    alert("yanlis secimi yaptiniz");
}

//console.log(yakitTipi);d