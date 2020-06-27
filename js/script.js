$(window).on('scroll',function(){

  $(".JS_ScrollAnimationItem").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 300){
      $(this).addClass('isActive');
    }
  });
  
 });