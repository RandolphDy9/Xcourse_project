
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

    $("#genderForm input").on('click', function(){
        if ($('input[name=gridRadios]:checked', '#genderForm').val() == "male") {
            // alert("you selected a male!");
            $("#maleOrFemale").attr('src', 'img/boy.png');
        } else {
            // alert("you selected a female!");
            $("#maleOrFemale").attr('src', 'img/girl.png');
        }
    });

});