window.onload = function() {
    for (let i = 1; i <= 4; i++)
        for (let j = 1; j <= 12; j++)
            document.write(
                "<img src='trasera.jpg' " +
                "id='" + i + "/" + j + ".jpg' " +
                "onmouseenter='voltearCarta(this, true)' " +
                "onmouseleave='voltearCarta(this, false)'>");
}

function voltearCarta(elemento, mostrar) {
    if (mostrar) elemento.src = elemento.id;
    else elemento.src = "trasera.jpg";
}