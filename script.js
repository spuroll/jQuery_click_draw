$(document).ready(function() {
    $('.reset').fadeTo('fast', .50);
});

$(document).ready(function() {
    $('div').click(function() {
        $(this).css('background-color', 'blue');
    });
});

$(document).ready(function() {
    $('div').click(function() {
        $('.reset').fadeTo('fast', 1);
    });
});

$(document).ready(function() {
    $('.reset').click(function() {
        $('.reset').fadeTo('fast', .50);
    });
});

$(document).ready(function() {
    $('.reset').click(function() {
        $('div').css('background-color', '#4ECDC4');
        $('.reset').css('background-color', 'lightgray');
    });
});

