/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */



// cycle h1 text
$(function() {
    var text = ['retain users', 'optimize funnels', 'develop strategy'];
    var loop = null;
    i = 0,
    $div = $('#header-cycle');

    loop = setInterval(function() {   
        $div.fadeOut(function() {
            $div.text(text[i++ % text.length]).fadeIn();
        });
    }, 1800);

    window.setTimeout(function(){
       clearInterval(loop);
    }, 7000);
});

// loads skill bars after user scrolls to section
$(function() {
    var oTop = $('#skills').offset().top - window.innerHeight + 300;
    $(window).scroll(function(){
        var pTop = $('body').scrollTop();
        //console.log( pTop + ' - ' + oTop );   //just for your debugging
        if( pTop > oTop ) {
            console.log("Skills loaded.");
            $('.skill1').css('width', '100%');
            $('.skill2').css('width', '100%');
            $('.skill3').css('width', '85%');
            $('.skill4').css('width', '95%');
            $('.skill5').css('width', '80%');
            $('.skill6').css('width', '60%');
            $('.skill7').css('width', '50%');
            $('.skill8').css('width', '40%');
            $('.skill9').css('width', '100%');
            $('.skill10').css('width', '85%');
        }
    });
});

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

