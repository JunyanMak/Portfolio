 $(document).ready(function() {
            
    // What to do on load
    // 1. scroll to top if it isn't scrolled to top yet
    // 2. initialize glider for carousel
    window.addEventListener('load', function(){

//        if ( $(this).scrollTop() > 0 || !$(this).scrollTop() )
//            $(window).scrollTo(0);

        $(".owl-carousel").owlCarousel({
            items: 1,
        });
    });

    // What happens when you scroll
    // when you scroll past the header, navbar becomes fixed. 
    // when you scroll up to banner area, navbar becomes relative
    // adding/removing body padding-top removes the choppiness of displaying and hiding navbar
    $(window).scroll(function() {
        var nav = $('.main-menu');
        var banner_height = $('#banner-area').height();
        if( $(this).scrollTop() >= banner_height ) {
            nav.addClass('fixed-top bg-light');
            $('body').css('paddingTop', nav.height());
        } else {
            nav.removeClass('fixed-top bg-light');
            $('body').css('padding', 0);
        }
     });

});