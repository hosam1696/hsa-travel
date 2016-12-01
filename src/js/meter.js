$(function() {
    let meterDiv = $('.scroll-meter');
    let scrollside = 0;

    // scroll spy
    $('body').scrollspy({target: ".navbar-spy"});

    // animate scroll
    $('.nav li').on('click', 'a', function(e) {
        e.preventDefault();
        var href = $(this).attr('href'),
            targetOffset = $(href).offset().top;

        $('body, html').animate({
            scrollTop: targetOffset+ 'px'
        },500);

    });

    // scroll Top button

    $("#scroll-btn").click(function() {
        $('body, html').animate({
            scrollTop: '0'
        },500);
    });


    $(window).on('scroll', function() {
        let topScroll = $(window).scrollTop();


        // scroll button

        if(topScroll + $(window).height() > $('#pachage').offset().top) {
            $("#scroll-btn").removeClass('hidden');
        } else {
            $("#scroll-btn").addClass('hidden');
        }

        // clip path effect

        if(topScroll > scrollside) {
            $("#hero").addClass('hero-clip');

        } else {
            $("#hero").removeClass('hero-clip');
        }
        scrollside = topScroll;

        // top meter

        meterDiv.meter();

        // animate separator
        if(topScroll + $(window).height()+50 > $("#services").offset().top) {
            $("#services").find('.sep').addClass('sep-animate');
        }

        // services toogle

        $("#services").find('.services-all').find('li').on('click', function() {
            let target = $(this).data('target');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $("#services").find(target).siblings().fadeOut(0).removeClass('active');
            $("#services").find(target).fadeIn(1000).addClass('active');
        })

        // package
        var swparent = $("#sw");
        var slidesWrapper= $('.slides .slides-wrapper');
        var slide = $('.slides .slides-wrapper .slide');
        slidesWrapper.css('width', slide.length*parseInt(slide.outerWidth())+20*slide.length+'px' );
        var hiddenArea = slidesWrapper.innerWidth() - swparent.width();
        //alert(hiddenArea);
        hiddenArea = hiddenArea/2;
        $('#right').click(function(){
            alert(slide.outerWidth());
            slidesWrapper.css({transform: 'translate('+hiddenArea-slide.outerWidth()+'px,0)'});
        })
    });

    $.fn.meter = function(element) {
        // remeber this to be added on top of scroll event
        let bodyHeight = $('body').innerHeight();
        let topScroll = $(window).scrollTop();
        let winHeight = $(window).innerHeight();
        let exatHeight = bodyHeight - winHeight;
        element = $(this);
        let meterPercentage = (topScroll/exatHeight) *100;
        element.find('.meter').css('width', meterPercentage+ '%');

    };
});