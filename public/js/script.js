
$('.page-scroll').on('click', function(e) {

  var tujuan = $(this).attr('href');

  $('.page-scroll').removeClass('active')
  $(this).addClass('active')
  $('.ul-menu').removeClass('active');
  $('body').removeClass('menu-active');

  var elemenTujuan = $(tujuan);

  $('html , body').animate({
    scrollTop: elemenTujuan.offset().top - 120
  });

  e.preventDefault();
});

setInterval(() => {
  // console.log($(window).width());
  if ($(window).width() <= 768) {
    $('.menu-toggle').show(200);
  }else{
    $('.menu-toggle').hide(200);
  }
}, 500)

$('.menu-toggle').on('click', () => {
  $('.menu-toggle').toggleClass('active');
  $('.ul-menu').toggleClass('active');
  $('body').toggleClass('menu-active');
});


for (let i = 1; i <= $('#total-project').val() ; i++) {
  $('.btn-project' + i).on('click', () => {
    $('.modal-project' + i).addClass('active');
    $('body').css('overflow-y', 'hidden')
  });

  $('#close-modal-project' + i).on('click', () => {
    $('.modal-project').removeClass('active');
    $('body').css('overflow-y', '')
  });
}