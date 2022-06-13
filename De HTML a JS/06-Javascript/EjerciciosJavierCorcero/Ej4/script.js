var factor = 0;

do {
    numero1 = prompt("Introduzca un numero: ");
} while (isNaN(numero1));



document.write('<table border="1px solid">')
for (var i = 1; i < 11; i++) {
    document.write("<tr>")
    document.write(parseInt(numero1));
    document.write("<td>*</td>");
    document.write(parseInt(factor++));
    document.write("<td>=</td>");
    document.write(numero * factor);
    document.write("</tr>");
}
document.write('</table>')