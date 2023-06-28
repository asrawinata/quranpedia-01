<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Quranpedia</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Bootstrap icons-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" type="text/css" />
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="<?php echo base_url();?>/assets/css/styles.css" rel="stylesheet" />
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

  <header class="masthead">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="text-center text-white">
                            <!-- Page heading-->
                            <h3 class="mb-5">Quranpedia is an website built by students of Software Engineering Telkom Unviersity, Quranpedia Explain Quran term with Quran verses and Hadits and Wikipedia </h3>
                           
                            <div class="input-group">
                                <input type="search" class="form-control rounded" placeholder="Surah apa yang ingin anda telusuri?" aria-label="Search" aria-describedby="search-addon" />
                                <a href="search" class="btn btn-primary" role="button">Cari</a>
                              </div>
                              <a href="daftar_surah" class="btn btn-primary" role="button">Daftar Surah</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
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
  <footer class="footer bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul class="list-inline mb-2">
                            <li class="list-inline-item"><a href="#!">About</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="#!">Contact</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="#!">Terms of Use</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="#!">Privacy Policy</a></li>
                        </ul>
                        <p class="text-muted small mb-4 mb-lg-0">&copy; Your Website 2023. All Rights Reserved.</p>
                    </div>
                    <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item me-4">
                                <a href="#!"><i class="bi-facebook fs-3"></i></a>
                            </li>
                            <li class="list-inline-item me-4">
                                <a href="#!"><i class="bi-twitter fs-3"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#!"><i class="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
</html>

