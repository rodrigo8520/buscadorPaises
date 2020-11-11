
<div>
<?php 
    #<h1>Prueba <%= Request.querystring("variableDePrueba") %></h1>
    
      //$hola = $HTTP_GET_VARS ["variableDePrueba"];
      #echo "Pruebalo " + $hola;

      include("pagEjemplo.php");
      include("index.html");
      saludo();

      if($_POST['variablePrueba'] == '1') {
        echo "";
      }

      //if (variableDePrueba == 1 ) {
     //     echo "chaoooooo";
      //}
      
?>
</div>
