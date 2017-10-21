<script>
      $(document).ready(function(){
        $('.features-slider').slick({
          infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: '<button class=prev></button>',
                    nextArrow: '<button class=next></button>',
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: '<button class=prev></button>',
                    nextArrow: '<button class=next></button>',
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: '<button class=prev></button>',
                    nextArrow: '<button class=next></button>',
                    infinite: true,
                    dots: true
                  }
                }
              ]
            });
        });
    </script>
    <script src="http://getbootstrap.com/assets/js/ie10-viewport-bug-workaround.js"></script>
