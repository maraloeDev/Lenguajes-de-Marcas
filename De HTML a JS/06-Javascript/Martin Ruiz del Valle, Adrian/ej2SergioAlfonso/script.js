let estudiantes = new Array();

function inscribirClick() {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);

    if (isNaN(edad)) {
        alert("Debes escribir tu edad");
        return;
    }

    if (edad < 18) {
        alert("No se permiten menores");
        return;
    }

    estudiantes.push({ nombre: nombre, edad: edad });

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
}

function listarClick() {
    let lista = document.getElementById("lista");
    let innerHTML = "";

    for (const estudiante of estudiantes)
        innerHTML += "<p>Nombre: " + estudiante.nombre + " Edad: " + estudiante.edad + "</p>";

    lista.innerHTML = innerHTML;
}