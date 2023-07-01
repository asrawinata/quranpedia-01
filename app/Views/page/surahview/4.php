<?php include('base.php'); ?>
<script type="text/javascript">
      var surah_name = 'An-Nisaa',
        surah_number = 4,
        surah_ayahs = 176;
    </script>
    <script src="<?php echo base_url();?>assets/js/jquery.min.js"></script>
    <script async src="<?php echo base_url();?>assets/js/main.js"></script>
    <script async src="<?php echo base_url();?>assets/js/bootstrap.min.js"></script>
    <script type="text/javascript">
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
          navigator.serviceWorker.register('<?php echo base_url();?>sw.js');
        });
      }
    </script>