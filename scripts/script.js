$(document).ready(function(){

    $(document).on('click', '[data-role=showit]', function (e) {
        e.preventDefault();
        var element = $(this).attr('href');
        
        removeActiveThumbnailState();

        if ($(element).hasClass('in')) {
            $(element + "-thumb").removeClass('active');
            $(element + "[data-role=showme].in").removeClass('in').addClass('collapse');
        }
        else {
            $("[data-role=showme]").removeClass('in').addClass('collapse');
            $(element + "-thumb").addClass('active');
            $(element + "[data-role=showme]").addClass('in').removeClass('collapse');
        }

        if ($(".thumbnail.active").length == 0) {
            $(animateSection("#home",0));
        }
        else {
            $(animateSection(element,0));
        }
    });

    $(document).on('click', '[data-role=closer]', function (e) {
        e.preventDefault();
        removeActiveThumbnailState();
        $(animateSection("#home",0));
        $("[data-role=showme].in").removeClass('in').addClass('collapse');
    });

    // Function to animate sections
    var animateSection = function(sectionName, offset){
        $('html,body').animate({
          scrollTop: $(sectionName).offset().top + offset
        }, 1000);
    }

    var removeActiveThumbnailState = function(){
        $(".thumbnail").removeClass('active');
    }
});