$(document).ready(function(){
	$(window).scroll(function(){
  	$("#content_right").animate(
	  	{ top: $(window).scrollTop()+'px'}
	  ,20);
	});
});
