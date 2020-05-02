
   var a= document.getElementById('box').innerHTML="News Update";
    //
     var p=0,text;
text="Uniglobe SS/College,Kamladi-Ganeshthan,Kathmandu(G2)";
    function typing(){
    if(p<text.length){
    document.getElementById('type').innerHTML += text.charAt(p);
    p++;
    setTimeout(typing,150);
}
}
typing();
