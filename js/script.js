
jQuery(function($) {
    $('#form_private').on('submit', function(event) {
        event.preventDefault(); // отменяем событие по умолчанию
        if ( sendForm()===false ) { // если есть ошибки возвращает false
            return false; // прерываем выполнение скрипта
        }
        else {
            $("#form_private").html("Данные успешно отправлены");
            $("#form_private").css("padding-top", "210px");
        }
    });

    $(".textfield,.datepicker").on('focus', function() {
        if ($(this).hasClass("error")) {
            $(this).removeClass("error");
            $(this).nextAll(".hidden_err").hide();
        }
    });

    $(".button-up").on('click', window.scrollTop(0,0));

    $('.line-menu a').on( 'click', function(){
        var el = $(this);
        var dest = el.attr('href');
        if(dest !== undefined && dest !== '') {
            $('html').animate({
                    scrollTop: $(dest).offset().top
                }, 1500
            );
        }
        return false;
    });

    $('.magic-button-home').on('click', function () {
        $('.magic-button').each(function () {

            var value = $(this).css('display');
            if(value == 'none') {
                $(this).show(700);
            } else {
                $(this).hide(700);
                hideText();
            }
        })
    });

    $('.magic-button').on('click', function () {
        var text = $(this).data('text');
        var showBox = $(this).data('show');
        hideText();
        $('.' + showBox).hide().text(text).show();
    });

    $('.block-choice .tariff-items').on('click', '.service-block', function () {
        $(this).hide(700);
        var newObject = $(this).clone().attr('style', '');
        $('.my-choice').append(newObject);
    });

    $('.my-choice').on('click', '.service-block', function () {
        $(this).hide(700);
        var newObject = $(this).clone().attr('style', '');
        $('.block-choice .tariff-items').append(newObject);
    });

    $('.block-tariff').on('click', function () {
        $('.block-tariff').each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
        console.log($(this).data("tariff"));
        $('#choice_tariff').val($(this).data("tariff"));
    });
    var time = 2, CC = 1;
    $(window).scroll(function(){
    $('#counter').each(function(){
        var cPos = $(this).offset().top,
            topWindow = $(window).scrollTop();
        if (cPos < topWindow + 500) {
            if (CC < 2) {
                $('div').each(function(){
                    var
                        i = 1,
                        num = $(this).data('num'),
                        step = 1500 * time / num,
                        that = $(this),
                        int = setInterval(function(){
                            if (i <= num) {
                                that.html(i);
                            }
                            else {
                                CC = CC + 2;
                                clearInterval(int);
                            }
                            i++;
                        },step);
                    });
                }
            }
        });

    });
});

function hideText() {
    $('.side-right').text('');
    $('.side-left').text('');
}

function sendForm() {
    var result=true;
    $("#hidden_contact").hide();
    $("#hidden_city").hide();
    $("#hidden_tariff").hide();
    $("#hidden_phone").hide();

    //Проверка имени
    var name=$("input[name=contact]");
    if (name.val()=="") {
        $("#hidden_contact").show();
        name.addClass("error");
        result=false;
    }

    //Проверка населенного пункта
    var city=$("input[name=city]");
    if (city.val()=="") {
        $("#hidden_city").show();
        city.addClass("error");
        result=false;
    }
    //Проверка тарифного плана
    var tariff=$("#choice_tariff");
    if (tariff.val()=="") {
        $("#hidden_tariff").show();
        tariff.addClass("error");
        result=false;
    }

    //Проверка телефона
    var phone=$("input[name=phone]");
    if (phone.val()=="") {
        $("#hidden_phone").show();
        phone.addClass("error");
        result=false;
    }

    return result;
}
