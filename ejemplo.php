
<div>
<?php 
    #<h1>Prueba <%= Request.querystring("variableDePrueba") %></h1>
    
      //$hola = $HTTP_GET_VARS ["variableDePrueba"];
      #echo "Pruebalo " + $hola;

      include("pagEjemplo.php");
      saludo();
      
     // if($_POST['variablePrueba'] == '1') {
      $item1 = $_REQUEST['variableDePrueba'];
      echo $item1;
     // }
      
      //if (variableDePrueba == 1 ) {
     //     echo "chaoooooo";
      //}
      
?>
</div>
