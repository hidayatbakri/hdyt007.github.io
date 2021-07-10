$(document).ready(function () {
  $('.gbr-top').addClass('hkkMuncul');
  $('.teks-jdl').addClass('hkMuncul');
})

$(window).scroll(function () {
  let wScroll = $(this).scrollTop();
  // console.log(wScroll);

  if (wScroll >= 100) {
    $('.about').addClass('atMuncul');
  }
  if (wScroll >= 432) {
    $('.gb-komputer').addClass('hkMuncul');
    $('.txt-b-about').addClass('hkkMuncul');
  }
  if (wScroll >= 870) {
    $('.services').addClass('atMuncul');
  }
  if (wScroll >= 1500) {
    $('.pembuatt').addClass('atMuncul');
  }

});