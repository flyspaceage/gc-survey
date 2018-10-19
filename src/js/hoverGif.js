$(document).ready(function(){

    var $el = $('#global'),
        $zl = $('#interview'),
        $trigger = $('#gif-b'),
        $target = $('#play-btn'),
        $playBtn = $('#play-btn'),
        $downloadBtn = $('#download-btn'),
        $next = $('#next'),
        $slider = $('.carousel-box-shadow'),
        $replayBtn = $('#replay-btn'),
        $interviewPref = $('.interview-preferences'),
        $marketPref = $('.global-markets');
    
    //preload GIF
    $playBtn.hide();
    $downloadBtn.hide();

    //Hide Interactive on load
    //$el.addClass("hidden");
    $el.hide();

    //Hide Interactive on load
    //$zl.addClass("hidden");
    $zl.hide();

    //play gif
    function playGlobalMarkets(){
        //swap GIF for PNG 
        $('#gif-b').attr("src", "https://cdn2.hubspot.net/hubfs/2942250/CP%20Insight%20Q3/B_Beginning_Blue.gif");
        $( "#gif-b" ).off( "mouseenter mouseleave" );

        //fade B in and out after delay
        $('#gif-b').fadeIn(0).delay(30000).fadeOut(50);
        $('.global-markets').delay(30000).fadeIn(0);

        setTimeout(function(){
            $el.removeClass("hidden");
            $marketPref.click();
            $next.show();
            $next.click(function(){
                $next.hide();
            });
        }, 30000);
    }

    function playInterviewPref(){
        $next.hide();        
        $('#gif-d').show().delay(14500).fadeOut('slow'); 
    }

    //Hide Play Btn on Hover
    $target.click(function() {
        $target.fadeOut('slow');
    });

    //Play GIF on Click
     $target.click(function(){
        $trigger.mouseover();
        $trigger.off( "mouseenter mouseleave" );
    });

    //Hide Next Btn
    $next.addClass("hidden");
    $('.carousel-box-shadow').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if (nextSlide == 2) {
            $('.next-btn').hide();
        } else {
            $('.next-btn').show();
        }
    });
  
/*** 
1. App Usage by Global Market
***/
    var triggerScroll = false;

    $(window).scroll(function() {

        if ($(this).scrollTop() >= 350 && !triggerScroll) {

            triggerScroll = true;

        //swap GIF for PNG 
            $('#gif-b').attr("src", "https://cdn2.hubspot.net/hubfs/2942250/CP%20Insight%20Q3/B_Beginning_Blue.gif");
            $( "#gif-b" ).off( "mouseenter mouseleave" );

        //fade B in and out after delay
            $('#gif-b').fadeIn(0).delay(30000).fadeOut(50);
            $('.global-markets').delay(30000).fadeIn(0);
            $('#gif-b').off( "mouseenter mouseleave" );
            setTimeout(function(){
                $el.removeClass("hidden");
                $marketPref.click();
                $next.show();
                $next.click(function(){
                    $next.hide();
                });
            }, 30000);
        }
    });

/*** 
2. Interview Preferences by Gender
***/
//Play GIF on click
    $('.next-btn').click(function(){
        $("#gif-d").mouseover();
        $( "#gif-d" ).off( "mouseenter mouseleave" );
    });

    //Switch preview image w/GIF on hover
    $("#gif-d").hover(function(){
            $(this).attr("src", "https://cdn2.hubspot.net/hubfs/2942250/CP%20Insight%20Q3/D_Gender_Differences2.gif");
        //fade D out after delay  
            $('#gif-d').delay(14000).fadeOut(10);
            $('.interview-preferences').delay(14000).fadeIn(10);
            $('.next-btn').delay(14500).show(function(){
                $interviewPref.click();
            }).fadeIn(50);
        },function(){
            $( "#gif-d" ).off( "mouseenter mouseleave" );
            setTimeout(function(){
                $zl.removeClass("hidden");
                $next.click(function(){
                    $next.hide();
                    $('.next-btn').addClass('hidden');
                });
            }, 30000);
        }                     
    );

/*** 
3. Download the PDF
***/
//Play GIF on nextBtn (by slide)
    $('.carousel-box-shadow').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if (nextSlide == 2) {
            $('#gif-f').attr("src", "https://cdn2.hubspot.net/hubfs/2942250/CP%20Insight%20Q3/A_On_Load_Open.gif");
        } else {
            $('#gif-f').attr("src", "https://cdn2.hubspot.net/hubfs/2942250/CP%20Insight%20Q3/b-preview.png");
        }
    });

/***
4.  Mobile Only
***/
    if ($(window).width() < 787) {
        $next.hide('hidden');
        $('.carousel-box-shadow').hide();
        $('.cp3-mobile').show();
    } else {
        $('.carousel-box-shadow').show();
        $('.cp3-mobile').hide();
    }

/***
5.  Replay
***/
     $replayBtn.click(function(){ 
        $slider.slick('slickGoTo', 0);
        
        $slider.on('afterChange', function(event, slick, currentSlide, nextSlide){  
            
            //playGlobalMarkets();
            if (currentSlide == 0){
  
                $el.hide();
                
                var $img1 = $('#gif-b').attr('src','https://cdn2.hubspot.net/hubfs/2942250/CP%20Insight%20Q3/b-preview.png');
                var $img2 = $('#gif-d').attr('src','https://cdn2.hubspot.net/hubfs/2942250/CP%20Insight%20Q3/d-preview.png');

                $next.hide();
                $img1.show();

                if ($img1.attr('src') != 'https://cdn2.hubspot.net/hubfs/2942250/CP%20Insight%20Q3/B_Beginning_Blue.gif'){
                    $img1.attr('src','https://cdn2.hubspot.net/hubfs/2942250/CP%20Insight%20Q3/B_Beginning_Blue.gif');
                    $img1.delay(30000).fadeOut(50);
                    $img1.addClass('hidden');
                    $el.delay(30000).fadeIn(50);
                    $next.delay(30000).fadeIn(50);
                }

                //playInterviewPref();
                $next.click(function(){
                    
                    $zl.hide();
                    $img2.show();

                    if ($img2.attr('src') != 'https://cdn2.hubspot.net/hubfs/2942250/CP%20Insight%20Q3/D_Gender_Differences2.gif'){
                        $img2.attr('src','https://cdn2.hubspot.net/hubfs/2942250/CP%20Insight%20Q3/D_Gender_Differences2.gif');
                        $img2.delay(14500).fadeOut(50);
                        $img2.addClass('hidden');
                        $next.removeClass('hidden').delay(14500, function(){
                            $next.show();
                            //console.log('next');
                        });

                        $zl.delay(14500).fadeIn(50);
                        $next.click(function(){
                            $replayBtn.fadeOut('fast');
                            $downloadBtn.show();
                            $next.fadeTo(0);

                        });
                    }
                });
            } 

        });
    });

});//end jQuery
