function evaluarDaltonismo() {
    var respuesta1 = document.getElementById("respuesta1").value;
    var respuesta2 = document.getElementById("respuesta2").value;
    var resultado = document.getElementById("resultado");

    if (respuesta1 == "5" && respuesta2 == "6") {
        resultado.textContent = "No tienes indicios de daltonismo.";
    } else if (respuesta1 == "no" && respuesta2 == "no") {
        resultado.textContent = "Podrías tener acromatopsia (dificultad para ver colores).";
    } else if (respuesta1 == "9" && respuesta2 == "2") {
        resultado.textContent = "Podrías tener daltonismo de tipo deuteranopia (dificultad para ver verde).";
    } else {
        resultado.textContent = "Hay indicios de daltonismo, pero no está claro el tipo. Consulta a un especialista.";
    }
}
