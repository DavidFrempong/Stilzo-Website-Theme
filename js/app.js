
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

