
	<div>
        <h1>Prueba <%= Request.querystring("variableDePrueba") %></h1>
		<?php
		
			$hola = $HTTP_GET_VARS ["variableDePrueba"];
			echo "Pruebalo " + $hola;
		?>
    </div>
