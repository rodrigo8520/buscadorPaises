
/*$(document).ready(function () {
    alert("Hola soy un mensaje");
    document.getElementById("mostrarTabla").style.display="block";
    
});*/

$(function () {
    alert("Hola soy un mensaje");

    $("#mostrarTabla").show();
});

function mostrarDiv() {
    
    alert("Hola estoy buscando ctm");
    $("tbody").empty();
   
    //Para agregar una linea al apretar btn buscar
   var tr ='<tr><td>'+"1"+'</td>  <td>'+"2"+'</td>  <td>'+"3"+'</td>  <td>'+"4"+'</td></tr>';
   $("tbody").append(tr);
    // Para agregar varias lineas 
   $("tbody").before(tr, tr, tr);
   

}   


       


