
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
   //$("tbody").before(tr, tr, tr);
   
   $("tbody tr").html('<table><tr><td>1</td><td>2</td><td>3</td> <td>4</td></tr></table>');
    var $tablaBody = $("#tablaBody");
}   

jQuery.ajax({
	url: "https://restcountries.eu/rest/v2/name/aruba?fullText=true",
	type: "GET",
	async:false,
	data: {
		
		accion: function(data){
			var $tablaBody = $('#tablaBody');
			$.each(data, function(i, item){
				$tablaBody.append('<table><tr><td>'+ item.1 +'</td><td>'+ item.2 +'</td><td>'+ item.3 +'</td> <td>'+ item.4 +'</td></tr></table>');
			})
		}


		/*name: "Aruba",
		callingCodes: "297",
		capital: "Oranjestad",
		region: "Americas",*/
					
	},
	error: function(jqXHR, textStatus, errorThrown){ 
			//alert("jqXHR.status: "+ jqXHR.status + "- Error Cod. 442"); 
			retorno = ""; 
			sin_error = false;
			
	},
	success: function(regreso){
		$("#tablaBody").text(JSON.name).append(tr)
		//alert(regreso);
					
	}
});

