$('.select__toogle').click(function(){
  $('.select__list').slideDown();
});

$('.select__item').click(function(){
    var text = $(this).text();
    $('.select__toogle').text(text);
    $('.select__list').slideUp();
});

//slideDown