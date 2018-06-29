$(document).ready(function(){
    var i = 1;
    $(".nav-pic").on("mouseover", function(){
        if (i%2 == 1) {
            $(".nav-item").hide();
            $(this).css({opacity: 1})
        } else {
            $(".nav-item").show();
            $(this).css({opacity: .7})
        }
        i++;
    });

    $("#genderForm").find("input").on('click', function(){
        if ($('input[name=gridRadios]:checked', '#genderForm').val() == "male") {
            $("#maleOrFemale").attr('src', 'img/boy.png');
        } else {
            $("#maleOrFemale").attr('src', 'img/girl.png');
        }
    });

    $(".enrollBtn").on("click", function(){
        $(".alertPara").empty().append("You've chosen to enroll to ");
        if ($(this).val() == "btn1") {
            $(".alertPara").append("<b class='highlight'>Billy Jay Gates</b>");
        } else if ($(this).val() == "btn2") {
            $(".alertPara").append("<b class='highlight'>Mark Zucker-Burger</b>");
        } else if ($(this).val() == "btn3") {
            $(".alertPara").append("<b class='highlight'>Rex Karlo Cabana</b>");
        } else if ($(this).val() == "btn4") {
            $(".alertPara").append("<b class='highlight'>Jerry Jones</b>");
        }

    });

});