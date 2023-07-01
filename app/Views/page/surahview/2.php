<?php include('base.php'); ?>
  <script type="text/javascript">
      var surah_name = 'Al-Baqara',
        surah_number = 2,
        surah_ayahs = 286;
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