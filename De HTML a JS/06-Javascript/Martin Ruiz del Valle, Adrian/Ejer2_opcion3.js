window.onload = function()
{
    document.getElementById("ingresar").onclick = crearParticipante;
    document.getElementById("listar").onclick = verParticipantes;
}

var Participantes = new Array(400); //Número grande en el valor máximo del Array para que no haya problemas de espacio con la gente que se apunte.
var contador = 0;

class Participante
{
    constructor(nombre, telefono, correo, edad, poblacion)
    {
        this.nombre = nombre;
        this.telefono = telefono;
        this.edad = edad;
        this.correo = correo;
        this.poblacion = poblacion;
    }
    
    mostrarParticipante()
    {
        return this.nombre + " - " + this.telefono + " - " + this.edad + " - " + this.correo + " - " + this.poblacion;
    }
}

function crearParticipante(Evento)
{
    if(document.getElementById("age").value >= 18)
    {
        p = new Participante(document.getElementById("name").value, document.getElementById("tf").value,document.getElementById("email").value,document.getElementById("age").value,document.getElementById("pobla").value);

        Participantes[obtenerPosicion()] = p.mostrarParticipante();
        contador++;
        alert("Gracias por inscribirte");
        vaciarCasillas(); //Evitamos posibles dobles guardados seguidos borrando los campos
    }
    else
        alert("Hay que ser mayor de 18 años para poder inscribirse");
}

function verParticipantes(Evento)
{
    texto = "";
    for(var i = 0; i < contador;i++)
        texto += Participantes[i] + "<br/>"; 
    document.getElementById("participantes").innerHTML = texto;
}

function vaciarCasillas()
{
    document.getElementById("name").value = ""; 
    document.getElementById("tf").value = "";
    document.getElementById("email").value = ""
    document.getElementById("age").value = "";
    document.getElementById("pobla").value = "";
}

function obtenerPosicion()
{
    var i = 0;
    
    if(contador > 0)
        for(; i < contador;i++); //Calcula la posición del Array a insertar
    else
        i = 0;
    
    return i;
}