<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Quranpedia</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    <!-- Bootstrap icons-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" type="text/css" />
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="assets/css/styles.css" rel="stylesheet" />
    <!-- <link href="assets/css/indexx.css" rel="stylesheet" /> -->

    <!-- head from previous -->
</head>
<!-- Navigation-->
<!-- <nav class="navbar navbar-light bg-light static-top">
            <div class="container">
                <a class="navbar-brand" href="#!">Quranpedia</a> -->
<!-- <a class="btn btn-primary" href="#signup">Sign Up</a> -->
<!-- </div>
        </nav> -->
<!-- Masthead-->
<header class="masthead">
    <div class="container position-relative">
        <div class="row justify-content-center">
            <div class="col-xl-6">
                <div class="text-center text-white">
                    <!-- Page heading-->
                    <h3 class="mb-5">Quranpedia is an website built by students of Software Engineering Telkom Unviersity, Quranpedia Explain Quran term with Quran verses and Hadits and Wikipedia </h3>

                    <!-- <div class="input-group">
                        <input type="search" class="form-control rounded" placeholder="Surah apa yang ingin anda telusuri?" aria-label="Search" aria-describedby="search-addon" />
                        <a href="search" class="btn btn-primary" role="button">Cari</a>
                    </div> -->
                    <!-- <a href="daftar_surah" class="btn btn-primary" role="button">Daftar Surah</a> -->
                </div>
            </div>
        </div>
    </div>
</header>

<!-- SURAH LIST -->
<div class="container">
    <!-- <ul class="nav nav-pills">

        <li><a data-toggle="pill" href="#" onclick="resetData('Semua')">Semua</a></li>
        <li><a data-toggle="pill" href="#" onclick="sortDataByCategory('Makkah')">Makkah</a></li>
        <li><a data-toggle="pill" href="#" onclick="sortDataByCategory('Madinah')">Madinah</a></li>
    </ul> -->
</div>

<body class="homepage">
    <!-- Bagian-bagian lain yang ada sebelumnya -->

    <!-- <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="sortDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Sortir
        </button>
        <ul class="dropdown-menu" aria-labelledby="sortDropdown">
            <li><a class="dropdown-item" href="#" onclick="sortDataByCategory('Makkah')">Makkah</a></li>
            <li><a class="dropdown-item" href="#" onclick="sortDataByCategory('Madinah')">Madinah</a></li>
        </ul>
    </div> -->

    <!-- <div class="container">
        <ul class="tabs">
            <a class="dropdown-item" href="#" onclick="resetData('Semua')">Semua</a></li>
            <a class="dropdown-item" href="#" onclick="sortDataByCategory('Makkah')">Makkah</a></li>
            <a class="dropdown-item" href="#" onclick="sortDataByCategory('Madinah')">Madinah</a></li>
        </ul>
    </div> -->


    <!-- <script type="text/javascript">
        // Function to sort data by category
        function sortDataByCategory(category) {
            var dataElements = document.getElementsByClassName('listsurat');
            for (var i = 0; i < dataElements.length; i++) {
                var dataElement = dataElements[i];
                var subtitleElement = dataElement.getElementsByClassName('subtitle')[0];
                var subtitleText = subtitleElement.innerText || subtitleElement.textContent;

                if (subtitleText.includes(category)) {
                    dataElement.style.display = 'block';
                } else {
                    dataElement.style.display = 'none';
                }
            }
        }

        // Function to reset and show all data
        function resetData() {
            var dataElements = document.getElementsByClassName('listsurat');
            for (var i = 0; i < dataElements.length; i++) {
                dataElements[i].style.display = 'block';
            }
        }
    </script> -->


    <div class="containerlistsurat">
        <?php foreach ($surah as $q) : ?>
            <?php
            $sura = isset($_GET['sura']) ? $_GET['sura'] : 0;
            $nama = isset($_GET['nama']) ? $_GET['nama'] : '';
            if ($sura == 0)

            ?>

            <div class="listsurat">

                <div class="row">

                    <div class="col-12 text-center">
                    </div>

                </div>

                <div class="index-main-surah-list">
                    <!-- <div class="table-row"> -->
                    <div class="table trio"><a href="<?= base_url('/page/' . $q['index']); ?>">
                            <div class="table-row">
                                <div>
                                    <span class="index-surah-no"><?= $q['index'];  ?></span>
                                    <div class="main">
                                        <span class="title"><?= $q['name_indonesia'];  ?> <span class="index-surahname-ar"><?= $q['name_arabic'];  ?></span></span><span class="subtitle"><?= $q['type'];  ?> <span style="float: right"><?= $q['ayas'];  ?> Ayat</span></span>
                                    </div>
                                </div>
                            </div>
                        </a></div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>

    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function() {
            sortDataByCategory(''); // Call the function with the desired category
        });
    </script>


</body>

<script type="text/javascript">
    var surah_number, surah_ayahs;
</script>
<script src="/js/jquery.min.js"></script>
<script src="/js/main.js"></script>
<script type="text/javascript">
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('sw.js');
        });
    }
</script>



<!-- Footer-->
<!-- <footer class="footer bg-light">
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
</footer> -->
<!-- Bootstrap core JS-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- Core theme JS-->
<script src="js/scripts.js"></script>
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
<!-- * *                               SB Forms JS                               * *-->
<!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
</body>

</html>