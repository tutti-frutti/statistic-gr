$('.select__toogle').click(function(){
  $('.select__list').slideDown();
});

$('.select__item').click(function(){
    var text = $(this).text();
    $('.select__toogle').text(text);
    $('.select__list').slideUp();
});

//slideDown

$('.nav-left').on('click','.sub-true',function(e){   // меню слева
    var $wrap = $(this).closest('ul');
   
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).siblings('ul').slideUp();
    } else{
        $wrap.find('.sub-true').remove('active');
        $wrap.find('ul').slideUp();
        
         $(this).addClass('active');
         $(this).siblings('ul').slideDown();
    }
    e.preventDefault();
});

//$(function(){
//		$('#menu').slicknav();
//	});

//$('.nav-left').on('click','.sub-true',function(e){   // меню слева
//    var $wrap = $(this).closest('ul');
//    if($(this).hasClass('active'))
//        $('nav-left__top').css('background-color', '#000');
//    });





//$('.nav-left__click').click(function () {
////    $(this) // сейчас исполн всегда, переместить вниз
//    if($(this).hasClass('active')){
//        $(this).removeClass('active');
//        $(this).slideUp;
//        $(this).css({"background": "#f2f1ef",
//                                  "border": "2px solid #f2f1ef"});
//    } else {
//        $(this).addClass('active');
//        $(this).slideDown;
//        $(this).css({"background":"#ebe9e6",
//                                  "border-bottom": "2px solid #d8d8d8",
//                                  "border-top": "2px solid #d8d8d8"});
//    }
//    if($(this).hasClass('active')) {
//        $('.nav-left__click + a').css('text-decoration', 'underline');
//    }
//    
//
//});



//2й вариант

//$('.sub-true').click(function () {
//    $(this) // сейчас исполн всегда, переместить вниз
//    if($(this).hasClass('active')){
//        $('.nav-left__click').hasClass('active');
//        $('.nav-left__click').removeClass('active');
//        $('.nav-left__click').slideUp;
//        $('.nav-left__click').css({"background": "#f2f1ef",
//                                  "border": "2px solid #f2f1ef"});
//} else{
//        $('.nav-left__click').addClass('active');
//        $('.nav-left__click').slideDown;
//        $('.nav-left__click').css({"background":"#ebe9e6",
//                                  "border-bottom": "2px solid #d8d8d8",
//                                  "border-top": "2px solid #d8d8d8"});
//    }
//    if($(this).hasClass('active')) {
//        $('.nav-left__click + a').css('text-decoration', 'underline');
//    }    
//});

//3й вариант

$('.sub-true').click(function () {
//    $(this) // сейчас исполн всегда, переместить вниз
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).slideUp();
        $(this).closest('.nav-left__click').css({
                                "background": "#f2f1ef",
                                  "border": "2px solid #f2f1ef"});
    } else {
        $(this).addClass('active');
        $(this).slideDown();
        $(this).closest('.nav-left__click').css({"background":"#ebe9e6",
                                  "border-bottom": "2px solid #d8d8d8",
                                  "border-top": "2px solid #d8d8d8"});
    }
//    if($(this).hasClass('active')) {
//        $('.nav-left__click + a').css('text-decoration', 'underline');
//    }
//    
//
});