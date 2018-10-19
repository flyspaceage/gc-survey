(function($) {

	// Set variables
	var $activeSlide = $(".active"),
		$skinny = $(".skinny-container"),
		$carousel = $(".carousel"),
		$carouselContainer = $(".carousel-container"),
		$interviewPref = $('.interview-preferences'),
		$marketPref = $('.global-markets'),
		$handSwipe = ('#hand-swipe'),
		$handSwipe2 = ('#hand-swipe-female'),
		$phoneBG2 = ('#phone-bg2'),
		$txtMarket = ('#txt-market'),
		$appBG1 = ('#app-bg1'),
		$appBG2 = ('#app-bg2'),
		$labels = ('#labels'),
		$icons = ('#icons'),
		$txtFormat = $("#txt-format"),
		$txtInterview = $("#txt-interview"),
		$phoneBG1 = $("#phone-bg1"),
		$deskGray = $("#desk-gray"),
		$deskRed = $("#desk-red"),
		$deskBlue = $("#desk-blue"),
		$replayBtn = $('#replay-btn'),
		$playBtn = $('#play-btn'),
		$globalChart = $('.chart1'),
		$label1 = $('#label1'),
		$label2 = $('#label2'),
		$label3 = $('#label3'),
		$label4 = $('#label4'),
		$label5 = $('#label5'),
		$label6 = $('#label6'),
		$bar1 = $('#bar1'),
		$bar2 = $('#bar2'),
		$bar3 = $('#bar3'),
		$bar4 = $('#bar4'),
		$bar5 = $('#bar5'),
		$bar6 = $('#bar6'),
		$downloadBtn = $('#download-btn'),
		$downloadPdf = $('.download-pdf'),
		$genderDifferences = $('#gif-d'),
		$next = $('#next');


/*MARKETS*/
	$marketPref.click(function(event) {
		//console.log('View User Instructions');
		// UI|UX Instruction - click the app icon to view the statistics
		var tl2 = new TimelineMax(event);

		tl2.from($handSwipe, 1, { display:'block', top: 400, left: 5 })
			.to($handSwipe, 0.5, {display:'block', top: 130, left: 25, ease: Bounce.easeOut}, 'appColor')
			.to('#app-sq12', 0.25, {backgroundColor:"#466ea5", opacity: 1, ease:Power3.easeOut}, 'appColor')
			.to('#app-sq22, #app-sq32, #app-sq42, #app-sq52, #app-sq62', 0.25, {backgroundColor:"#cacbce", opacity: 1}, 'appColor')
			.to('#app-txt12', 0.25, {color:"#FFF", opacity: 1, ease:Power3.easeOut}, 'appColor')
			.to('#app-txt22, #app-txt32, #app-txt42, #app-txt52, #app-txt62', 1, {color:"#282a32", opacity: 1}, 'appColor')
			.to($label1, 0.25, {color:"#466ea5", opacity: 1, ease:Power3.easeOut}, 'appColor')
			.to($bar1, 0.25, {opacity:1}, 'appColor')
			.to($handSwipe, 1, { display:'block', top: 400, left: 5 }, 'appColor')
			.to($handSwipe, 0.5, { autoAlpha: 0, opacity: 0, display:'none'});

		$(this).unbind(event);//prevents multiple interactions
	});

//Global
	$('#app-sq12').click(function(){

		var tl2Sq12 = new TimelineMax();

		tl2Sq12.to('#app-sq12', 0.25, {backgroundColor:"#466ea5", opacity: 1}, 'appBG1')//BG color
				.to('#app-sq22, #app-sq32, #app-sq42, #app-sq52, #app-sq62', 1, {backgroundColor:"#cacbce", opacity: 1}, 'appBG1')
				.to('#app-txt12', 0.25, {color:"#FFF", opacity: 1, ease:Power3.easeOut}, 'appBG1')//Font color
				.to('#app-txt22, #app-txt32, #app-txt42, #app-txt52, #app-txt62', 1, {color:"#282a32", opacity: 1}, 'appBG1')
				.to($label1, 0.25, {color:"#466ea5", opacity: 1, ease:Power3.easeOut}, 'appBG1')//Label color
				.to([$label2,$label3,$label4,$label5,$label6], 1, {color:"#a3a5aa", opacity: 1, ease:Power3.easeOut}, 'appBG1')
				.to($bar1, 0.25, {opacity:1}, 'appBG1')//bar chart color
				.to([$bar2,$bar3,$bar4,$bar5,$bar6], 1, {opacity:0.2}, 'appBG1');
			
		$(this).unbind(event);//prevents multiple interactions

	});

//Australia
	$('#app-sq22').click(function(){

		var tl2Sq22 = new TimelineMax();

		tl2Sq22.to('#app-sq22', 0.25, {backgroundColor:"#466ea5", opacity: 1}, 'appBG2')//bg color
			.to('#app-sq12, #app-sq32, #app-sq42, #app-sq52, #app-sq62', 1, {backgroundColor:"#cacbce", opacity: 1}, 'appBG2')
			.to('#app-txt22', 0.25, {color:"#FFF", opacity: 1}, 'appBG2')//Font color
			.to('#app-txt12, #app-txt32, #app-txt42, #app-txt52, #app-txt62', 1, {color:"#282a32", opacity: 1, ease:Power3.easeOut}, 'appBG2')
			.to($label2, 0.25, {color:"#466ea5", opacity: 1, ease:Power3.easeOut}, 'appBG2')//Label color
			.to([$label1, $label3, $label4, $label5, $label6], 1, {color:"#a3a5aa", opacity: 1, ease:Power3.easeOut}, 'appBG2')
			.to($bar2, 0.25, {opacity:1}, 'appBG2')//bar chart color
			.to([$bar1, $bar3, $bar4, $bar5, $bar6], 1, {opacity:0.2}, 'appBG2');
		
		$(this).unbind(event);//prevents multiple interactions

	});

//China
	$('#app-sq32').click(function(){

		var tl2Sq32 = new TimelineMax();

		tl2Sq32.to('#app-sq32', 0.25, {backgroundColor:"#466ea5", opacity: 1}, 'appBG3')//bg color
			.to('#app-sq12, #app-sq22, #app-sq42, #app-sq52, #app-sq62', 1, {backgroundColor:"#cacbce", opacity: 1}, 'appBG3')//Font color
			.to('#app-txt32', 0.25, {color:"#FFF", opacity: 1, ease:Power3.easeOut}, 'appBG3')//active
			.to('#app-txt12, #app-txt22, #app-txt42, #app-txt52, #app-txt62', 1, {color:"#282a32", opacity: 1}, 'appBG3')//Label color
			.to($label3, 0.25, {color:"#466ea5", opacity: 1, ease:Power3.easeOut}, 'appBG3')//active
			.to([$label1, $label2, $label4, $label5, $label6], 1, {color:"#a3a5aa", opacity: 1, ease:Power3.easeOut}, 'appBG3')
			.to($bar3, 0.25, {opacity:1}, 'appBG3')//bar chart color
			.to([$bar1, $bar2, $bar4, $bar5, $bar6], 1, {opacity:0.2}, 'appBG3');
		
		$(this).unbind(event);//prevents multiple interactions
	});

//Mexico
	$('#app-sq42').click(function(){

		var tl2Sq42 = new TimelineMax();
	
		tl2Sq42.to('#app-sq42', 0.25, {backgroundColor:"#466ea5", opacity: 1}, 'appBG4')//bg color
			.to('#app-sq12, #app-sq22, #app-sq32, #app-sq52, #app-sq62', 1, {backgroundColor:"#cacbce", opacity: 1}, 'appBG4')//Font color
			.to('#app-txt42', 0.25, {color:"#FFF", opacity: 1, ease:Power3.easeOut}, 'appBG4')//active
			.to('#app-txt12, #app-txt22, #app-txt32, #app-txt52, #app-txt62', 1, {color:"#282a32", opacity: 1}, 'appBG4')//Label color
			.to($label4, 0.25, {color:"#466ea5", opacity: 1, ease:Power3.easeOut}, 'appBG4')//active
			.to([$label1, $label2, $label3, $label5, $label6], 1, {color:"#a3a5aa", opacity: 1, ease:Power3.easeOut}, 'appBG4')//bar chart color
			.to($bar4, 0.25, {opacity:1}, 'appBG4')//active
			.to([$bar1, $bar2, $bar3, $bar5, $bar6], 1, {opacity:0.2}, 'appBG4');
			
		$(this).unbind(event);//prevents multiple interactions
	});

//United Kingdom
	$('#app-sq52').click(function(){

		var tl2Sq52 = new TimelineMax();

		tl2Sq52.to('#app-sq52', 0.25, {backgroundColor:"#466ea5", opacity: 1}, 'appBG5')//bg color
			.to('#app-sq12, #app-sq22, #app-sq32, #app-sq42, #app-sq62', 1, {backgroundColor:"#cacbce", opacity: 1}, 'appBG5')//Font color
			.to('#app-txt52', 0.25, {color:"#FFF", opacity: 1, ease:Power3.easeOut}, 'appBG5')//active
			.to('#app-txt12, #app-txt22, #app-txt32, #app-txt42, #app-txt62', 1, {color:"#282a32", opacity: 1}, 'appBG5')//Label color
			.to($label5, 0.25, {color:"#466ea5", opacity: 1, ease:Power3.easeOut}, 'appBG5')//active
			.to([$label1, $label2, $label3, $label4, $label6], 1, {color:"#a3a5aa", opacity: 1, ease:Power3.easeOut}, 'appBG5')//bar chart color
			.to($bar5, 0.25, {opacity:1}, 'appBG5')//active
			.to([$bar1, $bar2, $bar3, $bar4, $bar6], 1, {opacity:0.2}, 'appBG5');
		
		$(this).unbind(event);//prevents multiple interactions
	});

//United States
	$('#app-sq62').click(function(){

		var tl2Sq62 = new TimelineMax();

		tl2Sq62.to('#app-sq62', 0.25, {backgroundColor:"#466ea5", opacity: 1}, 'appBG6')//bg color
			.to('#app-sq12, #app-sq22, #app-sq32, #app-sq42, #app-sq52', 1, {backgroundColor:"#cacbce", opacity: 1}, 'appBG6')//Font color
			.to('#app-txt62', 0.25, {color:"#FFF", opacity: 1, ease:Power3.easeOut}, 'appBG6')//active
			.to('#app-txt12, #app-txt22, #app-txt32, #app-txt42, #app-txt52', 1, {color:"#282a32", opacity: 1}, 'appBG6')//Label color
			.to($label6, 0.25, {color:"#466ea5", opacity: 1, ease:Power3.easeOut}, 'appBG6')//active
			.to([$label1, $label2, $label3, $label4, $label5], 1, {color:"#a3a5aa", opacity: 1, ease:Power3.easeOut}, 'appBG6')//bar chart color
			.to($bar6, 0.25, {opacity:1}, 'appBG6')//active
			.to([$bar1, $bar2, $bar3, $bar4, $bar5], 1, {opacity:0.2}, 'appBG6');
		
		$(this).unbind(event);//prevents multiple interactions

	});
		
/*INTERVIEW PREFERENCES*/

	TweenLite.to('#pct-red1, #pct-blue1, #pct-red2, #pct-blue2, #pct-red3, #pct-blue3, #pct-red4, #pct-blue4, #pct-red5, #pct-blue5, #pct-red6, #pct-blue6', 0.1, {opacity: 0});

	$interviewPref.click(function(event) {
		//console.log('View User Instructions 2');
		// UI|UX Instruction - click the app icon to view the statistics
		var tl5 = new TimelineMax(event);

		tl5.from($handSwipe2, 1, { display:'block', top: 400, left: 0 })
			.to($handSwipe2, 0.5, {display:'block', top: 130, left: 5, ease: Bounce.easeOut}, 'appColor2')
			.to('#pct-red1, #pct-blue1', 0.25, {opacity: 1}, 'appColor2')
			.to('#app-sq1', 0.25, {backgroundColor:"#ab404b", opacity: 1, ease:Power3.easeOut}, 'appColor2')
			.to('#app-sq2, #app-sq3, #app-sq4, #app-sq5, #app-sq6', 0.25, {backgroundColor:"#cacbce", opacity: 1}, 'appColor2')
			.to('#app-txt1', 0.25, {color:"#FFF", opacity: 1, ease:Power3.easeOut}, 'appColor2')
			.to('#bar-red1', 0.25, {height:200, backgroundColor:"#ab404b", opacity: 1, scaleY: 1, transformOrigin: '50% bottom'}, 'appColor2')//red
			.to('#bar-red2', 0.25, {opacity: 1}, 'appColor2')//red
			.to('#bar-blue1', 0.25, {height:190,backgroundColor:"#466ea5", opacity: 1, scaleY: 1, transformOrigin: '50% bottom', ease: Elastic.easeOut.config(1, 0.2)}, 'appColor2')//blue
			.to('#bar-blue2', 0.25, {opacity: 1}, 'appColor2')//blue
			.to('#text-format', 0.25, {opacity: 1}, 'appColor2')
			.to($handSwipe2, 1, { display:'block', top: 400, left: 5 }, 'appColor2')
			.to($handSwipe2, 0.5, { autoAlpha: 0, opacity: 0, display:'none'});

		$(this).unbind(event);//prevents multiple interactions
	});

	$('#app-sq1').click(function(){

		var tl1Sq1 = new TimelineMax();

		tl1Sq1.to('#pct-red1, #pct-blue1', 0.5, {opacity: 1, ease:Power3.easeOut}, 'textFormat')
			.to('#pct-red2, #pct-blue2, #pct-red3, #pct-blue3, #pct-red4, #pct-blue4, #pct-red5, #pct-blue5, #pct-red6, #pct-blue6', 0.5, {opacity: 0, ease:Power3.easeOut}, 'textFormat')//chart
			.to('#bar-red1', 0.5, {height:200, backgroundColor:"#ab404b", opacity: 1, scaleY: 1, transformOrigin: 'bottom', ease: Power0.easeNone}, 'textFormat')//red
			.to('#bar-blue1', 0.5, {height:190,backgroundColor:"#466ea5", opacity: 1, scaleY: 1, transformOrigin: 'bottom', ease: Power0.easeNone}, 'textFormat')//blue//BG color
			.to('#app-sq1', 0.5, {backgroundColor:"#ab404b", opacity: 1, ease:Power3.easeOut}, 'textFormat')//red
			.to('#app-sq2, #app-sq3, #app-sq4, #app-sq5, #app-sq6', 0.5, {backgroundColor:"#cacbce", opacity: 1, ease:Power3.easeOut}, 'textFormat')//Font color
			.to('#app-txt1', 0.5, {color:"#FFF", opacity: 1, ease:Power3.easeOut}, 'textFormat')
			.to('#app-txt2, #app-txt3, #app-txt4, #app-txt5, #app-txt6', 0.5, {color:"#282a32", opacity: 1, ease:Power3.easeOut}, 'textFormat')//interview format
			.to('#text-format', 0.5, {autoAlpha: 1, opacity: 1}, 'textFormat')
			.to('#text-format2, #text-format3, #text-format4, #text-format5, #text-format6', 0.5, {autoAlpha: 0, opacity: 0}, 'textFormat');		
	
		$('.counter1').counterUp();

		$(this).unbind(event);//prevents multiple interactions

	});

	$('#app-sq2').click(function(){

		var tl2Sq2 = new TimelineMax();

		tl2Sq2.to('#pct-red2, #pct-blue2', 0.5, {opacity: 1, ease:Power3.easeOut}, 'textFormat1')//red
			.to('#pct-red1, #pct-blue1, #pct-red3, #pct-blue3, #pct-red4, #pct-blue4, #pct-red5, #pct-blue5, #pct-red6, #pct-blue6', 0.5, {opacity: 0, ease:Power3.easeOut}, 'textFormat1')//chart
			.to('#bar-red1', 0.5, {height:180, backgroundColor:"#ab404b", opacity: 1, scaleY: 1, transformOrigin: 'bottom', ease: Power0.easeNone}, 'textFormat1')//red
			.to('#bar-blue1', 0.5, {height:200,backgroundColor:"#466ea5", opacity: 1, scaleY: 1, transformOrigin: 'bottom', ease: Power0.easeNone}, 'textFormat1')//blue//bg color
			.to('#app-sq2', 0.5, {backgroundColor:"#ab404b", opacity: 1, ease:Power3.easeOut}, 'textFormat1')//red
			.to('#app-sq1, #app-sq3, #app-sq4, #app-sq5, #app-sq6', 0.5, {backgroundColor:"#cacbce", opacity: 1, ease:Power3.easeOut}, 'textFormat1')//Font color
			.to('#app-txt2', 0.5, {color:"#FFF", opacity: 1, ease:Power3.easeOut}, 'textFormat1')
			.to('#app-txt1, #app-txt3, #app-txt4, #app-txt5, #app-txt6', 0.5, {color:"#282a32", opacity: 1, ease:Power3.easeOut}, 'textFormat1')	//interview format
			.to('#text-format2', 0.5, {autoAlpha: 1, opacity: 1}, 'textFormat1')
			.to('#text-format, #text-format3, #text-format4, #text-format5, #text-format6', 0.5, {autoAlpha: 0, opacity: 0}, 'textFormat1');		
		
		$('.counter2').counterUp();
	
		$(this).unbind(event);//prevents multiple interactions

	});

	$('#app-sq3').click(function(){

		var tl2Sq3 = new TimelineMax();

		tl2Sq3.to('#pct-red3, #pct-blue3', 0.5, {opacity: 1, ease:Power3.easeOut}, 'textFormat2')//red
			.to('#pct-red2, #pct-blue2, #pct-red1, #pct-blue1, #pct-red4, #pct-blue4, #pct-red5, #pct-blue5, #pct-red6, #pct-blue6', 0.5, {opacity: 0, ease:Power3.easeOut}, 'textFormat2')//chart
			.to('#bar-red1', 0.5, {height:190, backgroundColor:"#ab404b", opacity: 1, scaleY: 1, transformOrigin: 'bottom', ease: Power0.easeNone}, 'textFormat2')//red
			.to('#bar-blue1', 0.5, {height:200,backgroundColor:"#466ea5", opacity: 1, scaleY: 1, transformOrigin: 'bottom', ease: Power0.easeNone}, 'textFormat2')//bg color
			.to('#app-sq3', 0.5, {backgroundColor:"#ab404b", opacity: 1, ease:Power3.easeOut}, 'textFormat2')//red
			.to('#app-sq1, #app-sq2, #app-sq4, #app-sq5, #app-sq6', 0.5, {backgroundColor:"#cacbce", opacity: 1, ease:Power3.easeOut}, 'textFormat2')//Font color
			.to('#app-txt3', 0.5, {color:"#FFF", opacity: 1, ease:Power3.easeOut}, 'textFormat2')
			.to('#app-txt1, #app-txt2, #app-txt4, #app-txt5, #app-txt6', 0.5, {color:"#282a32", opacity: 1, ease:Power3.easeOut}, 'textFormat2')//interview format
			.to('#text-format3', 0.5, {autoAlpha: 1, opacity: 1}, 'textFormat2')
			.to('#text-format2, #text-format, #text-format4, #text-format5, #text-format6', 0.5, {autoAlpha: 0, opacity: 0}, 'textFormat2');		
		
		$('.counter3').counterUp();
		
		$(this).unbind(event);//prevents multiple interactions
	});

	$('#app-sq4').click(function(){
		
		var tl2Sq4 = new TimelineMax();

		tl2Sq4.to('#pct-red4, #pct-blue4', 0.5, {opacity: 1, ease:Power3.easeOut}, 'textFormat3')//red
			.to('#pct-red2, #pct-blue2, #pct-red3, #pct-blue3, #pct-red1, #pct-blue1, #pct-red5, #pct-blue5, #pct-red6, #pct-blue6', 0.5, {opacity: 0, ease:Power3.easeOut}, 'textFormat3')//chart
			.to('#bar-red1', 0.5, {height:200, backgroundColor:"#ab404b", opacity: 1, scaleY: 1, transformOrigin: 'bottom', ease: Power0.easeNone}, 'textFormat3')//red
			.to('#bar-blue1', 0.5, {height:180,backgroundColor:"#466ea5", opacity: 1, scaleY: 1, transformOrigin: 'bottom', ease: Power0.easeNone}, 'textFormat3')//bg color
			.to('#app-sq4', 0.5, {backgroundColor:"#ab404b", opacity: 1, ease:Power3.easeOut}, 'textFormat3')//red
			.to('#app-sq1, #app-sq2, #app-sq3, #app-sq5, #app-sq6', 0.5, {backgroundColor:"#cacbce", opacity: 1, ease:Power3.easeOut}, 'textFormat3')//Font color
			.to('#app-txt4', 0.5, {color:"#FFF", opacity: 1, ease:Power3.easeOut}, 'textFormat3')
			.to('#app-txt1, #app-txt2, #app-txt3, #app-txt5, #app-txt6', 0.5, {color:"#282a32", opacity: 1, ease:Power3.easeOut}, 'textFormat3')//interview format
			.to('#text-format4', 0.5, {autoAlpha: 1, opacity: 1}, 'textFormat3')
			.to('#text-format2, #text-format3, #text-format, #text-format5, #text-format6', 0.5, {autoAlpha: 0, opacity: 0}, 'textFormat3');	
		
		$('.counter4').counterUp();
		
		$(this).unbind(event);//prevents multiple interactions
	});

	$('#app-sq5').click(function(){
		
		var tl2Sq5 = new TimelineMax();
		
		tl2Sq5.to('#pct-red5, #pct-blue5', 0.5, {opacity: 1, ease:Power3.easeOut}, 'textFormat4')//red
			.to('#pct-red2, #pct-blue2, #pct-red3, #pct-blue3, #pct-red4, #pct-blue4, #pct-red1, #pct-blue1, #pct-red6, #pct-blue6', 0.5, {opacity: 0, ease:Power3.easeOut}, 'textFormat4')//chart
			.to('#bar-red1', 0.5, {height:195, backgroundColor:"#ab404b", opacity: 1, scaleY: 1, transformOrigin: 'bottom', ease: Power0.easeNone}, 'textFormat4')//red
			.to('#bar-blue1', 0.5, {height:200,backgroundColor:"#466ea5", opacity: 1, scaleY: 1, transformOrigin: 'bottom', ease: Power0.easeNone}, 'textFormat4')//bg color
			.to('#app-sq5', 0.5, {backgroundColor:"#ab404b", opacity: 1, ease:Power3.easeOut}, 'textFormat4')
			.to('#app-sq1, #app-sq2, #app-sq3, #app-sq4, #app-sq6', 0.5, {backgroundColor:"#cacbce", opacity: 1, ease:Power3.easeOut}, 'textFormat4')//Font color
			.to('#app-txt5', 0.5, {color:"#FFF", opacity: 1, ease:Power3.easeOut}, 'textFormat4')
			.to('#app-txt1, #app-txt2, #app-txt3, #app-txt4, #app-txt6', 0.5, {color:"#282a32", opacity: 1, ease:Power3.easeOut}, 'textFormat4')//interview format
			.to('#text-format5', 0.5, {autoAlpha: 1, opacity: 1}, 'textFormat4')
			.to('#text-format2, #text-format3, #text-format4, #text-format, #text-format6', 0.5, {autoAlpha: 0, opacity: 0}, 'textFormat4');

		$('.counter5').counterUp();
		
		$(this).unbind(event);//prevents multiple interactions
	});

	$('#app-sq6').click(function(){

		var tl2Sq6 = new TimelineMax();

		tl2Sq6.to('#pct-red6, #pct-blue6', 0.5, {opacity: 1, ease:Power3.easeOut}, 'textFormat5')//red
			.to('#pct-red2, #pct-blue2, #pct-red3, #pct-blue3, #pct-red4, #pct-blue4, #pct-red5, #pct-blue5, #pct-red1, #pct-blue1', 0.5, {opacity: 0, ease:Power3.easeOut}, 'textFormat5')//chart
			.to('#bar-red1', 0.5, {height:180, backgroundColor:"#ab404b", opacity: 1, scaleY: 1, transformOrigin: 'bottom', ease: Power0.easeNone}, 'textFormat5')//red
			.to('#bar-blue1', 0.5, {height:200,backgroundColor:"#466ea5", opacity: 1, scaleY: 1, transformOrigin: 'bottom', ease: Power0.easeNone}, 'textFormat5')//blue//bg color
			.to('#app-sq6', 0.5, {backgroundColor:"#ab404b", opacity: 1, ease:Power3.easeOut}, 'textFormat5')
			.to('#app-sq1, #app-sq2, #app-sq3, #app-sq4, #app-sq5', 0.5, {backgroundColor:"#cacbce", opacity: 1, ease:Power3.easeOut}, 'textFormat5')//Font color
			.to('#app-txt6', 0.5, {color:"#FFF", opacity: 1, ease:Power3.easeOut}, 'textFormat5')
			.to('#app-txt1, #app-txt2, #app-txt3, #app-txt4, #app-txt5', 0.5, {color:"#282a32", opacity: 1, ease:Power3.easeOut}, 'textFormat5')//interview format
			.to('#text-format6', 0.5, {autoAlpha: 1, opacity: 1}, 'textFormat5')
			.to('#text-format2, #text-format3, #text-format4, #text-format5, #text-format', 0.5, {autoAlpha: 0, opacity: 0}, 'textFormat5');		
		
		$('.counter6').counterUp();
		
		$(this).unbind(event);//prevents multiple interactions
	});

})(jQuery);