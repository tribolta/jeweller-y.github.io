jQuery(document).ready(function($){
/* Подготавливаем иконку меню */
$('#nav-wrap').prepend('<div id="menu-icon">&#9776;</div>');
    /* Включаем навигацию */
    $("#menu-icon").on("click", function(){
    $("#nav").slideToggle();
        $(this).toggleClass("active");
    });
    });