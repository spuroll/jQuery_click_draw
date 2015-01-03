$(document).ready(function() {
    $('.reset').fadeTo('fast', .50);

    $('div').click(function() {
        $(this).toggleClass("blue");
        $('.reset').fadeTo('fast', 1);
    });

    $('.reset').click(function() {
        $('.reset').fadeTo('fast', .50);
        $('.reset').css('background-color', 'lightgray');
        $('div').removeClass("blue");
    });
});