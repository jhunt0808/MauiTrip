$(document).ready(function() {
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("body").addClass("mobileDevice");
    } else {
        $("body").addClass("desktopDevice");
    }
    
    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0) {
            return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
        }
        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./)) {
            return 11;
        }
        else {
            return 0; //It is not IE
        }
    }

    if (GetIEVersion() > 0) {
        $("body").addClass("isIE");
    }
    
    
        
    $('.menuButton.open').on('click', function(){
        $('.surfboardWrapper').toggleClass('open close');
        $('.menuButton').toggleClass('open close');
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    $('.menuButton.close').on('click', closeMenu);
    $('.closeMobileMenu').on('click', closeMenu);

    function closeMenu(){
        $('.surfboardWrapper').toggleClass('close open');
        $('.menuButton').toggleClass('close open');
    };



    $.fn.isOnScreen = function(){

        var win = $(window);

        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };


    $(function() {
        var offset = $(".surfboard").offset();
        var topPadding = 60;
        var wWidth = $(window).width();
        var scroll = $(document).scrollTop();
        var quoteOffset = $('.quote').offset().top;
        var footerH = $(".footer").height();
        var quoteH = $(".quote").height();
        var math = footerH + quoteH;

        $(window).scroll(function() {
            var quoteVis = $('.quote').isOnScreen();
            var isIE = $('body').hasClass("isIE");
            var desktop = $('body').hasClass("desktopDevice");
           
            if (wWidth >= 700){
                if (quoteVis === true){
                    $(".surfboard").addClass("fixed");
                } else if ($(window).scrollTop() > offset.top) {
                    $(".surfboard").removeClass("fixed");
                    $(".surfboard").stop().animate({
                        top: $(window).scrollTop() - offset.top + topPadding
                    }, "slow");
                } else {
                    $(".surfboard").removeClass("fixed");
                    $(".surfboard").stop().animate({
                        top: 0
                    });
                };
            };
        });
    });




    $('.backToTop').on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, "slow"); 
        return false; 
    });

    $('.toggleTripProgress.open').on('click', function(){
        $('.tripProgress').toggleClass('open close');
        $('.toggleTripProgress').toggleClass('open close');
    });

    $('.toggleTripProgress.close').on('click', function(){
        $('.tripProgress').toggleClass('close open');
        $('.toggleTripProgress').toggleClass('close open');
    });


    var swiper = new Swiper('.swiper-container', {
        autoplay: 4000,
        grabCursor: true,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade'
    });

    if($(".title.qualified").length){
        console.log('visible');
        $(".toggleTripProgress").hide();
        $(".tripProgress").addClass("qualified");
    }


});