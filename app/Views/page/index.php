<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Quranpedia</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="og:site_name" content="" />
    <meta name="og:title" content="" />
    <meta name="og:image" content="<?php echo base_url();?>/assets/images/banner.png" />
    <meta name="og:url" content="" />
    <meta name="og:type" content="website" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
   
    <link rel="preload" as="font" href="<?php echo base_url();?>/assets/fonts/IndoPak.woff2" type="font/woff2" crossorigin />
    <link rel="stylesheet" href="<?php echo base_url();?>/assets/css/boostrap.mint.css" />
    <link rel="stylesheet" href="<?php echo base_url();?>/assets/css/stylex.css" />
    <link rel="dns-prefetch" href="#" />
    <link rel="manifest" href="<?php echo base_url();?>/manifest.json" />
    <link rel="icon" type="image/x-icon" href="<?php echo base_url();?>/assets/images/faviconm.ico" />
    <link href="<?php echo base_url();?>/assets/css/indexx.css" rel="stylesheet" />
  </head>

  <body class="homepage">

    
    <?php foreach ($surah as $q) : ?>
    <?php 
    $sura = isset($_GET['sura']) ? $_GET['sura'] : 0;
    $nama = isset($_GET['nama']) ? $_GET['nama'] : '' ;
    if($sura == 0)  
      
    ?>




    <div class="container">
      <div class="row">
        <div class="col-12 text-center">

          <div class="last-read">
            <a href="#" class="last-read-link"> Last Read: <span class="last-read-surah"></span>, Ayah <span class="last-read-ayah"></span> &rarr; </a>
          </div>
        </div>
      </div>
      <div class="index-main-surah-list">
        
        <!-- <div class="table-row"> -->
          <div class="table trio">

            <a href="<?= base_url('/page/' . $q['index']); ?>"
            


              ><div class="table-row">
                <div>
                  <span class="index-surah-no"><?= $q['index'];  ?></span>
                  <div class="main">
                    <span class="title"><?= $q['name_indonesia'];  ?> <span class="index-surahname-ar"><?= $q['name_arabic'];  ?></span></span
                    ><span class="subtitle"><?= $q['type'];  ?> <span style="float: right"><?= $q['ayas'];  ?> Ayat</span></span>
                  </div>
                </div>
              </div></a>
  
          </div>
        </div>
      </div>
    </div>
    <?php endforeach; ?>
  </body>
  <script type="text/javascript">
    var surah_number, surah_ayahs;
  </script>
  <script src="/js/jquery.min.js"></script>
  <script src="/js/main.js"></script>
  <script type="text/javascript">
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js');
      });
    }
  </script>
</html>

