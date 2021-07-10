AOS.init({
  once: true
});

let menuToggle = $('.menu-toggle');
let nav = $('nav ul');
let toggle = $('.menu-toggle i');

let theme = $('i#theme');
let body = $('body')

menuToggle.on('click', function(){
  nav.toggleClass('slide');
  toggle.toggleClass('akt');
  toggle.toggleClass('fa-align-right');
  toggle.toggleClass('fa-times');
})

theme.on('click', function(){
  theme.toggleClass('fa-sun-o');
  theme.toggleClass('fa-moon-o');
  body.toggleClass('dark');
})

$('.page-scroll').on('click', function(e) {

  var tujuan = $(this).attr('href');

  $('.page-scroll').removeClass('active')
  $(this).addClass('active')

  var elemenTujuan = $(tujuan);

  $('html , body').animate({
    scrollTop: elemenTujuan.offset().top - 120
  });

  e.preventDefault();
});

$(window).scroll(function() {
  let wScroll = $(this).scrollTop();

  if (wScroll >= 0) {
    $('.page-scroll').removeClass('active')
    $('.pg-1').addClass('active')
  }
  if (wScroll >= 533) {
    $('.page-scroll').removeClass('active')
    $('.pg-2').addClass('active')
  }
  if (wScroll >= 1035) {
    $('.page-scroll').removeClass('active')
    $('.pg-3').addClass('active')
  }
  if (wScroll >= 1442) {
    $('.page-scroll').removeClass('active')
    $('.pg-4').addClass('active')
  }



  if (wScroll >= 28) {
    $('nav').addClass('backg-blue');
    $('nav').addClass('sticky-top');
  } else {
    $('nav').removeClass('sticky-top');
    $('nav').removeClass('backg-blue');
  }
});

$('.more-skill').hide()

$('#see-more-skill-1').on('click', function(){
  $('.msk-1').slideToggle(300)
})
$('#see-more-skill-2').on('click', function(){
  $('.msk-2').slideToggle(300)
})
$('#see-more-skill-3').on('click', function(){
  $('.msk-3').slideToggle(300)
})

setInterval(() => {
  let wScroll = $(this).scrollTop();
  if ($( window ).width() <= 415) {
    if (wScroll >= 428) {
      $('.page-scroll').removeClass('active')
      $('.pg-2').addClass('active')
    }
    if (wScroll >= 1497) {
      $('.page-scroll').removeClass('active')
      $('.pg-3').addClass('active')
    }
    if (wScroll >= 2567) {
      $('.page-scroll').removeClass('active')
      $('.pg-4').addClass('active')
    }
  }

}, 500);