var participante
var participantes = new Array
var numParticipante = 0


window.onload = function(){
    document.getElementById("enviar").onclick=function(){
        if (parseInt(document.getElementById("edad").value) < 18) {
            alert("El participante tiene que ser mayor de edad")
        }else{
            alert(document.getElementById("nombre").value)
            participante = {
                nombre:document.getElementById("nombre").value,
                telefono:document.getElementById("telefono").value,
                correo:document.getElementById("correo").value,
                edad:document.getElementById("edad").value,
                poblacion:document.getElementById("poblacion").value
            }
            participantes[numParticipante] = participante
            alert("Participante registrado")
            numParticipante += 1
        }
        

    }
    document.getElementById("listar").onclick=function(){
        var contenido = "<br>"
        for (var i = 0; i < participantes.length; i++) {
            contenido += "Participante " + (i+1) + ":<br>"
            contenido += "Nombre: " + participantes[i].nombre + "<br>"
            contenido += "Telefono: " + participantes[i].telefono + "<br>"
            contenido += "Correo: " + participantes[i].correo + "<br>"
            contenido += "Edad: " + participantes[i].edad + "<br>"
            contenido += "Poblacion: " + participantes[i].poblacion + "<br>"
        }
        document.getElementById("listado").innerHTML = contenido
    }
}
