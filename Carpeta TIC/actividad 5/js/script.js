function calcular() {
    let b, c, d, e, f, g, h;
    b = parseInt(document.getElementById("numero1").value, 10);
    c = parseInt(document.getElementById("numero2").value, 10);
    d = b + c;
    e = b - c;
    f = b * c;
    g = b / c;
    h = b % c;
    document.getElementById("texto").innerHTML = "<br> El numero 1 es: " + b + "<br> El numero 2 es: " + c + "<br> La suma es: " + d + "<br> La resta es: " + e + "<br> La multiplicacion es: " + f + "<br> La division es: " + g + "<br> El resto es: " + h;
}