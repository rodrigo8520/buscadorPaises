
/*$(document).ready(function () {
    alert("Hola soy un mensaje");
    document.getElementById("mostrarTabla").style.display="block";
    
});*/

$(function () {
    //alert("Hola soy un mensaje");

    $("#mostrarTabla").show();
    
});

async function mostrarDiv() {
    
	alert("Hola estoy buscando ctm");
	await consultaApi();

	return false;

	//$("tbody").empty();
   //Para agregar una linea al apretar btn buscar
   //var tr ='<tr><td>'+"1"+'</td>  <td>'+"2"+'</td>  <td>'+"3"+'</td>  <td>'+"4"+'</td></tr>';
   //$("tbody").append(tr);
    // Para agregar varias lineas 
   //$("tbody").before(tr, tr, tr);
   
   //$("tbody tr").html('<table><tr><td>1</td><td>2</td><td>3</td> <td>4</td></tr></table>');
    
}   

async function consultaApi(){
	console.log("chupalo");
	$.ajax({
		url: "https://restcountries.eu/rest/v2/name/aruba?fullText=true",
		type: "GET",
		async:true,
		data: {
			
			accion: function(data){
				var $tablaBody = $('#tablaBody');
				$.each(data, function(i, item){
					//$tablaBody.append('<table><tr><td>'+ item.1 +'</td><td>'+ item.2 +'</td><td>'+ item.3 +'</td> <td>'+ item.4 +'</td></tr></table>');
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
				sin_error = false;console.log("Error");
				
		},
		success: function(regreso){
			//$("#tablaBody").text(JSON.name).append(tr);

			console.log("pruebaaaa");
			alert(regreso[0].name);
			

						
		}
	});
}

async function EjemploAjax(){
	
	//alert("hola");
	
	$.ajax({
		url: "ejemplo.php",
		type: "GET",
		data: {
			//parametros a la url
			variableDePrueba: "BLABLABLABLABLA"
		},
		error: function(jqXHR, textStatus, errorThrown){ 
			// si ocurre un error en la peticion, errores 500
				retorno = ""; 
				sin_error = false;console.log("eRRore EjemploAjax");
				
		},
		success: function(regreso){
			//resultado de la peticion
			console.log(regreso);
			//$("#textoRetorno").html(regreso);


						
		}
	});

}

function variablePrueba(){

$.ajax({
	url: "ejemplo.php",
	type: "GET",
	data: {
		//parametros a la url
		variableDePrueba: "1"
	},
	error: function(jqXHR, textStatus, errorThrown){ 
		// si ocurre un error en la peticion, errores 500
			retorno = ""; 
			sin_error = false;console.log("eRRore variablePrueba");
			
	},
	success: function(regreso){
		//resultado de la peticion
		console.log("variablePrueba paso");
		$("#vPrueba").html(regreso);
		console.log(regreso);

		//console.log(regreso);
		//$("#textoRetorno").html(regreso);


					
	}
});

}