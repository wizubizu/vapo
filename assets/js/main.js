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


 

// vapo js///
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

    $(document).ready(function() {
    $('.__accordion').find('.accordion-toggle').click(function() {
        $(this).next().slideToggle('600');
        $(".accordion-content").not($(this).next()).slideUp('600');
        });
        $('.accordion-toggle').on('click', function() {
            $(this).toggleClass('active').siblings().removeClass('active');
        });
    });

    //fileupload for both
        $('input[id=base-input5]').change(function() {
            $('#fake-input5').val($(this).val().replace("C:\\fakepath\\", ""));
        });



// show another navbar menu when scroll down

    var myID = document.getElementById("myID");

    var myScrollFunc = function() {
      var y = window.scrollY;
      if (y >= 50) {
        myID.className ="__bottomMenu show"
      } else {
        myID.className ="__bottomMenu hide"
      }
    };

    window.addEventListener("scroll", myScrollFunc);


    // dashboard show and hide
    $('#openSidebar').click(function(){
        $('.leftbar').addClass('biger');
        });
    $('#closebtn').click(function(){
        $('.leftbar').removeClass('biger');
    });

     // dashboard show and hide
    $('#openrightSidebars').click(function(){
        $('.rightbars').addClass('bigers');
        });
    $('#rightclosebtns').click(function(){
        $('.rightbars').removeClass(' bigers');
    });
    



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



    function validatephone(phone) {
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


    //date picker script
     $('.datepicker').datepicker({
         weekStart:1,
         format: 'dd-mm-yyyy',
         color: '#f0842d'
     });
     //end



    // traveller file upload

    
    var fileTypes = ['pdf', 'docx', 'rtf', 'jpg', 'jpeg', 'png', 'txt'];  //acceptable file types
    function readURL(input) {
        if (input.files && input.files[0]) {
            var extension = input.files[0].name.split('.').pop().toLowerCase(),  //file extension from input file
                isSuccess = fileTypes.indexOf(extension) > -1;  //is extension in acceptable types

            if (isSuccess) { //yes
                var reader = new FileReader();
                reader.onload = function (e) {
                    if (extension == 'pdf'){
                        $(input).closest('.fileUpload').find(".icon").attr('src','https://image.flaticon.com/icons/svg/179/179483.svg');
                    }
                    else if (extension == 'docx'){
                        $(input).closest('.fileUpload').find(".icon").attr('src','https://image.flaticon.com/icons/svg/281/281760.svg');
                    }
                    else if (extension == 'rtf'){
                        $(input).closest('.fileUpload').find(".icon").attr('src','https://image.flaticon.com/icons/svg/136/136539.svg');
                    }
                    else if (extension == 'png'){ $(input).closest('.fileUpload').find(".icon").attr('src','https://image.flaticon.com/icons/svg/136/136523.svg'); 
                    }
                    else if (extension == 'jpg' || extension == 'jpeg'){
                        $(input).closest('.fileUpload').find(".icon").attr('src','https://image.flaticon.com/icons/svg/136/136524.svg');
                    }
                  else if (extension == 'txt'){
                        $(input).closest('.fileUpload').find(".icon").attr('src','https://image.flaticon.com/icons/svg/136/136538.svg');
                    }
                    else {
                        //console.log('here=>'+$(input).closest('.uploadDoc').length);
                        $(input).closest('.uploadDoc').find(".docErr").slideUp('slow');
                    }
                }

                reader.readAsDataURL(input.files[0]);
            }
            else {
                    //console.log('here=>'+$(input).closest('.uploadDoc').find(".docErr").length);
                $(input).closest('.uploadDoc').find(".docErr").fadeIn();
                setTimeout(function() {
                        $('.docErr').fadeOut('slow');
                        }, 9000);
            }
        }
    }
    $(document).ready(function(){
       
       $(document).on('change','.up', function(){
        var id = $(this).attr('id'); /* gets the filepath and filename from the input */
           var profilePicValue = $(this).val();
           var fileNameStart = profilePicValue.lastIndexOf('\\'); /* finds the end of the filepath */
           profilePicValue = profilePicValue.substr(fileNameStart + 1).substring(0,20); /* isolates the filename */
           //var profilePicLabelText = $(".upl"); /* finds the label text */
           if (profilePicValue != '') {
            //console.log($(this).closest('.fileUpload').find('.upl').length);
              $(this).closest('.fileUpload').find('.upl').html(profilePicValue); /* changes the label text */
           }
       });

       $(".btn-new").on('click',function(){
            $("#uploader").append('<div class="row uploadDoc"><div class="col-sm-11 col-xs-10"><div class="docErr">Please upload valid file</div><!--error--><div class="fileUpload btn btn-orange"> <img src="https://image.flaticon.com/icons/svg/136/136549.svg" class="icon"><span class="upl" id="upload">Upload document</span><input type="file" class="upload up" id="up" onchange="readURL(this);" /></div></div><div class="col-sm-1 col-xs-2"><a class="btn-check"><i class="fa fa-times"></i></a></div></div>');
       });
        
       $(document).on("click", "a.btn-check" , function() {
         if($(".uploadDoc").length>1){
            $(this).closest(".uploadDoc").remove();
          }else{
            alert("You have to upload at least one document.");
          } 
       });
    });
    // end

    // remove table
    $('.delete').on('click', function(event) {
    $(this).parents('tr').remove();
    });

    
    // end
    




// end



