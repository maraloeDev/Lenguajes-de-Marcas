window.onload=function(){

    document.getElementById('enviarInfo').onclick=procesarDatos
    document.getElementById('mostrar').onclick=function(){
        document.getElementById('infoOculta').style.display=''
    }

}


function Persona(nombre, telefono, correo, edad, poblacion){
    
        this.nombre=nombre;
        this.telefono=telefono;
        this.correo=correo;
        this.edad=edad;
        this.poblacion=poblacion;
    
        this.rellenar=guardarInfo
    }



function procesarDatos(){
    campos= document.getElementsByTagName('input');

    if(campos[3].value<18){
        alert('Error. El usuario debe ser mayor de edad')
    }else{
        per=new Persona(campos[0].value, campos[1].value, campos[2].value, campos[3].value, campos[4].value)
        per.rellenar();
    }
    

}


function guardarInfo(){
    var informacion;

    informacion=per.nombre + ' ' + per.telefono + ' ' + per.correo + ' ' + per.edad + ' ' + per.poblacion + '<br>'; 


    document.getElementById('infoOculta').innerHTML+=informacion
    document.getElementById('infoOculta').style.display='none'
}