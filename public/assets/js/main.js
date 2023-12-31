var audio_url_main = '#',
  audio_url_arabic = audio_url_main + 'audio-ayah-arabic',
  audio_url_english = audio_url_main + 'audio-ayah-english/',
  audio_url_words = audio_url_main + 'audio-words-new/',
  sajda_surahs = [7, 13, 16, 17, 19, 22, 25, 27, 32, 38, 41, 53, 84, 96],
  sajda_ayahs = [206, 15, 50, 109, 58, 18, 60, 26, 15, 24, 38, 62, 21, 19];
function font(a, c) {
  if ('wa' == a) {
    var e = parseInt($('.wa').css('font-size'), 10);
    if ('increase' == c) {
      var b = 112 <= e ? '112px' : e + 2 + 'px';
      $('.wa').css('font-size', b);
      $('.ar-c-f').text('(' + b + ')');
    } else 'decrease' == c && ((b = 16 >= e ? '16px' : e - 2 + 'px'), $('.wa').css('font-size', b), $('.ar-c-f').text('(' + b + ')'));
    localStorage.setItem('arabic_font_value', b);
  } else
    'wt' == a
      ? ((e = parseInt($('.wt').css('font-size'), 10)),
        'increase' == c
          ? ((b = 70 <= e ? '70px' : e + 2 + 'px'), $('.wt').css('font-size', b), $('.tr-c-f').text('(' + b + ')'))
          : 'decrease' == c && ((b = 8 >= e ? '8px' : e - 2 + 'px'), $('.wt').css('font-size', b), $('.tr-c-f').text('(' + b + ')')),
        localStorage.setItem('translation_font_value', b))
      : 'wl' == a
      ? ((e = parseInt($('.wl').css('font-size'), 10)),
        'increase' == c
          ? ((b = 70 <= e ? '70px' : e + 2 + 'px'), $('.wl').css('font-size', b), $('.tl-c-f').text('(' + b + ')'))
          : 'decrease' == c && ((b = 8 >= e ? '8px' : e - 2 + 'px'), $('.wl').css('font-size', b), $('.tl-c-f').text('(' + b + ')')),
        localStorage.setItem('transliteration_font_value', b))
      : 'f-t' == a &&
        ((e = parseInt($('.f-t').css('font-size'), 10)),
        'increase' == c ? ((b = e + 2 + 'px'), $('.f-t').css('font-size', b)) : 'decrease' == c && ((b = e - 2 + 'px'), $('.f-t').css('font-size', b)),
        localStorage.setItem('full_tr_font_value', b));
}
function toggle_text(a) {
  'wt' == a
    ? ((a = document.getElementById('translation')),
      'Visible' == a.innerHTML
        ? ((a.innerHTML = 'Hidden'), $('.wt').css('display', 'none'), localStorage.setItem('toggle_translation_value', 'none'), localStorage.setItem('toggle_translation_change', 'Hidden'))
        : ((a.innerHTML = 'Visible'), $('.wt').css('display', 'block'), localStorage.setItem('toggle_translation_value', 'block'), localStorage.setItem('toggle_translation_change', 'Visible')))
    : 'wl' == a
    ? ((a = document.getElementById('transliteration')),
      'Visible' == a.innerHTML
        ? ((a.innerHTML = 'Hidden'), $('.wl').css('display', 'none'), localStorage.setItem('toggle_transliteration_value', 'none'), localStorage.setItem('toggle_transliteration_change', 'Hidden'))
        : ((a.innerHTML = 'Visible'), $('.wl').css('display', 'block'), localStorage.setItem('toggle_transliteration_value', 'block'), localStorage.setItem('toggle_transliteration_change', 'Visible')))
    : 'font_type' == a &&
      ((a = document.getElementById('font')),
      'IndoPak' == a.innerHTML
        ? ((a.innerHTML = 'Uthmani'), $('.wa').css('font-family', 'Uthmani'), localStorage.setItem('toggle_font_value', 'Uthmani'), localStorage.setItem('toggle_font_change', 'Uthmani'))
        : 'Uthmani' == a.innerHTML && ((a.innerHTML = 'IndoPak'), $('.wa').css('font-family', 'IndoPak'), localStorage.setItem('toggle_font_value', 'IndoPak'), localStorage.setItem('toggle_font_change', 'IndoPak')));
}
function toggle_theme_mode() {
  var a = document.getElementById('theme_mode');
  'Light' == a.innerHTML
    ? ((a.innerHTML = 'Dark'),
      document.getElementById('darktheme') ? $('#darktheme').prop('disabled', !1) : $('head').append('<link rel="stylesheet" href="../assets/css/dark.css" id="darktheme"/>'),
      localStorage.setItem('toggle_theme_mode_disabled', 'false'),
      localStorage.setItem('toggle_theme_mode_change', 'Dark'))
    : ((a.innerHTML = 'Light'), $('#darktheme').prop('disabled', !0), localStorage.setItem('toggle_theme_mode_disabled', 'true'), localStorage.setItem('toggle_theme_mode_change', 'Light'));
}
function toggle_display_mode() {
  var a = document.getElementById('display_mode');
  'Word By Word' == a.innerHTML
    ? ((a.innerHTML = 'Normal'),
      document.getElementById('normalmode') ? $('#normalmode').prop('disabled', !1) : $('head').append('<link rel="stylesheet" href="../assets/css/normal.css" id="normalmode"/>'),
      localStorage.setItem('toggle_display_mode_disabled', 'false'),
      localStorage.setItem('toggle_display_mode_change', 'Normal'))
    : ((a.innerHTML = 'Word By Word'), $('#normalmode').prop('disabled', !0), localStorage.setItem('toggle_display_mode_disabled', 'true'), localStorage.setItem('toggle_display_mode_change', 'Word By Word'));
}
function toggle_auto_scroll() {
  var a = document.getElementById('auto_scroll');
  'Yes' == a.innerHTML ? ((a.innerHTML = 'No'), localStorage.setItem('auto_scroll', 'No')) : ((a.innerHTML = 'Yes'), localStorage.setItem('auto_scroll', 'Yes'));
}
function toggle_reciter() {
  var a = document.getElementById('reciter');
  'Mishary Rashid Alafasy' == a.innerHTML
    ? ((a.innerHTML = 'Yasser Al Dossari'), localStorage.setItem('reciter_name', 'Yasser Al Dossari'), localStorage.setItem('reciter', '2'))
    : 'Yasser Al Dossari' == a.innerHTML
    ? ((a.innerHTML = 'Mahmoud Khalil Al-Husary'), localStorage.setItem('reciter_name', 'Mahmoud Khalil Al-Husary'), localStorage.setItem('reciter', '3'))
    : 'Mahmoud Khalil Al-Husary' == a.innerHTML && ((a.innerHTML = 'Mishary Rashid Alafasy'), localStorage.setItem('reciter_name', 'Mishary Rashid Alafasy'), localStorage.setItem('reciter', '1'));
}
function loadAyahs(a, c, e) {
  localStorage.getItem('reciter');
  $.getJSON('../assets/surahs/data/' + a + '.json', function (b) {
    var d,
      f,
      g = Object.keys(b).length;
    for (d = c; d <= e; d++) {
      var k = b[d].w.length,
        h = b[d].a.g,
        m = "<div class='col-11 s-a " + a + "' id=" + d + "><div class=a><div class='w a-n-a'><h3 class=a-n>" + d + '</h3></div>',
        l = '';
      for (f = 0; f <= k - 1; f++) {
        var n = b[d].w[f].b,
          p = b[d].w[f].h;
        word_arabic = b[d].w[f].c;
        word_transliteration = b[d].w[f].d;
        word_translation = b[d].w[f].e;
        l += '<span class=sw data-ts-mishary=' + n + ' data-ts-husary=' + p + '><span class=wl>' + word_transliteration + '</span><span class=wa>' + word_arabic + '</span><span class=wt>' + word_translation + '</span></span>';
      }
      sajda_surahs.includes(a) && ((f = sajda_surahs.indexOf(a)), d == sajda_ayahs[f] && (l += "<span class='sw sajda-icon'></span>"));
      h =
        m +
        l +
        (d == g
          ? "</div><div class='col-12 f-t'><h3 class=a-n>" + d + '</h3> ' + h + "</div><br></div><div class='col-1 a-n-b'> <h3 class=a-n>" + d + '</h3> </div>'
          : "</div><div class='col-12 f-t'><h3 class=a-n>" + d + '</h3> ' + h + "</div><hr></div><div class='col-1 a-n-b'> <h3 class=a-n>" + d + '</h3> </div>');
      $('.full-surah').append(h);
    }
  });
}
function loadDuas(a, c, e) {
  $.getJSON('../assets/surahs/data/' + a + '.json', function (b) {
    var d,
      f,
      g = Object.keys(b).length;
    for (d = c; d <= e; d++) {
      var k = b[d].w.length,
        h = b[d].a.g,
        m =
          "<div class='col-11 s-a " +
          a +
          "' id=" +
          d +
          " style='flex: 0 0 97.5%; max-width: 97.5%;'><div style='text-align: center; padding-bottom: 20px;'><a class='surah-name-duas' target='_blank' href=/" +
          a +
          '/' +
          d +
          '>Surah ' +
          surah_names[a] +
          ', Ayah ' +
          d +
          '</a></div><div class=a><span></span>',
        l = '';
      for (f = 0; f <= k - 1; f++) {
        var n = b[d].w[f].b;
        word_arabic = b[d].w[f].c;
        word_transliteration = b[d].w[f].d;
        word_translation = b[d].w[f].e;
        l += '<span class=sw data-ts=' + n + '><span class=wl>' + word_transliteration + '</span><span class=wa>' + word_arabic + '</span><span class=wt>' + word_translation + '</span></span>';
      }
      console.log(m + l + (d == g ? "</div><div class='col-12 f-t'>" + h + '</div><br></div>' : "</div><div class='col-12 f-t'>" + h + '</div><hr></div>'));
    }
  });
}
var bottom_nav_surahtime = document.getElementById('bottom-nav-surahayah');
function playSurah(a, c) {
  var e = $('.s-a#' + c + ' .a');
  if (c <= a) {
    var b = function () {
      for (var a = $('.s-a#' + c + ' .a .sw').length, b = 0; b <= a; b++) {
        var d = b - 1,
          e = c - 1;
        if ('1' == k)
          var h = $('.s-a#' + c + ' .a')
            .children()
            .eq(b)
            .attr('data-ts-mishary');
        else
          '3' == k &&
            (h = $('.s-a#' + c + ' .a')
              .children()
              .eq(b)
              .attr('data-ts-husary'));
        h < audio.currentTime &&
          (0 < b &&
            $('.s-a#' + c + ' .a')
              .children()
              .eq(d)
              .children('.wa')
              .removeClass('wa-hover'),
          $('.s-a#' + c + ' .a')
            .children()
            .eq(b)
            .children('.wa')
            .addClass('wa-hover'),
          $('.s-a#' + e + ' .a')
            .children()
            .eq(b)
            .children('.wa')
            .removeClass('wa-hover'));
      }
    };
    e.addClass('ayah-hover');
    var d = localStorage.getItem('auto_scroll'),
      f = c + 1,
      g = ('00' + surah_number).slice(-3) + ('00' + c).slice(-3);
    f = ('00' + surah_number).slice(-3) + ('00' + f).slice(-3);
    var k = localStorage.getItem('reciter');
    g = audio_url_arabic + '-' + k + '/' + g + '.mp3';
    audio.currentTime = 0;
    audio.pause();
    audio.removeEventListener('timeupdate', b);
    audio.src = g;
    audio.load();
    audio.play();
    c < a && new Audio(audio_url_arabic + '-' + k + '/' + f + '.mp3');
    'Yes' == d && $('html, body').animate({ scrollTop: e.offset().top - 65 }, 1e3);
    ('1' != k && '3' != k) || audio.addEventListener('timeupdate', b);
    $('#audio').trigger('click');
    var h = 0;
    audio.addEventListener(
      'timeupdate',
      function () {
        c < a &&
          0.5 >= audio.duration - audio.currentTime &&
          (h || (audio.pause(), (audio.currentTime = 0), playSurah(a, c + 1), e.removeClass('ayah-hover'), $('.wa').removeClass('wa-hover'), audio.removeEventListener('timeupdate', b)), h++);
      },
      !1
    );
    $('.bismillah, .a, .sw, .f-t')
      .off('click.audio')
      .on('click.audio', function () {
        $('.play-pause-icon').removeClass('pause-icon');
        $('.play-pause-icon').addClass('play-icon');
        audio.pause();
      });
    $('.bottom-nav__item.bottom-nav-surahplayer2')
      .off('click.audio')
      .on('click.audio', function () {
        audio.paused
          ? ($('.play-pause-icon').removeClass('play-icon'), $('.play-pause-icon').addClass('pause-icon'), audio.play())
          : audio.paused || ($('.play-pause-icon').removeClass('pause-icon'), $('.play-pause-icon').addClass('play-icon'), audio.pause());
      });
    document.getElementById('bottom-nav-surahayah').innerHTML = '(Ayah ' + c + ')';
    audio.onended =
      c == a
        ? function () {
            audio.currentTime = 0;
            e.removeClass('ayah-hover');
            $('.wa').removeClass('wa-hover');
            $('.play-pause-icon').removeClass('pause-icon');
            $('.play-pause-icon').addClass('play-icon');
            $('#bottom-nav-surahayah').css('display', 'none');
            $('.bottom-nav__item.bottom-nav-surahplayer2')
              .off('click.audio')
              .on('click.audio', function () {
                $('.play-pause-icon').removeClass('play-icon');
                $('.play-pause-icon').addClass('pause-icon');
                $('#bottom-nav-surahayah').css('display', 'inline-block');
                playSurah(a, 1);
              });
          }
        : function () {
            h = 0;
            audio.currentTime = 0;
            e.removeClass('ayah-hover');
            $('.wa').removeClass('wa-hover');
          };
  }
}
function ResetSettings() {
  document.getElementById('reset-settings').innerHTML = 'Please refresh the page';
  window.localStorage.clear();
}
document.onkeydown = checkKey;
function checkKey(a) {
  a = a || window.event;
  '84' == a.keyCode ? toggle_theme_mode() : '70' == a.keyCode ? toggle_text('font_type') : '77' == a.keyCode && toggle_display_mode();
}
function modifyFonts() {
  var a = localStorage.getItem('arabic_font_value'),
    c = localStorage.getItem('translation_font_value'),
    e = localStorage.getItem('transliteration_font_value'),
    b = localStorage.getItem('toggle_font_change'),
    d = localStorage.getItem('toggle_font_value');
  setTimeout(function () {
    $('.wa').css('font-size', a);
    $('.wa').css('font-family', d);
    $('.wt').css('font-size', c);
    $('.wl').css('font-size', e);
    if (null != a || null != c || null != e) $('.ar-c-f').text('(' + a + ')'), $('.tr-c-f').text('(' + c + ')'), $('.tl-c-f').text('(' + e + ')');
    $('#font').length && (null === localStorage.getItem('toggle_font_change') ? $('#font').text('IndoPak') : $('#font').text(b));
  }, 200);
}
function saveLocation() {
  for (var a = 1; a <= surah_ayahs; a++) $('.s-a#' + a).isInViewport() && (localStorage.setItem('last_surah_name', surah_name), localStorage.setItem('last_surah_no', surah_number), localStorage.setItem('last_ayah_no', a - 1));
}
$.fn.isInViewport = function () {
  try {
    var a = $(this).offset().top;
  } catch (d) {}
  var c = a + $(this).outerHeight(),
    e = $(window).scrollTop(),
    b = e + $(window).height();
  return c > e && a < b;
};
(function (a) {
  a(document).ready(function () {
    var c = a('.fixed-top'),
      e = a('.bottom-nav'),
      b = 0,
      d;
    a(function () {
      a(window).scroll(function () {
        var f = a(this).scrollTop();
        b < f && f > c.outerHeight() && 'down' != d
          ? 700 > a(window).width() && (c.stop().fadeOut(), e.stop().fadeOut(), (d = 'down'))
          : b > f && 'up' != d
          ? 700 > a(window).width() && (c.stop().fadeIn(), e.stop().fadeIn(), (d = 'up'))
          : a(window).scrollTop() + a(window).height() == a(document).height() && 700 > a(window).width() && (c.stop().fadeIn(), e.stop().fadeIn(), (d = 'up'));
        b = f;
      });
    });
  });
})(jQuery);
var audio = $('#player')[0];
$('.container').on('click', '.a', function (a, c) {
  function e() {
    for (var a = $('.s-a#' + g + ' .a .sw').length, b = 0; b <= a; b++) {
      var c = b - 1,
        e = g - 1;
      if ('1' == d)
        var h = $('.s-a#' + g + ' .a')
          .children()
          .eq(b)
          .attr('data-ts-mishary');
      else
        '3' == d &&
          (h = $('.s-a#' + g + ' .a')
            .children()
            .eq(b)
            .attr('data-ts-husary'));
      h < audio.currentTime &&
        (0 < b &&
          $('.s-a#' + g + ' .a')
            .children()
            .eq(c)
            .children('.wa')
            .removeClass('wa-hover'),
        $('.s-a#' + g + ' .a')
          .children()
          .eq(b)
          .children('.wa')
          .addClass('wa-hover'),
        $('.s-a#' + e + ' .a')
          .children()
          .eq(b)
          .children('.wa')
          .removeClass('wa-hover'));
    }
  }
  c = a || window.event;
  c.cancelBubble = !0;
  c.stopPropagation && c.stopPropagation();
  var b = localStorage.getItem('auto_scroll'),
    d = localStorage.getItem('reciter');
  $('.a').removeClass('ayah-hover');
  $('.wa').removeClass('wa-hover');
  $('.f-t').removeClass('f-t-hover');
  var f = $(this).parent().attr('class').split(' ')[2],
    g = $(this).parent().attr('id'),
    k = parseInt(g) + 1;
  $('.s-a#' + g + ' .a').addClass('ayah-hover');
  var h = ('00' + f).slice(-3) + ('00' + g).slice(-3);
  f = ('00' + f).slice(-3) + ('00' + k).slice(-3);
  h = audio_url_arabic + '-' + d + '/' + h + '.mp3';
  $('html, body').animate({ scrollTop: $('.s-a#' + g + ' .a').offset().top - 50 }, 1e3);
  'Yes' == b &&
    ($('.bottom-nav__item.bottom-nav-surahplayer').css('display', 'none'),
    $('.bottom-nav__item.bottom-nav-surahplayer2').css('display', 'block'),
    $('.play-pause-icon').removeClass('play-icon'),
    $('.play-pause-icon').addClass('pause-icon'),
    $('.bottom-nav__item.bottom-nav-surahplayer')
      .off('click.audio')
      .on('click.audio', function () {
        audio.pause();
      }));
  audio.pause();
  audio.currentTime = 0;
  audio.removeEventListener('timeupdate', e);
  audio.src = h;
  audio.load();
  audio.play();
  new Audio(audio_url_arabic + '-' + d + '/' + f + '.mp3');
  ('1' != d && '3' != d) || audio.addEventListener('timeupdate', e);
  if ('Yes' == b)
    $('.bottom-nav__item.bottom-nav-surahplayer2')
      .off('click.audio')
      .on('click.audio', function () {
        audio.paused
          ? ($('.play-pause-icon').removeClass('play-icon'), $('.play-pause-icon').addClass('pause-icon'), audio.play())
          : audio.paused || ($('.play-pause-icon').removeClass('pause-icon'), $('.play-pause-icon').addClass('play-icon'), audio.pause());
      });
  'Yes' == b && ($('#bottom-nav-surahayah').css('display', 'inline-block'), (document.getElementById('bottom-nav-surahayah').innerHTML = '(Ayah ' + g + ')'));
  audio.onended = function () {
    $('.a').removeClass('ayah-hover');
    $('.wa').removeClass('wa-hover');
    $('.f-t').removeClass('f-t-hover');
    audio.removeEventListener('timeupdate', e);
    if ('Yes' == b) {
      var a = parseInt(g) + 1;
      $('.s-a#' + a).length && playSurah(surah_ayahs, a);
    } else $('.play-pause-icon').removeClass('pause-icon'), $('.play-pause-icon').addClass('play-icon'), audio.pause(), (audio.currentTime = 0);
  };
});
$('.container').on('click', '.sw', function (a, c) {
  c = a || window.event;
  c.cancelBubble = !0;
  c.stopPropagation && c.stopPropagation();
  $('.a').removeClass('ayah-hover');
  $('.wa').removeClass('wa-hover');
  $('.f-t').removeClass('f-t-hover');
  var e = $(this).parent().parent().attr('class').split(' ')[2],
    b = $(this).parent().parent().attr('id'),
    d = $(this).index();
  $('.s-a#' + b + ' .a')
    .children()
    .eq(d)
    .children('.wa')
    .addClass('wa-hover');
  e = e + '/' + ('00' + e).slice(-3) + '_' + ('00' + b).slice(-3) + '_' + ('00' + d).slice(-3);
  e = audio_url_words + e + '.mp3';
  $('.bottom-nav__item.bottom-nav-surahplayer')
    .off('click.audio')
    .on('click.audio', function () {
      audio.pause();
    });
  audio.pause();
  audio.src = e;
  audio.load();
  audio.play();
  audio.onended = function () {
    audio.pause();
    audio.currentTime = 0;
    $('.a').removeClass('ayah-hover');
    $('.wa').removeClass('wa-hover');
    $('.f-t').removeClass('f-t-hover');
  };
});
$('.container').on('click', '.f-t', function (a, c) {
  c = a || window.event;
  c.cancelBubble = !0;
  c.stopPropagation && c.stopPropagation();
  $('.a').removeClass('ayah-hover');
  $('.wa').removeClass('wa-hover');
  $('.f-t').removeClass('f-t-hover');
  var e = $(this).parent().attr('class').split(' ')[2],
    b = $(this).parent().attr('id');
  $('.s-a#' + b + ' .f-t').addClass('f-t-hover');
  b = ('00' + e).slice(-3) + ('00' + b).slice(-3);
  ('00' + e).slice(-3);
  e = audio_url_english + b + '.mp3';
  $('.bottom-nav__item.bottom-nav-surahplayer')
    .off('click.audio')
    .on('click.audio', function () {
      audio.pause();
    });
  audio.pause();
  audio.currentTime = 0;
  audio.src = e;
  audio.load();
  audio.play();
  audio.onended = function () {
    $('.a').removeClass('ayah-hover');
    $('.wa').removeClass('wa-hover');
    $('.f-t').removeClass('f-t-hover');
  };
});
$('.bottom-nav-surahplayer').on('click', function () {
  var a = parseInt($('.full-surah').children('.s-a').first().attr('id'));
  playSurah(surah_ayahs, a);
  $('.bottom-nav-surahplayer').css('display', 'none');
  $('.bottom-nav-surahplayer2').css('display', 'block');
  $('.play-pause-icon').removeClass('play-icon');
  $('.play-pause-icon').addClass('pause-icon');
  $('#bottom-nav-surahayah').css('display', 'inline-block');
  $(this).off('click');
});
$('#audio').on('click', function () {
  audio.play();
});
$('#SettingsModal').on('shown.bs.modal', function () {
  $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no');
});
$('#SettingsModal').on('hidden.bs.modal', function () {
  $('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, shrink-to-fit=no');
});
$('#chevron-navbar-icon').on('click', function () {
  $(this).toggleClass('chevron-down-nav chevron-up-nav');
});
$('#SurahSelector').on('click', function () {
  $('#chevron-selector-surah').toggleClass('chevron-down chevron-up');
});
$('#AyahSelector').on('click', function () {
  $('#chevron-selector-ayah').toggleClass('chevron-down chevron-up');
});
$('.back-to-ayah').on('click', function () {
  $('html, body').animate({ scrollTop: $('.ayah-hover').offset().top - 50 }, 1e3);
});
$('#modal-about-content').load('assets/about.html');
$('#surah-list').load('../assets/surahs.html');
$(window).on('load', function (a) {
  a = localStorage.getItem('toggle_theme_mode_change');
  var c = localStorage.getItem('toggle_theme_mode_disabled');
  'true' == c ? $('#darktheme').prop('disabled', !0) : 'false' == c && $('head').append('<link rel="stylesheet" href="../assets/css/dark.css" id="darktheme"/>');
  $('#theme_mode').length && (null === localStorage.getItem('toggle_theme_mode_change') ? $('#theme_mode').text('Light') : $('#theme_mode').text(a));
  if ('' == location.pathname.split('/').slice(-1)[0]) {
    if (null != localStorage.getItem('last_surah_no')) {
      a = localStorage.getItem('last_surah_name');
      c = localStorage.getItem('last_surah_no');
      var e = localStorage.getItem('last_ayah_no');
      $('.last-read').css('display', 'block');
      $('.last-read-surah').text(a);
      0 == e ? ((e = 1), $('.last-read-ayah').text(e), $('.last-read-link').attr('href', c)) : ($('.last-read-ayah').text(e), $('.last-read-link').attr('href', c + '#' + e));
    }
  } else {
    null == localStorage.getItem('auto_scroll') && localStorage.setItem('auto_scroll', 'Yes');
    a = localStorage.getItem('auto_scroll');
    $('#auto_scroll').text(a);
    null == localStorage.getItem('reciter') && (localStorage.setItem('reciter', '1'), localStorage.setItem('reciter_name', 'Mishary Rashid Alafasy'));
    localStorage.getItem('reciter');
    a = localStorage.getItem('reciter_name');
    $('#reciter').text(a);
    a = localStorage.getItem('toggle_display_mode_change');
    c = localStorage.getItem('toggle_display_mode_disabled');
    'true' == c ? $('#normalmode').prop('disabled', !0) : 'false' == c && $('head').append('<link rel="stylesheet" href="../assets/css/normal.css" id="normalmode"/>');
    $('#display_mode').length && (null === localStorage.getItem('toggle_display_mode_change') ? $('#display_mode').text('Word By Word') : $('#display_mode').text(a));
    for (a = 1; a <= surah_ayahs; a++) $('.ayah-selector').append('<a class=d-i data-l=' + a + '>' + a + '</a>');
    $('.d-i').on('click', function () {
      var a = $(this).attr('data-l');
      $('#' + a).length ? $('html, body').animate({ scrollTop: $('#' + a).offset().top - 30 }, 1e3) : ($(location).attr('href', surah_number), (window.location.hash = '#' + a), location.reload());
    });
    $(window).scroll(function () {
      clearTimeout($.data(this, 'saveLocation'));
      $.data(
        this,
        'saveLocation',
        setTimeout(function () {
          saveLocation();
        }, 250)
      );
    });
    $(window).scroll(function () {
      audio.paused || ($('.ayah-hover').isInViewport() ? $('.back-to-ayah').css('display', 'none') : $('.back-to-ayah').css('display', 'block'));
    });
    991 < $(window).width() &&
      $('.dropdown').hover(
        function () {
          $(this).find('.dropdown-menu').stop(!0, !0).delay(100).fadeIn(100);
        },
        function () {
          $(this).find('.dropdown-menu').stop(!0, !0).delay(100).fadeOut(100);
        }
      );
    if (window.location.hash) {
      var b = window.location.hash.substr(1);
      if (b.includes('-')) {
        var d = !1;
        a = b.split('-');
        c = parseInt(a[0]);
        var f = parseInt(a[1]);
        1 > c ? (c = 1) : f > surah_ayahs ? (f = surah_ayahs) : c > f && (c = f);
        loadAyahs(surah_number, c, f);
        f < surah_ayahs && $('.full-surah').after("<div class='col-12 surah-nav-margin'><div class='col-12 text-center'><button class='btn btn-sm btn-gold continue-reading-btn'>Continue Reading</button></div></div>");
        var g = !1;
        $('.continue-reading-btn').on('click', function () {
          if (!$('.s-a#' + surah_ayahs).length) {
            var a = f + 1,
              b = a + 20 - 1;
            b > surah_ayahs && (b = surah_ayahs);
            loadAyahs(surah_number, a, b);
            modifyFonts();
            $('.surah-nav-margin').css('display', 'none');
            setTimeout(function () {
              g = !0;
            }, 200);
          }
        });
        $(window).scroll(function () {
          if (1 == g) {
            var a = parseInt($('.full-surah .s-a:last').attr('id')) + 1,
              b = a + 20 - 1;
            b > surah_ayahs && (b = surah_ayahs);
            !$('.s-a#' + surah_ayahs).length &&
              $(window).scrollTop() + $(window).height() > $(document).height() - 500 &&
              0 == d &&
              (loadAyahs(surah_number, a, b), (b = b + 1 + 20 - 1), b > surah_ayahs && (b = surah_ayahs), (d = !0), modifyFonts());
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(
              this,
              'scrollTimer',
              setTimeout(function () {
                d = !1;
              }, 150)
            );
          }
        });
      } else
        (b = parseInt(window.location.hash.substr(1))),
          $.isNumeric(b) || (b = 1),
          (d = !1),
          1 > b && (b = 1),
          b > surah_ayahs && (b = surah_ayahs),
          loadAyahs(surah_number, b, b),
          b < surah_ayahs && $('.full-surah').after("<div class='col-12 surah-nav-margin'><div class='col-12 text-center'><button class='btn btn-sm btn-gold continue-reading-btn'>Continue Reading</button></div></div>"),
          (g = !1),
          $('.continue-reading-btn').on('click', function () {
            if (!$('.s-a#' + surah_ayahs).length) {
              var a = b + 1,
                c = a + 20;
              c > surah_ayahs && (c = surah_ayahs);
              loadAyahs(surah_number, a, c);
              modifyFonts();
              $('.surah-nav-margin').css('display', 'none');
              setTimeout(function () {
                g = !0;
              }, 200);
            }
          }),
          $(window).scroll(function () {
            if (1 == g) {
              var a = parseInt($('.full-surah .s-a:last').attr('id')) + 1,
                b = a + 20 - 1;
              b > surah_ayahs && (b = surah_ayahs);
              !$('.s-a#' + surah_ayahs).length &&
                $(window).scrollTop() + $(window).height() > $(document).height() - 500 &&
                0 == d &&
                (loadAyahs(surah_number, a, b), (b = b + 1 + 20 - 1), b > surah_ayahs && (b = surah_ayahs), (d = !0), modifyFonts());
              clearTimeout($.data(this, 'scrollTimer'));
              $.data(
                this,
                'scrollTimer',
                setTimeout(function () {
                  d = !1;
                }, 150)
              );
            }
          });
    } else
      (d = !1),
        (a = 20 <= surah_ayahs ? 20 : surah_ayahs),
        loadAyahs(surah_number, 1, a),
        modifyFonts(),
        20 <= surah_ayahs &&
          $(window).scroll(function () {
            var a = parseInt($('.full-surah .s-a:last').attr('id')) + 1,
              b = a + 20 - 1;
            b > surah_ayahs && (b = surah_ayahs);
            !$('.s-a#' + surah_ayahs).length &&
              $(window).scrollTop() + $(window).height() > $(document).height() - 500 &&
              0 == d &&
              (loadAyahs(surah_number, a, b), (b = b + 1 + 20 - 1), b > surah_ayahs && (b = surah_ayahs), (d = !0), modifyFonts());
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(
              this,
              'scrollTimer',
              setTimeout(function () {
                d = !1;
              }, 150)
            );
          });
  }
  $('.bismillah').css('display', 'block');
  $('.bismillah-english').css('display', 'block');
  $('.loader').css('display', 'none');
});
