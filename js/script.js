
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
    $(".datepicker").datepicker({
        dateFormat: "dd.mm.yy"
    });
});


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
