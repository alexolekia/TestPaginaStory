$(document).ready(function () {
    alert("La p�gina cuenta con controles de estilo interactuables. Explora para elegir un tema adecuado. \n Todas las im�genes ser�n reemplazadas, as� que ellas no cuentan para la paleta de colores")
    $(".HideShow").click(function (e) {
        $(".Controles").toggle();
    });

});