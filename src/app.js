var warning;
$('.section__notify__btn').on('click', function () {
    let checkClass = $(warning).hasClass('section__warning');
    if (checkClass == true) {
        $('.section__warning').remove();
    }

    let valueInput = $('.section__notify__input').val();

    if (valueInput == '') {
        $('.section__notify__input').css('border-color', 'rgba(255, 0, 0, 0.7)');

        let checkNotify = $('.section__notify').css('display');
        if (checkNotify == 'block') {
            $('.section__notify__input').after("<p>Please provide a vaild email address</p>");
            warning = $('.section__notify__input').next();
        }
        else {
            $('.section__notify').after("<p>Please provide a vaild email address</p>");
            warning = $('.section__notify').next();
        }
        $(warning).addClass('section__warning');
    }

    // $('.section__notify').css('margin-bottom', '100px');
});

$('.section__notify__input').on('focus', function () {
    $('.section__notify__input').css('border-color', 'rgba(177, 177, 177, 0.5)');

    let checkClass = $(warning).hasClass('section__warning');
    if (checkClass == true) {
        $('.section__warning').remove();
    }

    // $('.section__notify').css('margin-bottom', '100px');
});

