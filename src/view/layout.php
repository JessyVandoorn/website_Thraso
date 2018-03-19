<!DOCTYPE html>
<html lang="en">
<head>
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
  <!-- <link rel="stylesheet" href="css/bootstrap.css"> -->
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
          <li><a href="" class="itemNav whiteText">clubinfo</a></li>
          <li><a href="index.php?page=leden" class="itemNav whiteText">leden</a></li>
          <li><a href="index.php?page=kalender" class="itemNav whiteText">kalender</a></li>
          <li><a href="index.php?page=sponsor" class="itemNav whiteText">sponsor</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <div class="container">
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
      <form action="" class="form">
        <input type="email" class="inputMail" placeholder="info@thraso.com">
        <input type="submit" name="verstuur" value="verstuur" class="button whiteText">
      </form>
      <p class="tekst whiteText">senior Milan Vandermeulen: +32 471 137 217</p>
      <p class="tekst whiteText">Schachtentemmer: +32 471 021 886</p>
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
    		var disqus_shortname = 'thrasocalender'; // required: replace example with your forum shortname
    		(function() {
    			var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    			dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    		})();
    	</script>
  <?php echo $js;?>
  </html>
