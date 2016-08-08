$('.select__toogle').click(function(){
  $('.select__list').slideDown();
});

$('.select__item').click(function(){
    var text = $(this).text();
    $('.select__toogle').text(text);
    $('.select__list').slideUp();
});

//slideDown

$('.nav-left').on('click','.sub-true',function(e){
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