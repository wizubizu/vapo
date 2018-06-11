 var app = {
 imageHandler:function() {
        $("#upload").on('change', function() {
            //alert("alert");
            readUrl();
        });
        function readUrl (){
            var file = $("#upload")[0].files[0];
            //console.log(file);
            //reader interprets the file selected
            var reader = new FileReader();
                //console.log(reader.result);
            reader.onloadend = function (){
                //console.log(reader.result);
                $("#picture_preview").attr("src", reader.result);
                //$("#picture_preview")[0].src = "" + reader.results;
                //console.log($("#picture_preview"));
                //console.log(reader.result);
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    }//end of imageHandler

}

var apps = {
 imageHandler:function() {
        $("#upload1").on('change', function() {
            //alert("alert");
            readUrl();
        });
        function readUrl (){
            var file = $("#upload1")[0].files[0];
            //console.log(file);
            //reader interprets the file selected
            var reader = new FileReader();
                //console.log(reader.result);
            reader.onloadend = function (){
                //console.log(reader.result);
                $("#picture_preview1").attr("src", reader.result);
                //$("#picture_preview")[0].src = "" + reader.results;
                //console.log($("#picture_preview"));
                //console.log(reader.result);
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    }//end of imageHandler
    
}

var appz = {
 imageHandler:function() {
        $("#upload2").on('change', function() {
            //alert("alert");
            readUrl();
        });
        function readUrl (){
            var file = $("#upload2")[0].files[0];
            //console.log(file);
            //reader interprets the file selected
            var reader = new FileReader();
                //console.log(reader.result);
            reader.onloadend = function (){
                //console.log(reader.result);
                $("#picture_preview2").attr("src", reader.result);
                //$("#picture_preview")[0].src = "" + reader.results;
                //console.log($("#picture_preview"));
                //console.log(reader.result);
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    }//end of imageHandler
    
}




// kowa js///
    app.imageHandler();

    $("[data-toggle=popover]").popover({
        html: true, 
        content: function() {
            return $('#popover-content').html();
        }
    });

    // dropdown
    $(document).ready(function(){
        $('.dropdown-submenu a.test').on("click", function(e){
            $(this).next('ul').toggle();
            e.stopPropagation();
            e.preventDefault();
        });
    });

    // accordion
    var acc = document.getElementsByClassName("__accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }



// show another navbar menu when scroll down

    var myID = document.getElementById("myID");

    var myScrollFunc = function() {
      var y = window.scrollY;
      if (y >= 50) {
        myID.className = "__bottomMenu show"
      } else {
        myID.className = "__bottomMenu hide"
      }
    };

    window.addEventListener("scroll", myScrollFunc);

    



// preview and hide password
    $("#showPassword").click(function(){
      var foo = $(this).prev().attr("type");
      if(foo == "password"){
        $(this).prev().attr("type", "text");
      } else {
        $(this).prev().attr("type", "password");
      }
    });



// register form validation

    function checkPass()
{
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value == pass2.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match"
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Password Do Not Match!"
    }
} 



    function validatephone(phone) 
        {
            var maintainplus = '';
            var numval = phone.value
            if ( numval.charAt(0)=='+' )
            {
            var maintainplus = '';
            }
            curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g,'');
            phone.value = maintainplus + curphonevar;
            var maintainplus = '';
            phone.focus;
        }
        // validates text only
        function Validate(txt) {
            txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
        }

        // validates password only
        function pValidate(pass1) {
            pass1.value = pass1.value.replace(/[^a-zA-Z0-9-]+/g, '');
        }

        // validates password only
        function pValidate(pass2) {
            pass2.value = pass2.value.replace(/[^a-zA-Z0-9-]+/g, '');
        }

    // validate email
    function email_validate(email)
        {
            var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

            if(regMail.test(email) == false)
            {
                document.getElementById("status").innerHTML    = "<span class='warning'>Email address is not valid yet.</span>";
            }
            else
            {
                document.getElementById("status").innerHTML = "<span class='valid'>Thanks, you have entered a valid Email address!</span>"; 
            }
       
        };



        // validate form
function validates() {

    // Academy validation

     // div 1

    if (document.myform.AName.value == "") {
        $("#First-Div").css("display", "block");
        $("#Second-Div").css("display", "none");
        alert("Please provide your Agency Name");
        document.myform.AName.focus();

        return false;
    }

    

    if (document.myform.email.value == "") {
        $("#First-Div").css("display", "block");
        $("#Second-Div").css("display", "none");
        alert("Please provide your email");
        document.myform.email.focus();
        return false;
    }
    

    if (document.myform.phone.value == "") {
        $("#First-Div").css("display", "block");
        $("#Second-Div").css("display", "none");
        alert("Please provide your phone Number");
        document.myform.phone.focus();
        return false;
    }

    if (document.myform.code.value == "") {
        $("#First-Div").css("display", "block");
        $("#Second-Div").css("display", "none");
        alert("Please provide your agency code");
        document.myform.code.focus();
        return false;
    }

    if (document.myform.country.value == "-1") {
        $("#First-Div").css("display", "block");
        $("#Second-Div").css("display", "none");
        alert("Please select your country");
        document.myform.country.focus();
        return false;
    }

    if (document.myform.state.value == "") {
        $("#First-Div").css("display", "block");
        $("#Second-Div").css("display", "none");
        alert("Please select your state");
        document.myform.state.focus();
        return false;
    }

    // div 2

    if (document.myform.fullName.value == "") {
        $("#First-Div").css("display", "none");
        $("#Second-Div").css("display", "block");
        alert("Please provide your first name, last name");
        document.myform.fullName.focus();
        return false;
    }

    if (document.myform.pass1.value == "") {
        $("#First-Div").css("display", "none");
        $("#Second-Div").css("display", "block");
        alert("Please enter your password ");
        document.myform.pass1.focus();
        return false;
    }

    

    if (document.myform.pass2.value == "") {
        $("#First-Div").css("display", "none");
        $("#Second-Div").css("display", "block");
        alert("Please re-enter your password");
        document.myform.pass2.focus();
        return false;
    }

    // if (document.myform.github.value == "") {
    //     $("#First-Div").css("display", "none");
    //     $("#Second-Div").css("display", "block");
    //     alert("Please provide your github link");
    //     document.myform.github.focus();
    //     return false;
    // }

    if (document.myform.reason.value == "") {
        $("#First-Div").css("display", "none");
        $("#Second-Div").css("display", "block");
        alert("Please tell us reasons why you should be selected");
        document.myform.reason.focus();
        return false;
    }

    if (document.myform.schedule.value == "-1") {
        $("#First-Div").css("display", "none");
        $("#Second-Div").css("display", "block");
        alert("Please select your schedule");
        document.myform.schedule.focus();
        return false;
    }
    // return(true);
}


function validateEmail() {
    var emailID = document.myform.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.indexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2)) {
        alert("pls enter correct email ID")
        document.myform.email.focus();
        return false;
    }
    // return( true);
}

// end





function showNextForm() {
        $("#First-Div").css("display", "none");
        $("#Second-Div").css("display", "block");
    };

    function showNextForm1() {
        $("#Second-Div").css("display", "none");
        $("#Third-Div").css("display", "block");
    };

    function showNextForm2() {
        $("#Third-Div").css("display", "none");
        $("#Five-Div").css("display", "block");
    };

    function showNextForm3() {
        $("#Forth-Div").css("display", "none");
        $("#Five-Div").css("display", "block");
    };

    // previous 
    function showPrevForm() {
        $("#Second-Div").css("display", "none");
        $("#First-Div").css("display", "block");
        $("#Forth-Div").css("display", "none");
    };

    function showPrevForm1() {
        $('#Third-Div').css("display", "none");
        $('#Second-Div').css("display", "block");
        $('#First-Div').css("display", "none");
        $("#Five-Div").css("display", "none");
        $("#Forth-Div").css("display", "none");
    };

    function showPrevForm2() {
        $("#Forth-Div").css("display", "block");
        $("#Third-Div").css("display", "none");
         $("#Five-Div").css("display", "none");
    };


    function showPrevForm3() {
        var ownerType = $('.__selectind').val();
        if (ownerType === 'developer') {
            $('#First-Div').css("display", "none");
            $('#Second-Div').css("display", "none");
            $('#Forth-Div').css("display", "none");
            $("#Five-Div").css("display", "none");
            $("#Third-Div").css("display", "block");
        }else if(ownerType === 'designer'){
            $('#Third-Div').css("display", "none");
            $('#Second-Div').css("display", "none");
            $('#First-Div').css("display", "none");
            $("#Five-Div").css("display", "none");
            $("#Forth-Div").css("display", "block");
        }
    };
    




// end



