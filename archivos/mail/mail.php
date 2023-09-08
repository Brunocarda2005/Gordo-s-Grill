<?php
   
   //vars
   $nombre =  $_POST['name'];
   $msj = $_POST['msj'];
   
   //data del correo
   $destinatario = 'brunocardamone03@gmail.com';
   $asunto = 'Tengo un mensaje que quiero que lean';
   $carta = " /n Mi nombre es : $nombre /n $msj ";    
   @mail($destinatario , $asunto , $carta);
   
?>
