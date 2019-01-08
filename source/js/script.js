 $(document).ready(function(){
     $('.promo__slider-js').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
          autoplay: false,
          dots: true,
          arrows: true,
          responsive: [
             {
               breakpoint: 1071,
                 settings: {
                 arrows: false,
                 autoplay: true
               }
             },
             {
                breakpoint: 751,
                settings: {
                  dots: true,
                  arrows: false
                }
              }
            ]
     });

    
});

$('.menu__slider-js').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: true,
    responsive: [
        {
          breakpoint: 1071,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: true
          }
        },
        {
            breakpoint: 751,
            settings: {
              slidesToShow: 1,
              dots: false,
              arrows: false,
              infinite: true
            }
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 1,
              dots: false,
              arrows: false,
              infinite: true,
              swipe: true
            }
          }
    ]

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

var orderButton = document.querySelector(".page-header__hamb");
var modalPurchase = document.querySelector(".mobile__container");
var modalOverlay = document.querySelector(".mobile");
var close = document.querySelector(".mobile__close")

if (orderButton) {
orderButton.addEventListener("click", function(evt) {
evt.preventDefault();
modalOverlay.classList.remove("visually-hidden");
});
}

if (close) {
close.addEventListener("click", function(evt) {
evt.preventDefault();
modalOverlay.classList.add("visually-hidden");
});
}

modalOverlay.addEventListener(
"click",
function(evt) {
if (evt.currentTarget !== evt.target) {
return;
}

modalOverlay.classList.add("visually-hidden");
},
false
);



   
          