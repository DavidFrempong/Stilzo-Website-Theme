
$(document).ready(function () {
    $('.loader').delay(1100).fadeOut(700)

    $('.loader').promise().done(function () {
        $('.body').addClass('active')
    })
})


$('.mobile_icon').click(function () {
    $('.menu_mobile').addClass('active')
    $('.x-mark').addClass('active')
    $('.mobile_icon').hide()
})

$('.x-mark').click(function () {
    $('.menu_mobile').removeClass('active');
    $('.x-mark').removeClass('active');
    $('.mobile_icon').show()
})

$('.right_side_navbar_items_mobile a').click(function () {
    $('.menu_mobile').removeClass('active').fadeOut(1100)
    $('.x-mark').removeClass('active').fadeOut(1100)
    $('.mobile_icon').show()
})


$(window).on("load",function() {
    $(window).scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function () {
            
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom <= windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity") == 0) { $(this).fadeTo(1000, 1); }
            } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity") == 1) { $(this).fadeTo(1000, 0); }
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});

