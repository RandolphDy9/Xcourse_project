
// var btn = document.getElementById('begin');

// btn.addEventListener("click", function(){
//     alert('tadaaaa!');
// });

$(document).ready(function(){
    // $("#begin").click(function(){
    //     alert("I used jQuery for this!");
    // });


    // $("#tutors").on("mouseover", function(){
    //     $(".tutor").toggle();
    // });

    // $(window).resize(function(){
        if($(window).width()<576){
            $(".hasRow").removeClass('row');
        } else {
            $(".hasRow").addClass('row');
        }
    // });

});