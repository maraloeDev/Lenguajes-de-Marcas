window.onload=function(){
    document.getElementById('pulsar').onclick=generarTabla
}

function generarTabla(){
    filas=parseInt(document.getElementById('filas').value);
    columnas=parseInt(document.getElementById('columna').value);

    tabla='<table border=1>';
    for(i=0;i<filas;i++){

        tabla+='<tr>'
        for(j=0;j<columnas;j++){
            tabla+='<td>a</td>'
        }
        tabla+='</tr>'
    }
     tabla+='</table>'
    document.getElementById('resultado').innerHTML=tabla;

}