
jQuery(function($) {
    $('#form_private').on('submit', function(event) {
        event.preventDefault(); // отменяем событие по умолчанию
        if ( sendForm()===false ) { // если есть ошибки возвращает false
            return false; // прерываем выполнение скрипта
        }
        else {
            alert("Данные успешно отправлены");
        }
    });

    $(".textfield,.datepicker").on('focus', function() {
        if ($(this).hasClass("error")) {
            $(this).removeClass("error");
            $(this).nextAll(".hidden_err").hide();
        }
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

    $('.tariff-items').on('click', '.service-block', function () {
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

});


function hideText() {
    $('.side-right').text('');
    $('.side-left').text('');
}

function sendForm() {
    var result=true;

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

    //Проверка телефона
    var phone=$("input[name=phone]");
    if (phone.val()=="") {
        $("#hidden_phone").show();
        phone.addClass("error");
        result=false;
    }

    return result;
}
