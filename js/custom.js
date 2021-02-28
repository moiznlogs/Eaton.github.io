var navBar = document.getElementById('navBar');
   window.onscroll = function () {
     if (window.scrollY>60){
      navBar.classList.add('scrolled');
     } else {
      navBar.classList.remove('scrolled');
     }
   }




 $(function(){
    $('.single-item').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        
    });
    
});



const observer = lozad('.lozad', {
    rootMargin: '10px 0px', // syntax similar to that of CSS Margin
    threshold: 0.1 // ratio of element convergence
});
observer.observe();



$(document).ready(function(){
  $('.for_slick_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<span class="priv_arrow"><i class="fas fa-arrow-left"></i></span>',
    nextArrow: '<span class="next_arrow"><i class="fas fa-arrow-right"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
          
});
