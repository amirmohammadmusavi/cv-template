// progress
function Progress(display = true) {
    if (display) {
        document.getElementById('progressbar').style.display = 'flex';
    } else {
        document.getElementById('progressbar').style.display = '';
    }
}

function show_menu() {
    const menu = document.getElementsByClassName('hamburger')[0];
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
    } else {
      menu.classList.remove('active');
    }
  }


  (function ($) {

    // /*------------------
    //     Preloader
    // --------------------*/
    // $(window).on('load', function () {
    //   $("#preloder").delay(1300).fadeOut("slow");
    // });

    
  });

  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 600) {
        $(".scroll_up").css({ opacity: "1", "pointer-events": "visible" });
        document.querySelector('header').classList.add('sticky');
      } else {
        $(".scroll_up").css({ opacity: "0", "pointer-events": "none" });
        document.querySelector('header').classList.remove('sticky');
      }
    });
  });