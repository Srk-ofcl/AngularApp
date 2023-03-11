$(".slick-slider").slick({
  slidesToShow: 2.5,
  infinite: false,
  slidesToScroll: 1,
  arrow: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      }
    }
  ]
});

$(".mobile_slide").slick({
  slidesToShow: 10,
  infinite: false,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
  ]
});

$({ Counter: 2 }).animate({
  Counter: $('.counterLogo').text()
}, {
  duration: 2000,
  easing: 'linear',
  step: function () {
    $('.counterLogo').text(Math.ceil(this.Counter));
  }
});

$(".readMoreReadLessitems").readMoreReadLess({
  itemInSummary: 5,
  readMoreText: 'Alle Featrues anzeigen',
  readLessText: 'weniger Funktionen anzeigen',
  readMoreClass: 'button',
  readLessClass: 'button'
});


$("span.rmrl-read-more").click(function () {
  $(this).parents('.readMoreReadLessitems').find('li').addClass('active');
});

$("span.rmrl-read-less").click(function () {
  index = 0;

  var ul = $(this).parents('.readMoreReadLessitems');
  $(ul).find('li').removeClass('active');

  $(ul).find('li').each(function (index) {
    if (index < 3) {
      $(this).addClass('active');
      console.log(this);
    } 
    index++;
  })

});


$( "#contactForm" ).submit(function( event ) {
  event.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.value = 'Senden...';
  var data=$( this ).serialize();
  $.ajax({
          type: "POST",
          url: "contactUsAjax.php",
          data: data,
          cache: false,
          success: function(result){
              var data=$.parseJSON(result);
              if(data.response=='error'){
                  alert(data.message);
              }else{
                  alert(data.message);
              }
              btn.value = 'Anfrage abschicken';
              $('#contactForm')[0].reset();
          }
  });
});


$('header .nav-item a[href*=#]').on('click', function(e) {
  $('html, body').animate({ scrollTop: 0}, 1000,'swing');
});



    
