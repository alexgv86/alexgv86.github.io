	
<?php
require("class.phpmailer.php");
require("class.smtp.php");
$bg[1] = 'images/emi7.jpg';
$bg[2] = 'images/fondo.jpg';
$bg_a_usar = $bg[rand(1,2)];
echo '<style type="text/css">
        body{
            background-image: url(\''. $bg_a_usar .'\');
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            text-align: center;
            text-size-adjust: 72;
        }
        </style>';


    if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
        #Correo del destinatario
        //$mail_to = "info@vgoldenjets.com";
        
        # Envío de datos
        $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = trim($_POST["phone"]);
        $message = trim($_POST["message"]);
        $departure = trim($_POST["departure"]);
        $arrival = trim($_POST["arrival"]);
        $passengers = trim($_POST["passengers"]);
        $dateDeparture = trim($_POST["dateDeparture"]);
        $dateArrive = trim($_POST["dateArrive"]);
        $subject = $dateDeparture." | ".$departure." to ".$arrival." ".$passengers." passenger/s";
        
        if (!filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($departure) OR empty ($arrival)) {
            # Establecer un código de respuesta y salida.
            http_response_code(400);
            echo "Please complete the form and try again.";
            exit;
        }
        
        # Contenido del correo
        $content = "Nombres: $name"."<br>";
        $content .= "E-mail: $email"."<br>";
        $content .= "Telefono: $phone"."<br>";
        $content .= "Mensaje: $message"."<br>";
        $content .= "From: $departure"."<br>";
        $content .= "To: $arrival"."<br>";
        $content .= "Passengers: $passengers"."<br>";
        $content .= "Date departure: $dateDeparture"."<br>";
        $content .= "Date arrive: $dateArrive"."<br>";
 
        # Encabezados de correo electrónico.
        $headers = "From: $name <$email>";
 
        # Envía el correo.
        /*$success = mail($mail_to, $subject, $content, $headers);
        if ($success) {
            # Establece un código de respuesta 200 (correcto).
            http_response_code(200);
            echo "Thank you! Your message has been sent. You will be redirected.";
            sleep(5);
            echo "<script> window.location='index.html'; </script>";
        } else {
            # Establezce un código de respuesta 500 (error interno del servidor).
            http_response_code(500);
            echo "Oops! Something went wrong, we couldn't send your message. You will be redirected.";
            sleep(15);
            echo "<script> window.location='index.html'; </script>";
        }
 
    } else {
        # No es una solicitud POST, establezce un código de respuesta 403 (prohibido).
        http_response_code(403);
        echo "There was a problem with your shipment, please try again.";
    }*/
    
#SMTP
/*require("class.phpmailer.php");
require("class.smtp.php");*/

$mail = new PHPMailer();

$mail->IsSMTP();                                      // set mailer to

$mail->Host = "mail.vgoldenjets.com";  // specify main and backup server
$mail->SMTPAuth = true;     // turn on SMTP authentication
$mail->Username = "info@vgoldenjets.com";  // SMTP username
$mail->Password = "infoComeWhisky"; // SMTP password

$mail->From = $email;
$mail->FromName = $name;        // remitente
$mail->AddAddress("info@vgoldenjets.com", "info");        // destinatario

$mail->AddReplyTo("info@vgoldenjets.com", "reply to");    // responder a

$mail->WordWrap = 50;     // set word wrap to 50 characters
$mail->IsHTML(true);     // set email

$mail->Subject = $dateDeparture." | ".$departure." to ".$arrival." ".$passengers." passenger/s";
$mail->Body    = $content;
$mail->AltBody = "This is the body in plain text for non-HTML mail clients";
}
if(!$mail->Send())
{
   echo "Message could not be sent. <p>";
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
}

echo "Message has been sent";
sleep(5);
echo "<script> window.location='index.html'; </script>";
 
?>
