$(document).ready(function(){

    $(document).on('click', '[data-role=showit]', function (e) {
        e.preventDefault();
        var element = $(this).attr('href');
        
        $(".thumbnail").removeClass('active');

        if ($(element).hasClass('in')) {
            $(this).parent().parent().removeClass('active');
            $(element + "[data-role=showme].in").removeClass('in').addClass('collapse');
        }
        else {
            $("[data-role=showme]").removeClass('in').addClass('collapse');
            $(this).parent().parent().addClass('active');
            $(element + "[data-role=showme]").addClass('in').removeClass('collapse');
        }

        if ($(".thumbnail.active").length == 0) {
            $(animateSection("#waddyawant",0));

        }
        else {
            $(animateSection(element,0));
        }
    });

    $('glyphicon-chevron-up').click() function({
        
    });

    // Function to animate sections
    var animateSection = function(sectionName, offset){
        console.log(sectionName);
        $('html,body').animate({
          scrollTop: $(sectionName).offset().top + offset
        }, 1000);
    }
});