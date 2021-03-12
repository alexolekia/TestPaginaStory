$(document).ready(function () {
    alert("La página cuenta con controles de estilo interactuables. Explora para elegir un tema adecuado. \n Todas las imágenes serán reemplazadas, así que ellas no cuentan para la paleta de colores")
    $(".HideShow").click(function (e) {
        $(".Controles").toggle();
    });

});