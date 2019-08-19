(function ($) {
    "use strict";

    //when dom is ready
    $(document).ready(function () {

        $(".dropdown").hover(function () {

            $(".dropdown-menu", this).fadeToggle('fast');
        }, function () {

            $(".dropdown-menu", this).fadeToggle('fast');

        });

    /*preloader*/
    $(window).on('load', function () {
        $('.loader').fadeOut('slow', function () {
            $(this).remove();
        })
    });
        /*----------------------------
         wow js active
        ------------------------------ */
        new WOW().init();


        /*----------------------------
        blog  Activation
        ------------------------------ */
        $(".blog-active").owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            dots: false,
            nav: true,
            smartSpeed: 700,
            autoplay: 0,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },

                768: {
                    items: 2
                },

                800: {
                    items: 2
                },

                1024: {
                    items: 2
                }
            }
        });



        /*----------------------------
            sponsers  Activation
        ------------------------------ */
        $(".sponsers-active").owlCarousel({
            items: 4,
            margin: 100,
            loop: true,
            dots: false,
            nav: true,
            slideSpeed: 2000,
            autoplay: 0,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },

                768: {
                    items: 3
                },

                800: {
                    items: 3
                },

                1024: {
                    items: 4
                }
            }
        });



        /*----------------------------
            testimonial  Activation
        ------------------------------ */
        $(".testimonial-active").owlCarousel({
            items: 2,
            loop: true,
            dots: false,
            nav: false,
            slideSpeed: 2000,
            autoplay: 3000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },

                768: {
                    items: 2
                },

                800: {
                    items: 2
                },

                1024: {
                    items: 2
                }
            }
        });



        /*----------------------------
            conference  Activation
        ------------------------------ */
        $(".conference-active").owlCarousel({
            items: 1,
            margin: 100,
            loop: true,
            dots: true,
            nav: false,
            slideSpeed: 2000,
            autoplay: 3000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },

                768: {
                    items: 1
                },

                800: {
                    items: 1
                },

                1024: {
                    items: 1
                }
            }
        });

        /*---------------------
         countdown
        --------------------- */
        $('[data-countdown]').each(function () {
            var $this = $(this),
                finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function (event) {
                $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hours</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Minutes</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Seconds</p></span>'));
            });
        });

        // on scroll fixed navbar and back to top btn start
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 55) {
                $('#back-to-top').addClass('reveal');
                $('#header').addClass('navbar-fixed-top');
            } else {
                $('#back-to-top').removeClass('reveal');
                $('#header').removeClass('navbar-fixed-top');
            }

        });


        /*----------------------------
         Lightbox
        ------------------------------ */
        lightbox.option({
            'resizeDuration': 700,
            'wrapAround': true
        })

        /*----------------------------
         price-slider active
        ------------------------------ */
        $("#slider-range").slider({
            range: true,
            min: 40,
            max: 600,
            values: [60, 570],
            slide: function (event, ui) {
                $("#amount").val("£" + ui.values[0] + " - £" + ui.values[1]);
            }
        });
        $("#amount").val("£" + $("#slider-range").slider("values", 0) +
            " - £" + $("#slider-range").slider("values", 1));


        /*--------------------------
         counterup js
        ---------------------------- */
        $('.count').counterUp({
            delay: 50,
            time: 3000

        });

        /*--------------------------
        scrollUp
        ---------------------------- */
        $.scrollUp({
            scrollText: '',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });

    });
    //dom ready end



})(jQuery);
