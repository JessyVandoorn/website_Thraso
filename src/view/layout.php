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
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/style.css">
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
    <picture>
      <source  type="image/webp" srcset="assets/img/webp/krul.webp" >
      <img src="assets/img/krul.png" alt="Thraso krul" width="193" height="254">
    </picture>
    <div class="flexFooter">
      <h2 class="h2 whiteText">contact us</h2>
      <div class="social">
        <a href="https://www.facebook.com/ThrasoHSC/"><img src="assets/img/fb.png" alt="Hsc Thraso on Facebook" width="47" height="47" class="facebook"></a>
        <a href="mailto:info@thraso.com"><img src="assets/img/email.png" alt="Email Thraso" width="47" height="47"></a>
      </div>
      <p class="tekst whiteText">senior Thijs Vandorpe: +32 479 61 64 05‬</p>
      <p class="tekst whiteText">Schachtentemmer: +32 479 66 79 52</p>
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
  <?php echo $js;?>
  </html>
