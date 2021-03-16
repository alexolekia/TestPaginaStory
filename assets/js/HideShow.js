var counterimg = 0;


$(document).ready(function () {
    //alert("La página cuenta con controles de estilo interactuables. Explora para elegir un tema adecuado. \n Todas las imágenes serán reemplazadas, así que ellas no cuentan para la paleta de colores")
    $(".HideShow").click(function (e) {
        //$(".Controles").toggle();
        $(".ControlDeEstilo").toggle();
    });
    $(".imgSource").click(function (e) {
        //$(document).getElementById("img").src = "http://placebear.com/600x600";

        var imgsourcetype = counterimg % 3;
        var seedimg = counterimg+345;
        document.querySelectorAll('img').forEach((el) => {
            var w = el.width;
            var h = el.height;
            

            
            if (imgsourcetype == 0) {
                el.src = `http://placebear.com/${w}/${h}`;
            } else if (imgsourcetype == 1) {
                el.src = `http://placekitten.com/${w}/${h}`;
            } else {
                el.src = `https://picsum.photos/seed/${seedimg}/${w}/${h}?random=8`;
                seedimg += 1;
            };
            
            
        });
        counterimg+=1;
    });

    configurarInicio();
    $(".icono").click(function (e) {
        $("#navbar ul").toggleClass("lista-small");
    });


    function configurarInicio() {
        var urlPath = window.location.pathname;
        $("nav a").each(function () {
            var href = $(this).attr("href");
            var indice = urlPath.length - href.length;
            if (urlPath.substring(indice) === href) {
                $(this).closest('li').addClass("active");
            };
        });
    };


});
