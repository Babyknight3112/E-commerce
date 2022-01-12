jQuery(document).ready(function ($) {

    console.log($('.footer').offset().top);

    $('.navbar nav ul li:nth-child(3) a').on('click', function (event) {

        event.preventDefault();
        /* Act on the event */

        $('html,body').animate({ scrollTop: $('.footer').offset().top }, 2500, 'easeInQuart');
    });
});