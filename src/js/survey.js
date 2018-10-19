$(document).ready(function () {

	//on submit, hide btn
	$('#submit-form').on('click', function(e) {
	  	e.preventDefault();
	    $("#submit-form").hide();
	    $(".survey-response").show(200).css("display", "inline-block");
	});

	$('form#survey-form').on('change', function(){
		//1
		if($('input#answer_1').is(':checked')) 
			$('label.icon.answer_1').addClass('cp-selected'); 
		else 
		 	$('label.icon.answer_1').removeClass('cp-selected');
		//2
		if($('input#answer_2').is(':checked')) 
			$('label.icon.answer_2').addClass('cp-selected'); 
		else 
		 	$('label.icon.answer_2').removeClass('cp-selected');

		 //3
		if($('input#answer_3').is(':checked')) 
			$('label.icon.answer_3').addClass('cp-selected'); 
		else 
		 	$('label.icon.answer_3').removeClass('cp-selected');

		 //4
		if($('input#answer_4').is(':checked')) 
			$('label.icon.answer_4').addClass('cp-selected'); 
		else 
		 	$('label.icon.answer_4').removeClass('cp-selected');

		 //5
		if($('input#answer_5').is(':checked')) 
			$('label.icon.answer_5').addClass('cp-selected'); 
		else 
		 	$('label.icon.answer_5').removeClass('cp-selected');

		 //6
		if($('input#answer_6').is(':checked')) 
			$('label.icon.answer_6').addClass('cp-selected'); 
		else 
		 	$('label.icon.answer_6').removeClass('cp-selected');

		 //7
		if($('input#answer_7').is(':checked')) 
			$('label.icon.answer_7').addClass('cp-selected'); 
		else 
		 	$('label.icon.answer_7').removeClass('cp-selected');
	 });

	//select single checkbox
	$('input.cp-btn').on('change', function() {
	    $('input.cp-btn').not(this).prop('checked', false);  
	});

	//collect user data
	var $form = $('form#survey-form'),
    url = 'https://script.google.com/macros/s/AKfycbwj0xF_cl-qvDMJF4buiDxu252OMxVfBoeCr25MxzCcTLLezfe4/exec';
	
	//send user data
	$('#submit-form').on('click', function(e) {
	  e.preventDefault();
	  $.fn.serializeObject = function() {
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name]) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};
	  var jqxhr = $.ajax({
	    url: url,
	    method: "GET",
	    dataType: "json",
	    data: $form.serializeObject()
	  }).done(
	    // do something
	  );
	});

	//https://docs.google.com/spreadsheets/d/e/2PACX-1vSE1iGay3BmmR9cMUHgR8rxK9n1fCItNrisOQsrW5nYTeNO38xGkOILvMtiJDRU09Y45HHcRyBM4qBj/pubhtml
	var answers = 'https://spreadsheets.google.com/feeds/list/1m-9zTTO53GOZnCoBa72ilczXb2w8KbhlL2rf2m38klI/od6/public/values?alt=json';
	
	//retrieve data
	fetch(answers)
	.then(function(response) {
	    return response.json();
	}).then(function(json) {
	   	//console.log(json);

		var sVal1 = json.feed.entry["0"].gsx$result1.$t,
			sVal2 = json.feed.entry["0"].gsx$result2.$t,
			sVal3 = json.feed.entry["0"].gsx$result3.$t,
			sVal4 = json.feed.entry["0"].gsx$result4.$t,
			sVal5 = json.feed.entry["0"].gsx$result5.$t,
			sVal6 = json.feed.entry["0"].gsx$result6.$t,
			sVal7 = json.feed.entry["0"].gsx$result7.$t,
			iNum1 = parseInt(sVal1),
			iNum2 = parseInt(sVal2),
			iNum3 = parseInt(sVal3),
			iNum4 = parseInt(sVal4),
			iNum5 = parseInt(sVal5),
			iNum6 = parseInt(sVal6),
			iNum7 = parseInt(sVal7),
		 	totalInt = iNum1 + iNum2 + iNum3 + iNum4 + iNum5 + iNum6 + iNum7,
		 	result1 = (iNum1/totalInt*100).toFixed([0]),
		 	result2 = (iNum2/totalInt*100).toFixed([0]),
		 	result3 = (iNum3/totalInt*100).toFixed([0]),
		 	result4 = (iNum4/totalInt*100).toFixed([0]),
		 	result5 = (iNum5/totalInt*100).toFixed([0]),
		 	result6 = (iNum6/totalInt*100).toFixed([0]),
		 	result7 = (iNum7/totalInt*100).toFixed([0]);

		var surveyResults = document.getElementById("surveyResults").getContext('2d');
		var barChart = new Chart(surveyResults, {
		    type: 'bar',
		    data: {
		    	labels: ['Flexible arrival and departure times', 'Work from home/location independence', 'Choice and control in work shifts', 'Opportunity for sabbaticals or career breaks', 'Compressed shifts/work weeks', 'Caregiver leave'],
		        datasets: [{
		            label: '% of Vote',
		            data: [result1, result2, result3, result4, result5, result6],
		            backgroundColor: ['rgba(70, 110, 165, 0.6)', 'rgba(99, 144, 198, 0.6)', 'rgba(171, 64, 75, 0.6)', 'rgba(110, 143, 130, 0.6)', 'rgba(231, 124, 34, 0.6)', 'rgba(40, 42, 50, 0.6)'],
		            borderColor: ['rgba(70, 110, 165, 1)', 'rgba(99, 144, 198, 1)', 'rgba(171, 64, 75, 1)', 'rgba(110, 143, 130, 0.6)', 'rgba(231, 124, 34, 0.6)', 'rgba(40, 42, 50, 0.6)'],
		            borderWidth: 1.5
		        }]
		    },
		    options: {
		        scales: {
				   yAxes: [{
				       ticks: {
				           min: 0,
				           max: 100,
				           callback: function(value) {
				               return value + "%";
				           }
				       },
				       scaleLabel: {
				           display: true,
				           labelString: "Percentage"
				       }
				   }]
				}
		    }
		});

		function addVote(){

			var num1 = iNum1,
				num2 = iNum2,
				num3 = iNum3,
				num4 = iNum4,
				num5 = iNum5,
				num6 = iNum6,
				num7 = iNum7,
				total = totalInt + 1;

			var barChart = new Chart(surveyResults, {
			    type: 'bar',
				data: {
			    	labels: ['Flexible arrival and departure times', 'Work from home/location independence', 'Choice and control in work shifts', 'Opportunity for sabbaticals or career breaks', 'Compressed shifts/work weeks', 'Caregiver leave'],
			        datasets: [{
			            label: '% of Vote',
			            data: [result1, result2, result3, result4, result5, result6],
			            backgroundColor: ['rgba(70, 110, 165, 0.6)', 'rgba(99, 144, 198, 0.6)', 'rgba(171, 64, 75, 0.6)', 'rgba(110, 143, 130, 0.6)', 'rgba(231, 124, 34, 0.6)', 'rgba(40, 42, 50, 0.6)'],
			            borderColor: ['rgba(70, 110, 165, 1)', 'rgba(99, 144, 198, 1)', 'rgba(171, 64, 75, 1)', 'rgba(110, 143, 130, 0.6)', 'rgba(231, 124, 34, 0.6)', 'rgba(40, 42, 50, 0.6)'],
			            borderWidth: 1.5
			        }]
			    },
			    options: {
			        scales: {
					   yAxes: [{
					       ticks: {
					           min: 0,
					           max: 100,
					           callback: function(value) {
					               return value + "%";
					           }
					       },
					       scaleLabel: {
					           display: true,
					           labelString: "Percentage"
					       }
					   }]
					}
			    }
			});

			if ($('input#answer_1').is(":checked")){
	  			num1 = (num1 + 1);
	  			local_total = (total + 1);
	  			console.log(per1);
	  			str1 = (num1/local_total*100).toFixed([0]);
				per1 = parseInt(str1);
				//console.log(per1);
	  			barChart.data.datasets[0].data[0] = per1;
				barChart.update();
			} if ($('input#answer_2').is(":checked")){
	  			num2 = (num2 + 1);
	  			per2 = (num2/total*100).toFixed([0]);
	  			//console.log(per2);
	  			barChart.data.datasets[0].data[1] = per2;
				barChart.update();
			} if  ($('input#answer_3').is(":checked")){
	  			num3 = (num3 + 1);
	  			per3 = (num3/total*100).toFixed([0]);
	  			//console.log(per3);
	  			barChart.data.datasets[0].data[2] = per3;
				barChart.update();
			} if  ($('input#answer_4').is(":checked")){
	  			num4 = (num4 + 1);
	  			per4 = (num4/total*100).toFixed([0]);
	  			//console.log(per4);
	  			barChart.data.datasets[0].data[3] = per4;
				barChart.update();
			} if  ($('input#answer_5').is(":checked")){
	  			num5 = (num5 + 1);
	  			per5 = (num5/total*100).toFixed([0]);
	  			//console.log(per5);
	  			barChart.data.datasets[0].data[4] = per5;
				barChart.update();
			} if  ($('input#answer_6').is(":checked")){
	  			num6 = (num6 + 1);
	  			per6 = (num6/total*100).toFixed([0]);
	  			//console.log(per6);
	  			barChart.data.datasets[0].data[5] = per6;
				barChart.update();

			} if  ($('input#answer_7').is(":checked")){
	  			num7 = (num7 + 1);
	  			per7 = (num7/total*100).toFixed([0]);
	  			//console.log(per7);
				barChart.data.datasets[0].data[6] = per7;
				barChart.update();
			}
		}

		//update chart data
		$('#submit-form').on('click', function(e) {
			e.preventDefault();
			addVote();
		});
	});

});//end document