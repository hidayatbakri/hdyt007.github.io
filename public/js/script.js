
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

$('.rounded-to-top').hide(300);

$(window).scroll(function() {
  let wScroll = $(this).scrollTop();

  console.log(wScroll);

  if (wScroll >= 300) {
    $('.rounded-to-top').show(300);
  }else{
    $('.rounded-to-top').removeClass('this-bottom')
    $('.rounded-to-top').hide(300);
  }
})

// gsap
gsap.registerPlugin(TextPlugin);
gsap.to('.desc-about', {duration: 3.5, delay: .5, text: 'Hi, I am a programmer in the field of frontend and backend developer or fullstack developer. I am punctual, discipline, and uphold quality person .'})

// aos
AOS.init({
  once: true,
  duration: 1000,
});