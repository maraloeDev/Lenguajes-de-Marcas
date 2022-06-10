window.onload=function(){

    var valores='';
    var directorio='cartas/'
    var valor='';
    for(i=1;i<=4;i++){
        for(j=1;j<=12;j++){
            valor+='<img src=' + '"' + 'cartas/trasera.jpg' + '"' + ' id='+ i + '-' + j+'>' 
        }
        
    }

    document.getElementById('cartas').innerHTML=valor;

    /*lores=document.getElementsByTagName('img')

    for(m=0;m<valores.length;m++){
        valores[m].onmouseover=mostrarCarta
        valores[m].onmouseout=nomostrar
    }*/
}


function mostrarCarta(event){

     carpeta=event.target.id.charAt(0);
     imagen=event.target.id.charAt(2);
     if(event.target.id.charAt(3)!=''){
         imagen+=event.target.id.charAt(3)
     }
     event.target.src='cartas/' + carpeta + '/' + imagen + '.jpg'
}


function nomostrar(event){
    event.target.src='cartas/' + 'trasera.jpg'
}


