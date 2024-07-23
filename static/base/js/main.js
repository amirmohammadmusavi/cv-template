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

  // alert
function AM_alert({display=true,status = 'info', text=false,btns=false,obj=false}) {
  let elem = document.getElementById('Alert');
  let classname = `alert_child_${elem.children.length}`
  if (display) {
      elem.classList.add('show_up');
      elem.insertAdjacentHTML('beforeend',
      `
      <div class="Loupe_alert_  ${classname} ${status}">
          <span class="alert_close_btn" onclick="Loupe_alert({display:false,obj:this.parentElement})">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1" stroke="#B6B6B6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11 11L1 1" stroke="#B6B6B6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </span>
          <div class="d-flex align-items-center ml-4 alert-text-card">
              <div class="icon">
                  <svg class="success" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.5 36C28.125 36 36 28.125 36 18.5C36 8.875 28.125 1 18.5 1C8.875 1 1 8.875 1 18.5C1 28.125 8.875 36 18.5 36Z" stroke="#25B700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 18.5L16.6612 23L26 14" stroke="#25B700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg class="warning" width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.5889 12.9102V22.2051" stroke="#FFA800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19.5888 35.9814H8.32336C1.87269 35.9814 -0.822836 31.3711 2.30026 25.7384L8.10028 15.2909L13.5657 5.4755C16.8747 -0.491834 22.3029 -0.491834 25.6119 5.4755L31.0773 15.3095L36.8773 25.757C40.0004 31.3897 37.2863 36 30.8542 36H19.5888V35.9814Z" stroke="#FFA800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M19.5762 27.7832H19.5929" stroke="#FFA800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg class="info" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.5 0.999998C8.875 0.999998 1 8.875 1 18.5C1 28.125 8.875 36 18.5 36C28.125 36 36 28.125 36 18.5C36 8.875 28.125 0.999999 18.5 0.999998Z" stroke="#008DFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18.5 25.499L18.5 16.749" stroke="#008DFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M18.5117 11.501L18.496 11.501" stroke="#008DFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg class="danger" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 36C28.125 36 36 28.125 36 18.5C36 8.875 28.125 1 18.5 1C8.875 1 1 8.875 1 18.5C1 28.125 8.875 36 18.5 36Z" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.5469 23.4524L23.4519 13.5474" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M23.4519 23.4524L13.5469 13.5474" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </div>
              <h6 class="alert-text">${text}</h6>
              <div class="d-flex justify-content-center mr-5 alert_btns">
                  
              </div>
          </div>
      </div>
      `);
      if(btns) {
          for(const x of btns) {
              document.querySelector(`.${classname} .alert_btns`).insertAdjacentHTML('beforeend',`<a class="bg-light rounded px-3 py-2" style="color:#333;" ${x.attr? x.attr.name+"='"+ x.attr.inner +"'":''} ${x.link? 'href='+x.link:'onclick="Loupe_alert({display:false,obj:this.parentElement.parentElement})"'}>${x.title}</a>`)
          }
      }

  } else {
      obj.remove();
      elem.classList.remove('show_up');
      classname = false
  }
  setTimeout(function(){if(classname){document.getElementsByClassName(classname)[0].remove();elem.classList.remove('show_up');}},10000);
}