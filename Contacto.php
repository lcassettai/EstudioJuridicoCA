<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Felicidades</title>
  </head>
  <body>
    <?php
      $nombre = $_POST["nombre"];
      $email = $_POST["correo"];
      $mensaje = $_POST["mensaje"];
      $imagen = $_POST["imagen"];
      $tel = $_POST["telefono"];
      $para = "estudiojuridicocassettaiacosta@gmail.com";
      $asunto = "Consula";

      $contenido = "
      <b>Nombre del remitente : </b></b> ".$nombre."<br />
      <b>E-mail : </b>".$email."<br/></b>
      <b>Telefono : </b>".$tel."<br/></b>
      <b>Mensaje : </b>".$mensaje."<br/></b>
      ".$imagen."
      ";

      $headers =  'MIME-Version: 1.0' . "\r\n";
      $headers .= 'From: '.$nombre.' <'.$email.'>' . "\r\n";
      $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

      mail($para,$asunto,$contenido,$headers)

     ?>
  </body>
</html>
