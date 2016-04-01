//CustomMenu Menu Position Fixing 
var timer01 = 0, timer02 = 0, direction = "right";


// Product Features Opening
function giefp() {
    "use strict";
    var isOneColumn = false, previousId = 0;
    $(window).resize(function () {
        if (window.innerWidth < 900) {
            isOneColumn = true;
            if ($('.extendedInfoContainer_large').is(':visible')) {
                $('.extendedInfoContainer_large').hide();
                $('.col-xs-4').removeClass('active');
            }
            $('.featureMarker').hide();
            $('.contentToShow .w-pagehead').hide();
        } else {
            isOneColumn = false;
            if ($('.hiddenContent').is(':visible')) {
                $('.col-xs-4').removeClass('active');
            }
        }
        if (!isOneColumn) {
            $('.hiddenContent').hide();
        } else {
            $('.extendedInfoContainer_large').hide();
        }
    });

    $('.col-xs-4').off('click');
    $('.col-xs-4')
        .on(
            'click',
            function (event) {

                event.preventDefault();

                $('.featureMarker').hide();
                $('.contentToShow .w-pagehead').hide();

                if (window.innerWidth < 900) {
                    isOneColumn = true;
                } else {
                    $('.contentToShow .w-pagehead').show();
                    $(event.target).closest('.col-xs-4').find('.featureMarker')
                        .show();
                }
                var elementClicked = $(this),
                    content = $(elementClicked).find('.hiddenContent').html(),
                    innerContent = $(elementClicked).find('.hiddenContent').find('.contentToShow').html(),
                    id = parseInt($(elementClicked).attr('data-bid') / 3),
                    idElement = parseInt($(elementClicked).attr('data-bid')),
                    elementPos = elementClicked.offset().top - $('#menu-superior').height() + 0;

                if (previousId < id) {
                    if ($($('.extendedInfoContainer_large')[previousId]).is(':visible')) {
                        elementPos = elementPos - $($('.extendedInfoContainer_large')[previousId]).height();
                    }
                }

                previousId = id;
                if (isOneColumn) {
                    $('body,html').stop(true).animate({scrollTop: elementPos}, 400);
                    // Create description below one third
                    if ($(elementClicked).find('.hiddenContent').is(':visible')) {
                        $('.hiddenContent').hide();
                        $('.col-xs-4').removeClass('active');
                        $(elementClicked).addClass('active');
                        $(elementClicked).find('.hiddenContent').attr('data-bid', idElement);
                        $(elementClicked).find('.hiddenContent').slideDown(setButtonForNavigation());
                    } else {
                        $('.featureMarker').hide();
                        $('.contentToShow .w-pagehead').hide();
                        $(elementClicked).removeClass('active');
                        $(elementClicked).find('.hiddenContent').slideUp(setButtonForNavigation());
                    }

                } else {

                    $('body,html').stop(true).animate({scrollTop: elementPos}, 400);
                    // Create description below .row.features
                    if (!$($('.extendedInfoContainer_large')[id]).is(':visible')) {
                        $('.extendedInfoContainer_large').slideUp();
                        $($('.extendedInfoContainer_large')[id]).html(content);
                        $('.col-xs-4').removeClass('active');
                        $(elementClicked).addClass('active');
                        $($('.extendedInfoContainer_large')[id]).slideDown();
                        $($('.extendedInfoContainer_large')[id]).attr('data-bid', idElement);
                        setButtonForNavigation();
                    } else {

                        console.log(innerContent == $($('.extendedInfoContainer_large')[id]).find('.contentToShow').html())


                        if ($($('.extendedInfoContainer_large')[id]).find('.contentToShow').html() != innerContent) {
                            $($('.extendedInfoContainer_large')[id]).find('.contentToShow').fadeOut(300, function () {
                                $($('.extendedInfoContainer_large')[id]).find('.contentToShow').html(innerContent);
                                setButtonForNavigation();
                                $($('.extendedInfoContainer_large')[id]).find('.contentToShow').fadeIn(300);
                            });
                            $('.col-xs-4').removeClass('active');
                            $(elementClicked).addClass('active');
                            $($('.extendedInfoContainer_large')[id]).attr('data-bid', idElement);
                        } else {
                            $($('.extendedInfoContainer_large')[id]).slideUp(function () {
                                $('.featureMarker').hide();
                                $('.contentToShow .w-pagehead').hide();
                                $(elementClicked).removeClass('active');
                            });
                        }
                    }
                }
            });

};

function setButtonForNavigation() {
    $(document).off('keydown');
    $(document).on(
        'keydown',
        function (e) {
            e.preventDefault();
            var id = parseInt($($('.extendedInfoContainer_large :visible')[0])
                .parent().attr('data-bid'));

            if (e.keyCode == 37) {
                if (id >= 1) {
                    $($('.col-xs-4')[id - 1]).click();
                }
            } else if (e.keyCode == 39) {
                if (id < $('.col-xs-4').length - 1) {
                    $($('.col-xs-4')[id + 1]).click();
                }
            } else if (e.keyCode == 38 || e.keyCode == 40) {
                $($('.col-xs-4')[id]).click();
            }
        });

    $('.type_all').off('click');
    $('.type_all').on(
        'click',
        function (event) {
            event.preventDefault();
            var id = $(event.target).closest('.extendedInfoContainer_large').attr('data-bid');
            $($('.col-xs-4')[id]).click();
        });

    $('.type_prev').off('click');
    $('.type_prev').on('click', function (event) {
        event.preventDefault();
        var id = parseInt($(event.target).closest('.extendedInfoContainer_large').attr('data-bid'));
        if (id >= 1) {
            $($('.col-xs-4')[id - 1]).click();
        }
    });

    $('.type_next').off('click');
    $('.type_next').on('click', function (event) {
        event.preventDefault();
        var id = parseInt($(event.target).closest(
            '.extendedInfoContainer_large').attr('data-bid'));
        if (id < $('.col-xs-4').length - 1) {
            $($('.col-xs-4')[id + 1]).click();
        }
    });
}


$(document).ready(function () {
    giefp();
});

// menu superior flow click down
$(function () {
    $('#intro-title span').click(function (event) {
        event.preventDefault();
        var $anchor = $(this);
        console.log($anchor.attr('href'))
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
    });
}); 