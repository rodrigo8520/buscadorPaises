
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
   
   var tr ='<tr><td>'+"1"+'</td>  <td>'+"2"+'</td>  <td>'+"3"+'</td>  <td>'+"4"+'</td></tr>';
   $("tbody").append(tr);

   // $("#btnBuscar").click(function(){

   /*     var add = "<tr>" 
            add+= "<td> </td>"
            add+= "<td> </td>"
            add+= "<td> </td>"
            add+= "<td> </td>"
            add+= "</tr>"
    */
            
   // })

}   


       


