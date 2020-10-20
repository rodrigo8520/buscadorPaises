
/*$(document).ready(function () {
    alert("Hola soy un mensaje");
    document.getElementById("mostrarTabla").style.display="block";
    
});*/

$(function () {
    alert("Hola soy un mensaje");

    $("#mostrarTabla").show();
});

function mostrarDiv() {
    //document.getElementById("mostrarTabla").style.display="block";
    alert("Hola estoy buscando ctm");
}   

function abla() {
    
    $("#mostrarTabla").hide();
} 
/*$(document).ready(function () {
    $('#btnBuscar').on('click', function () {
        $('#tabla tbody').empty()
    });
});*/

$(function(){
    var caca = function(){
    $("#mostrarTabla").hide();   
    };

    var btn = document.getElementById('btnBuscar');
    btn.addEventListener("click", caca);
    
})