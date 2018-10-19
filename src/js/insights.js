$(document).ready(function(){

/*
* INSIGHTS CAROUSEL
**/

//CHART_19
    $(".cpq_chart-bar-19").mouseover(function(){
        $("#img1").show();
    });
    $(".cpq_chart-bar-19").mouseout(function(){
        $("#img1").hide();
    });
//CHART_18
    $(".cpq_chart-bar-18").mouseover(function(){
        $("#img2").show();
    });
    $(".cpq_chart-bar-18").mouseout(function(){
        $("#img2").hide();
    });
//CHART_17
    $(".cpq_chart-bar-17").mouseover(function(){
        $("#img3").show();
    });
    $(".cpq_chart-bar-17").mouseout(function(){
        $("#img3").hide();
    });
//CHART_16
    $(".cpq_chart-bar-16").mouseover(function(){
        $("#img4").show();
    });
    $(".cpq_chart-bar-16").mouseout(function(){
        $("#img4").hide();
    });
//CHART_15
    $(".cpq_chart-bar-15").mouseover(function(){
        $("#img5").show();
    });
    $(".cpq_chart-bar-15").mouseout(function(){
        $("#img5").hide();
    });
//CHART_14
    $(".cpq_chart-bar-14").mouseover(function(){
        $("#img6").show();
    });
    $(".cpq_chart-bar-14").mouseout(function(){
        $("#img6").hide();
    });
//CHART_13
    $(".cpq_chart-bar-13").mouseover(function(){
        $("#img7").show();
    });
    $(".cpq_chart-bar-13").mouseout(function(){
        $("#img7").hide();
    });
//CHART_12
    $(".cpq_chart-bar-12").mouseover(function(){
        $("#img8").show();
    });
    $(".cpq_chart-bar-12").mouseout(function(){
        $("#img8").hide();
    });

//UI UX DIRECTION FOR USE - SHOWS USER THE HIDDEN CONTENT
    $('.insight-02-stage').ready(function(){
            $('#img1').show().css('opacity', 1);
            $('.cpq_chart-bar-19').show().css('opacity', 1);
        });

    $('.insight-02-stage').hover(function(){
            $('.cpq_chart-bar-19').hide().css('opacity', 0.5);
            $('#img1').hide().css('opacity', 0);
        });

    function showOnMovement(){
        $(".cpq_chart-bar-19").mouseover(function(){
            $(".cpq_chart-bar-19").animate({opacity: 1}, 0);
                $("#img1").css('opacity', 1);
        });
        $(".cpq_chart-bar-19").mouseout(function(){
            $(".cpq_chart-bar-19").animate({opacity: 0.5}, 0);
                $("#img1").hide();
        });

        $(".cpq_chart-bar-19").mouseout(function(){
            $(".cpq_chart-bar-19").animate({opacity: 0.5}, 0);
                $("#img1").hide();
        });
    }

    showOnMovement();

    function hideOnMovement(){
        $('.cpq_insight-02-stage').hover(function(){
            $('#img1').css('opacity', 0);
            $('.cpq_chart-bar-19').css('opacity', 0.5);
        });
    }

    hideOnMovement();
    
//Green Panel
$(document).ready(function() {
    $(".cpq_insight-img > img").hover(over, out);
});

function over(){
  TweenMax.to(this, 0, {rotation:20, scale:1.2, opacity:0.8, ease: Elastic.easeOut.config(1, 0.3) });
}

function out(){
  TweenMax.to(this, 0, {rotation:0, scale:1, opacity:1});
}
//End of Carousel
});