
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
$(document).ready(function () {
    $('#btnBuscar').on('click', function () {
        $('#tabla tbody').empty()
    });
});