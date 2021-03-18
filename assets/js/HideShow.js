
const LogoOlekiaColores = document.querySelector("#LogoOlekiaColores");
$(document).ready(function () {

    $(".icono").click(function (e) {
        $("#navbar ul").toggleClass("lista-small");
    });


});

var hashdata = "Inicio";

$(document).on('scroll', function (e) {
    $('section').each(function () {

        if ($(this).offset().top < window.pageYOffset + 5
            && $(this).offset().top +
            $(this).height() > window.pageYOffset + 5
        ){
            hashdata = $(this).attr('id');
            if (hashdata === "second") {
                hashdata = "Servicios";
            }
            if (hashdata === "temp") {
                hashdata = "Metodologia";
            }

            if (hashdata === "MyV") {
                hashdata = "MisionyVision";
            }
        }
    });

    

    $("nav a").each(function () {
        var href = $(this).attr("href").replace("#", "");;
        console.log(hashdata,href);
        if (hashdata === href) {
            $(this).closest('li').addClass("active");
        } else {
            $(this).closest('li').removeClass("active");
        };
    });
    



});