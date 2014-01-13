$(document).ready(function(){
  $(".main").mouseenter(function(){
    var obj = $(this).find(".sub");
    if ($.browser.msie){
    hi = 0;
    } else {
    hi = 5;
    }
    obj.animate({
      height: $(this).height() - hi
    }, 1000, function(){
    });                
  }).mouseleave(function(){
    var obj = $(this).find(".sub");
    obj.stop();
    var hi = 0;
    if ($.browser.msie){
    hi = 24;
    } else {
    hi = 15;
    }
    obj.animate({         
      height: hi
    }, 1000, function(){
    });       
  });
});
