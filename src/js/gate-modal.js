$(document).ready(function(){
	
// Variable to hold request
var request;
// Variable with URL to google sheet
var googleSheetURL = "https://script.google.com/macros/s/AKfycbxDWXZZrYVQ59ZrSxmJk41BF0PQo265fEyhs8PLJiHGhkfuUHA/exec";

// Bind to the submit event of contact us form starts
$("#contactUsForm").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);
    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");
    // Serialize the data in the form
    var serializedData = $form.serialize();
    // Let's disable the inputs for the duration of the Ajax request.
    $inputs.prop("disabled", true);
    // Fire off the request to Google sheet
    request = $.ajax({
        url: googleSheetURL,
        type: "post",
        data: serializedData
    });
    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        //console.log("Hooray, it worked!");
        //console.log(response);
        //console.log(textStatus);
        //console.log(jqXHR);
        $form.find("input[type=text], input[type=email], input[type=tel], select, textarea").prop("value","");
        $("#contactUs").hide();
        $("#contactUsThankYou").show();
    });
    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });
    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });
    // Prevent default posting of form
    event.preventDefault();
});
// Bind to the submit event of contact us form ends
	
$("#modalDiv").animatedModal({
        modalTarget:'leafModal'
    });
$('#downloadBtn').click(function(e){
	 e.preventDefault();
	 var isCookiePresent = readCookie('downloadPaper');
	 if (isCookiePresent == null) {	
		showModal();
	 } else {
		$("#modalHref")[0].click();
	 }	 
});
$('#PaperDownloadForm').submit(function(e){
         e.preventDefault();
         var txtUrl = "";
		 var fname = "";
		 var lname = "";
		 var email = "";
		 var phone = "";
		 var country = "";
         if(validateForm('#PaperDownloadForm')){
			populateGoogleSheet(e);
			$("#btn-close-modal")[0].click();
			$("#modalHref")[0].click();
         }
});
function populateGoogleSheet(event){
	// Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $('#PaperDownloadForm');
    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");
    // Serialize the data in the form
    var serializedData = $form.serialize();
    // Let's disable the inputs for the duration of the Ajax request.
     $inputs.prop("disabled", true);
    // Fire off the request to Google Sheet
    request = $.ajax({
        url: googleSheetURL,
        type: "post",
        data: serializedData
    });
    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        createCookie('downloadPaper', true);
    });
    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });
    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });
    // Prevent default posting of form
    event.preventDefault();
}
function showModal() {
	$("#modalDiv")[0].click();
}
function validateForm(formId){
    var isFormValid = true;
    $(formId).find('input[type=text], textarea').filter(".required").each(function(){ 
        var isTextValid = $(this).val() != null && $(this).val() != "";
        if(!isTextValid)
           $(this).addClass("error");
        else
           $(this).removeClass("error");
    });
    $(formId).find('input[type=email]').filter(".required").each(function(){ 
        var isEmailValid = $(this).val() != null && $(this).val() != "" && validateEmail($(this).val());
         if(!isEmailValid)
            $(this).addClass("error");
         else
            $(this).removeClass("error");
    });
    $(formId).find('input[type=checkbox]').filter(".required").each(function(){ 
        var isValid = $(this)[0].checked;
        if(!isValid){
           $(this).addClass("error"); 
           $("label[for='"+$(this).attr("id")+"']").addClass("error");
        }
        else{
           $(this).removeClass("error"); 
           $("label[for='"+$(this).attr("id")+"']").removeClass("error");
        }       
    });
    $(formId).find('select').filter(".required").each(function(){ 
        var isOptionValid = $(this).val() != null && $(this).val() != "";
        if(!isOptionValid)
           $(this).addClass("error");
        else
           $(this).removeClass("error");
    });
    $(formId).find('input[type=radio]').filter(".required").each(function(){ 
        var name= $(this).attr("name") ;
        if($('input[name=' + name + ']:checked').length<=0){
           $(this).addClass("error"); 
           $("label[for='"+$(this).attr("id")+"']").addClass("error");
        }
        else{
           $(this).removeClass("error"); 
           $("label[for='"+$(this).attr("id")+"']").removeClass("error");
        }       
    });
    var errorItems = $(formId).find('input[type=text], input[type=checkbox], textarea, input[type=email], select, input[type=radio]').filter(".error");
    if(errorItems.length >0)
    	isFormValid = false;
    return isFormValid;
}

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function redirect(url){
    var pattern = new RegExp(".*?location.*");
    if(pattern.test(url))
     location.assign(url);
    else
      window.open(url, '_blank');
}

});