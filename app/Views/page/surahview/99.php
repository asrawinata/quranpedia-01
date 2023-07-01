<?php include('base.php'); ?>
<script type="text/javascript">
      var surah_name = 'Az-Zalzala',
        surah_number = 99,
        surah_ayahs = 8;
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