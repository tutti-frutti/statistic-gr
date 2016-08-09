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
//    $(this).closest('ul').css("background", "#ebe9e6");
//    if($(this).hasClass('active')){
//        $(this).removeClass('active');
//        $(this).slideUp;
//        $(this).closest('ul').css("background", "#f2f1ef");
//    } else {
//        
//    }
//    if($(this).hasClass('active')) {
//        else
//    }
//        $(this).removeClass('active');
//        $(this).closest('ul').css("background-color", "#f2f1ef");
//});