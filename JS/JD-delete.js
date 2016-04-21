$(function() {
    $('h2').hide().slideDown();
    var $li = $('li');
    $li.hide().each(function(index) {
        $(this).delay(700 * index).fadeIn(700);
    });
    $li.on('click', function() {
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 500, function() {
            $(this).remove();
        });
    });
});