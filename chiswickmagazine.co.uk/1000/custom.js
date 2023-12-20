// BEGIN: Menu

$(document).ready(function () {
    if ($(document).width() > 768) {
        var mh = $('.menu_content').outerHeight(true);
        var lh = $('.logo_ad').offset().top + $('.logo_ad').outerHeight(true);
        $(document).scroll(function () {
            if ($(document).scrollTop() > lh) {
                $('.mainbody').css('padding-top', mh);
                $('.menu_content').addClass('menu_sticky');
            }
            else {
                $('.mainbody').css('padding-top', 0);
                $('.menu_content').removeClass('menu_sticky');
            }
        });
    }

    if ($(document).width() < 769) { // Mobile Menu
        $('.mmenu').toggle(function () {
            $('.icon-menu-bars').addClass('openm');
            $('.column6').slideDown(400);
        }, function () {
            $('.icon-menu-bars').removeClass('openm');
            $('.column6').slideUp(200);
        });
        $('a.menubodyhorizontal').each(function () {
            if ($(this).attr('href') == '#') {
                $(this).toggle(function () {
                    $(this).siblings('.submenu_div').slideDown(300);
                }, function () {
                    $(this).siblings('.submenu_div').slideUp(200);
                });
            }
        });
    }
});

$(window).bind('load', function () {
    $('div.menubodyhorizontal').each(function () {
        if (!$(this).children('.submenu_div').is(':empty'))
            $(this).children('a').children('i').css('display', 'inline');
        else {
            $(this).children('a.menubodyhorizontal').off();
        }
    });
    $('a.menubodyhorizontal').siblings('i').css('display', 'none');
});

$(window).bind('load', function () {
    $('.submenu_div').each(function () {
        if ($(this).children('.submenubodyhorizontal').length == 0)
            $(this).remove();
    });
});

// END: Menu
