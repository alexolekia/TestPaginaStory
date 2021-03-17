var words = ["conocimiento", "información","experiencia","datos","inteligencia","saber"];
var i = 0;
var j = 0;
var how_many_words = words.length;
var textologo=["OLEKIA_","OLEKIA"]

const changer = document.getElementById("changer");
const olekia_texto_inicial = document.getElementById("OlekiaTextoInicial");

function _changeText() {
    i = (i + 1) % how_many_words;
    
    changer.innerHTML = words[i];

    //console.log(words[i]);
};

function _animate_logo() {
    j = (j + 1) % 2;

    olekia_texto_inicial.innerHTML = textologo[j];
}

var navbar = document.querySelector("#navbar");

function crazy()  {
    console.log(navbar);
};

$(document).ready(function () {
    setInterval("_changeText()", 1500);
    //setInterval(_animate_logo, 500);
    //setInterval(crazy, 500);
});