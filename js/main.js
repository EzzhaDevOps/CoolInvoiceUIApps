      const apiBaseUrl    = "https://localhost:7170";  //  Email API
      const clientBaseUrl = "https://localhost:7007";  //  Blazor app

      
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
          //  $('.sticky-top').css('top', '0px');
        } else {
             $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
            //$('.sticky-top').css('top', '-100px');
        }
    });
    
    
    //Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Roadmap carousel
    $(".roadmap-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    $(function() { // Dropdown toggle
        $("#products_dropdownId").click(function(){
            $("#products-box-menu").slideToggle();
          });

        // $('').click(function() { $(this).next('.dropdown').slideToggle();
        // });
        
        $(document).click(function(e) 
        { 
            var target = e.target; 
            if (!$(target).is('#products_dropdownId') && !$(target).parents().is('#products_dropdownId')) 
            //{ $('.dropdown').hide(); }
            { $('#products-box-menu').slideUp(); }
        });
    });


    $(document).ready(function(){
        var changebox = $(".changebox");
        
        var firstclone = changebox.children(":first").clone();
        changebox.append(firstclone);
        
        var fsstr = changebox.parent().css("font-size");
        fsstr = fsstr.slice(0,fsstr.indexOf("h1"));
        var fs = parseInt(fsstr);
        
        changebox.css("height",changebox.parent().css("font-size") );
        ChangeSize(0);
        setInterval(Next,2000);
        
        function Next(){
           if( typeof Next.i == 'undefined' ) {
             Next.i = 0;
           }
          Next.i++;
           if(Next.i == changebox.children("span").length){
              Next.i = 1;
              changebox.scrollTop(0);
           }
           changebox.animate({scrollTop: (fs*Next.i)+Next.i*5+3},500);
           setTimeout(function(){
              ChangeSize(Next.i);
           },500);
           
        }
        
        function ChangeSize(i){
        var word = changebox.children("span").eq(i);
        var wordsize = word.css("width");
        changebox.css("width",wordsize);
     }
        
        
     });
     
})(jQuery);

