(function($) {
    $(document).ready(function(){
        $("#contact-form").validator().on("submit", function (event) {
            if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Fill the form properly. ");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
        });
    });

    function submitForm(){
        var inputName           = $("#inputName").val();
        var inputEmail          = $("#inputEmail").val();
        var inputSubject        = $("#inputSubject").val();
        var inputMessage        = $("#inputMessage").val();


        $.ajax({
            type: "POST",
            url: "assets/php/contact-form.php",
            data: "namefield=" + inputName + "&emailfield=" + inputEmail + "&subjectfield=" + inputSubject + "&messagefield=" + inputMessage,
            success : function(text){
                if (text == "success"){
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false,text);
                }
            }
        });
    }

    function formSuccess(){
        $("#contact-form")[0].reset();
        submitMSG(true, "Message Submitted!")
    }

    function formError(){
        $("#contact-form").removeClass().addClass('contact-form shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "animated text-center alert alert-success mt15";
        } else {
            var msgClasses = "text-center alert alert-danger mt15";
        }
        $("#msgalert").removeClass().addClass(msgClasses).text(msg);
    }
})(jQuery);
