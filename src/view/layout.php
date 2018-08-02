<!DOCTYPE html>
<html lang="nl ">
<head>
<!-- Global Site Tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-25278195-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-25278195-1');
</script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Hsc Thraso </title>
  <script>
    WebFontConfig = {
        google: {
          families: ['Open Sans: 400, 700']
          }
        };
        (function(d) {
          var wf = d.createElement('script'),
            s = d.scripts[0];
          wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
          wf.async = true;
          s.parentNode.insertBefore(wf, s);
        })(document);
  </script>
  <link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/calendar.css">
  <?php echo $css;?>
</head>
<body>
  <header>
    <div class="lighterBlue">
      <h1><a href="index.html" class="h1 whiteText">Hsc Thraso</a></h1>
      <nav>
        <ul class="navigatie whiteText">
          <li><a href="index.php" class="itemNav whiteText">home</a></li>
          <li><a href="index.php?page=clubinfo" class="itemNav whiteText">clubinfo</a></li>
          <li><a href="index.php?page=leden" class="itemNav whiteText">leden</a></li>
          <li><a href="index.php?page=kalender" class="itemNav whiteText">kalender</a></li>
          <li><a href="index.php?page=sponsor" class="itemNav whiteText">sponsor</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <div class="containerEigen">
      <?php if(!empty($_SESSION['info'])): ?><div class="alert alert-success"><?php echo $_SESSION['info'];?></div><?php endif; ?>
      <?php if(!empty($_SESSION['error'])): ?><div class="alert alert-danger"><?php echo $_SESSION['error'];?></div><?php endif; ?>

      <?php echo $content; ?>
    </div>
  </main>
  <aside class="darkBlue updateAside aside">
    <img src="assets/img/krul.png" alt="Thraso krul" width="193" height="254">
    <div class="flexFooter">
      <h2 class="h2 whiteText">contact us</h2>
      <div class="social">
        <a href="https://www.facebook.com/ThrasoHSC/"><img src="assets/img/fb.png" alt="Hsc Thraso on Facebook" width="47" height="47" class="facebook"></a>
        <a href="mailto:info@thraso.com"><img src="assets/img/email.png" alt="Email Thraso" width="47" height="47"></a>
      </div>
    <?php
    error_reporting(E_ALL);
    // functie spamcheck
    function spamcheck($field)
      {
      //filter_var() sanitizes the e-mail
      //address using FILTER_SANITIZE_EMAIL
      $field=filter_var($field, FILTER_SANITIZE_EMAIL);
     
      //filter_var() validates the e-mail
      //address using FILTER_VALIDATE_EMAIL
      if(filter_var($field, FILTER_VALIDATE_EMAIL))
        {
        return TRUE;
        }
      else
        {
        return FALSE;
        }
      }
    if($_SERVER['REQUEST_METHOD'] == 'POST') 
    {  
     
    // definieren variabelen
    $ontvanger = 'info@thraso.com'; // HIEW JOUW EMAIL INVULLEN
    $onderwerp_email = "Contactformulier"; // onderwerp wat in de email te zien is; tussen de "" evt zelf veranderen zoals je wilt
    $naam = $_POST['email'];
    $bericht = $_POST['tekst']; 
     
     
    // headers opmaken
    $headers  = 'MIME-Version: 1.0';
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
    $headers .= 'From: '.$naam;
     
     
    // body voor de email opmaken
    $body = "";
    $body .= "Naam: ";
    $body .= $naam;
    $body .= "\n";

    $body .= "Bericht: ";
    $body .= $bericht;
    $body .= "\n";
    // verwerking input checkbox
    // if(isset($_POST['newsletter']) &&
    //    $_POST['newsletter'] == 'yes')
    // {
    //    $body .= "Nieuwsbrief: Ja";
    //    $body .= "\n";
    // }
    // else
    // {
    //     $body .= "Nieuwsbrief: Nee";
    //     $body .= "\n";
    // }
    // mailcheck, wordt later gechecked
    $mailcheck = spamcheck($_POST['email']);
     
    // checken of een robot ons formulier bezoekt  
    if($_POST['robot'] != 'test_spambot') {
        die();				    
    } 
    //check of email geldig is en geldige input is geleverd
     
    elseif ($mailcheck==FALSE) {
        echo 'Ongeldige input emailveld<br /><br />';
    }
     
    else {
     
    // email verzenden 
    $formsent = mail($ontvanger, $onderwerp_email, $body, $headers);
     
    // echo's als email is verzonden
    if ($formsent){
      echo 'Uw bericht is successvol verstuurd!<br /><br />'; 
    }
    else{
      echo 'Sorry, maar er is iets misgegaan met het versturen, probeer het later nog eens.'; 
        }
      }
    }
    ?>
      <form action="" method="post" class="form">
        <input type="hidden" name="robot" value="test_spambot">
        <input type="email" class="inputMail whiteText" placeholder="info@thraso.com" name="email">
        <input type="text" class="inputMail whiteText" placeholder="typ hier je tekst" name="tekst">
        <input type="submit" name="verstuur" value="verstuur" class="button whiteText">
      </form>
      <p class="tekst whiteText">senior Thijs Vandorpe: +32 479 61 64 05‬</p>
      <p class="tekst whiteText">Schachtentemmer: +32 499 25 76 88‬</p>
    </div>
  </aside>
  <footer class="lighterBlue updateFooter">
    <p class="whiteText footerTekst">Hsc Thraso &copy; Copyright 2018</p>
  </footer>
  </body>

  <script type="text/javascript" src="components/jquery/jquery.min.js"></script>
  <script type="text/javascript" src="components/underscore/underscore-min.js"></script>
  <script type="text/javascript" src="components/bootstrap2/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="components/jstimezonedetect/jstz.min.js"></script>
  <script type="text/javascript" src="js/language/nl-NL.js"></script>
  <script type="text/javascript" src="js/calendar.js"></script>
  <script type="text/javascript" src="js/app.js"></script>
  <script type="text/javascript">
    		var disqus_shortname = 'hscthraso'; // required: replace example with your forum shortname
    		(function() {
    			var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    			dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    		})();
    	</script>
  <?php echo $js;?>
  </html>
