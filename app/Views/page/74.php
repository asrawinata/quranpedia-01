<?= $this->extend('layout/navbar');  ?>
<?= $this->section('content');  ?>
<nav class="navbar navbar-expand-lg navbar-dark bg-gold fixed-top">
  <div class="container">
    <a class="navbar-brand">
      Al-Muddaththir <span class="nav-slash">/</span> المدثر <span class="nav-surahname-en"><span class="nav-slash">/</span> The Cloaked One</span></a><button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span id="chevron-navbar-icon" class="chevron-down-nav"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="SurahSelector" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Surah <span id="chevron-selector-surah" class="chevron-down"></span></a>
          <div class="dropdown-menu" id="surah-list" aria-labelledby="SurahSelector"></div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="AyahSelector" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ayah <span id="chevron-selector-ayah" class="chevron-down"></span></a>
          <div class="dropdown-menu ayah-selector" aria-labelledby="AyahSelector"></div>
        </li>

      </ul>
    </div>
  </div>
</nav>

<script type="text/javascript">
  var surah_name = 'Al-Muddaththir',
    surah_number = 74,
    surah_ayahs = 56;
</script>
<?= $this->endSection();  ?>