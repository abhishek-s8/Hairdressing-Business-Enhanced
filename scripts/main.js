function validCreditCard(creditCardNumber){
	var a = document.getElementById("creditCard").value;
	var filter = /^(\d{4}-?\d{4}-?\d{4}-?\d{4})$/;
	if(filter.test(a)){
		return true;
	}
	else{
		return false;
	}
}

function validateEmail(email){
	var a = document.getElementById(email).value;
	var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(filter.test(a)){
		return true;
	}
	else{
		return false;
	}
}

const setDateFormat = "mm/dd/yy";

$(function () {
  	$('[data-toggle="tooltip"]').tooltip();
  	$("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for Phone");
            $("#phone").val("xxx-xxx-xxxx");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });
    $("#creditCard").on("change", function(){
        if (!validCreditCard("creditCard")){
            alert("Wrong format for Credit Card");
            $("#creditCard").val("xxxx-xxxx-xxxx-xxxx");
            $("#creditCard").addClass("error");
        }
        else {
            $("#creditCard").removeClass("error");
        }
    });
    $("#email").on("change", function(){
        if (!validateEmail("email")){
            alert("Wrong format for Email");
            $("#email").val("example@mail.com");
            $("#email").addClass("error");
        }
        else {
            $("#email").removeClass("error");
        }
    });
    $( "#dateInput" ).datepicker(

        {
        	beforeShowDay: function(date){
            	var day = date.getDay();
            	if($('#olivia').is(':checked')) { 
	        	 	return[day == 1 || day == 5,""];
	        	}
	        	else if($('#wendel').is(':checked')) { 
	        		return[day == 2 || day == 6,""];
	        	}
	        	else if($('#ashley').is(':checked')) { 
	        		return[day == 3 || day == 4,""];
	        	}
	        	else{
	        		return [day != 0,""];
	        	}
            },
            dateFormat: setDateFormat,
            // no calendar before July 1st 2020
            minDate: new Date('07/01/2020'),  
            //only schedule up to 2 months in advance
            maxDate: '+3M',
        }   
    );
})

function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^(\d{3}-?\d{3}-?\d{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}