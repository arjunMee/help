AOS.init();







/*===== SHOW MENU =====*/
const showMenu = (navID, toggleID)=> {
    const nav = document.getElementById(navID),
    toggle = document.getElementById(toggleID);
    if(nav && toggle){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-menu', 'nav-toggle');

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

const close = () =>{
    document.getElementById('nav-menu').classList.remove('show-menu');
} 
navLink.forEach(a => a.addEventListener('click', close));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/


/*===== tabs =====*/ 
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



// acordion ======== faq dropdown //
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    var d = this.parentElement;
    var child = this.children;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      d.style.backgroundColor  = 'white'
      child[2].style.display = "none"
      child[1].style.display = "block"
    } else {
      panel.style.display = "block";
      d.style.backgroundColor  = 'rgb(255, 221, 221)'
      child[2].style.display = "block"
      child[1].style.display = "none"
    }
  });
}




/*===== SHOW SCROLL TOP=====*/ 
/*===== SHOW SCROLL TOP=====*/ 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)

/*===== MIXITUP FILTER PORTFOLIO =====*/ 


/* Link active portfolio */ 


/*===== SWIPER CAROUSEL =====*/ 
const mySwiper = new Swiper('.swiper-container', {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    // effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },

})

const mySwiper1 = new Swiper('.block-2', {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    // effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },

})



var swiper = new Swiper('.swiper-container3', {
    
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
      }
  });
