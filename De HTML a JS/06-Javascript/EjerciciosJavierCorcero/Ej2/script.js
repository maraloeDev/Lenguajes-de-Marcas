var pares = document.getElementById("pares");
var impares = document.getElementById("impares");

pares.onmouseover = function paresMouseOver() {
    pares.style.backgroundColor = "white";
    impares.style.backgroundColor = "grey";
};

impares.onmouseover = function imparesMouseOver() {
    impares.style.backgroundColor = "white";
    pares.style.backgroundColor = "grey";
};