const btnMenuNav = document.querySelector('.btn-menu-nav');
const navMenu = document.querySelector('.nav-menu');
const ulMenu = document.querySelector('.ul-menu');
const nav = document.querySelector('nav')

setInterval(() => {
  // console.log($(window).width());
  if ($(window).width() <= 768) {
    btnMenuNav.style.display = '';
    navMenu.classList.add('display-mob');
    ulMenu.classList.remove('flex');
  }else{
    navMenu.classList.remove('display-mob');
    ulMenu.classList.add('flex');
    btnMenuNav.style.display = 'none';
  }
}, 500)

btnMenuNav.addEventListener('click', () => {
  btnMenuNav.classList.toggle('active')
  navMenu.classList.toggle('active');
});

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
  // console.log(wScroll);
  if (wScroll >= 300) {
    nav.classList.add('sticky');
    nav.classList.add('top-0');
    nav.classList.add('bg-white');
  }else{
    nav.classList.remove('sticky');
    nav.classList.remove('top-0');
    nav.classList.remove('bg-white');
  }
});

$('#about .card').tilt({
  glare: true,
  maxGlare: .5,
  perspective: 500,
})

// project

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

// copy to clipboard
$('#copy-email').on('click', () => {
  /* Get the text field */
  var copyText = document.getElementById("text-email");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'manusiabiasa819@gmail.com',
    footer: 'Successfully Copy Email Address',
  })

});



