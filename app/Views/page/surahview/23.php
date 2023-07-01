<?php include('base.php'); ?>
<script type="text/javascript">
      var surah_name = 'Al-Muminoon',
        surah_number = 23,
        surah_ayahs = 118;
    </script>
    <script src="../assets/js/jquery.min.js"></script>
    <script async src="../assets/js/main.js"></script>
    <script async src="../assets/js/bootstrap.min.js"></script>
    <script type="text/javascript">
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
          navigator.serviceWorker.register('../sw.js');
        });
      }
    </script>