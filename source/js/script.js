 $(document).ready(function(){
     $('.promo__slider-js').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: false,
         dots: true,
         arrows: true
     });

    
});

$('.menu__slider-js').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: true
});


$('body').on('click','.tabs__list a',function(){
    $('.tabs__list a').removeClass('active');
    $(this).addClass('active');
    var href = $(this).attr('href');
    $('.tab__pane').removeClass('active').removeClass('in');
    $(href).addClass('active');
    setTimeout(function(){
      $(href).addClass('in');
    }, 200);
    return false;
  });


   
          