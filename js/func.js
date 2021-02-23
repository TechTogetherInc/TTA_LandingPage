// TO BE MOVED TO scripts.js

$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging : function(slider, i) {
      var title = $(slider.$slides[i]).data('title');
      return '<a class="pager__item"> '+title+' </a>';
    },
    responsive: 
    [
      {
        breakpoint: 1024,
        settings: 
        {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 860,
        settings: 
        {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 630,
        settings: 
        {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
});