
/*var list_btn_open = 0, list_menu_open = 0;
$('#user_btn').mouseover(
    function(){
      list_btn_open=1;
      $('#list_menu').addClass('list_after');
      $('#list_menu').removeClass('list');
      
    }
    );
$('#list_menu').mouseover(function(){
  list_menu_open=1;
});
$('#user_btn').mouseleave(function(){
  	list_btn_open=0;
	$('#list_menu').animate({opacity:1}, 100, function(){ 
	//alert(list_btn_open == 1 && list_menu_open == 1);
	if(list_btn_open == 0 && list_menu_open == 0){
	  $('#list_menu').removeClass('list_after');
	  $('#list_menu').addClass('list');
	}
	});
});

$('#list_menu').mouseleave(function(){
	list_menu_open=0;
	//alert(list_btn_open == 1 && list_menu_open == 1);
	if(list_btn_open == 0 && list_menu_open == 0){
	  $('#list_menu').removeClass('list_after');
	  $('#list_menu').addClass('list');
	}
	});
*/
$('#list_all').hover(
    function(){
      $('#text_all').addClass('transition_hide');
      $('#img_all').css({"opacity": "1"});
      $('#img_all').addClass('transition_show');
    },
    function(){
      $('#text_all').removeClass('transition_hide');
      $('#img_all').css({"opacity": "0"});
      $('#img_all').removeClass('transition_show');
    });

$('#list_food').hover(
    function(){
      $('#text_food').addClass('transition_hide');
      $('#img_food').css({"opacity": "1"});
      $('#img_food').addClass('transition_show');
    },
    function(){
      $('#text_food').removeClass('transition_hide');
      $('#img_food').css({"opacity": "0"});
      $('#img_food').removeClass('transition_show');
    });
$('#list_travel').hover(
    function(){
      $('#text_travel').addClass('transition_hide');
      $('#img_travel').css({"opacity": "1"});
      $('#img_travel').addClass('transition_show');
    },
    function(){
      $('#text_travel').removeClass('transition_hide');
      $('#img_travel').css({"opacity": "0"});
      $('#img_travel').removeClass('transition_show');
    });
$('#list_buy').hover(
    function(){
      $('#text_buy').addClass('transition_hide');
      $('#img_buy').css({"opacity": "1"});
      $('#img_buy').addClass('transition_show');
    },
    function(){
      $('#text_buy').removeClass('transition_hide');
      $('#img_buy').css({"opacity": "0"});
      $('#img_buy').removeClass('transition_show');
    });

$('#list_all').click(
    function(){
      abc(0);
    });

$('#list_food').click(
    function(){
      abc(2);
    });

$('#list_travel').click(
    function(){
      abc(1);
    });
$('#list_buy').click(
    function(){
      abc(3);
    });

$('#user_followed').click(function(){
  abc(-1);
});  

function abc(category){
  if(category > 0){	
  $.ajax({
	  data:{
	    category:category
	  },
	  url:'get_cate.php', // CGI URL
	  success:function(data){
	   $('#content_left').addClass("animated fadeOutDown");
	   //$('#content').html('');
	   $('#content_left').animate({opacity:1}, 1000, function(){
	     $('#content_left').removeClass("animated fadeOutDown");
	   $('#content_left').html("");
	   $('#content_left').css({"opacity":"0"});
	   display_content(data);
	   $('#content_left').addClass('animated fadeInUp');
	   });
	  },
	  error:function (xhr, ajaxOptions, thrownError) {
	    alert(console.log(xhr));        
	  }
	}); 
  }
  else if(category == -1){
  $.ajax({
	  data:{
	    u_id:$.cookie('id')
	  },
	  url:'get_user_post.php', // CGI URL
	  success:function(data){
	   $('#content_left').addClass("animated fadeOutDown");
	   //$('#content').html('');
	   $('#content_left').animate({opacity:1}, 1000, function(){
	     $('#content_left').removeClass("animated fadeOutDown");
	   $('#content_left').html("");
	   $('#content_left').css({"opacity":"0"});
	   display_content(data);
	   $('#content_left').addClass('animated fadeInUp');
	   });
	  },
	  error:function (xhr, ajaxOptions, thrownError) {
	    alert(console.log(xhr));        
	  }
	}); 
  }
  else{
  $.ajax({
	  data:{},
	  url:'get_act.php', // CGI URL
	  success:function(data){
	   $('#content_left').addClass("animated fadeOutDown");
	   //$('#content').html('');
	   $('#content_left').animate({opacity:1}, 1000, function(){
	     $('#content_left').removeClass("animated fadeOutDown");
	   $('#content_left').html("");
	   $('#content_left').css({"opacity":"0"});
	   display_content(data);
	   $('#content_left').addClass('animated fadeInUp');
	   });
	  },
	  error:function (xhr, ajaxOptions, thrownError) {
	    alert(console.log(xhr));        
	  }
	}); 
  }
}

$(document).ready(function(){
  get_follow_post();
});

function get_follow_post(){
  if($.cookie('id') != undefined){
  //alert($.cookie('id'));
  //$('#reminder').css({"top":$(window).height()-$('#reminder').height()});
  $.ajax({
    data:{
    u_id:$.cookie('id')
    },
    url:'get_user_post.php',
    success:function(data){
      var hot = JSON.parse(data);
      var time;
      var i = 0;
      var newest = [];
      while(i < hot.length){
	//time += hot[i].date + ',\n';
	if(i%3 == 0)
    		newest.push(i.toString());
	i++;
      }
      i = 0;
      while(i < newest.length){
	time += newest[i] + ",";
	i++;
      }
      var dd= new Date(hot[1].date);
      var ddd = new Date();
      display_reminder(data, newest);
      //alert(hot[0].date);
    },
    error:function(xhr, ajaxOptions, throwError) {
      alert(console.log(xhr));
	  }
  });
  }
}

function display_content(data){
  var hot = JSON.parse(data); 
  var but;
  var button_name;
  var i=(hot.length-1);
  var id_name = new Array(1000);
  var test;
  var image;
  //$('.image').muImageResize({width: 150, height:150}); 
  while(i>=0){
    id_name[i] = hot[i].a_id;
    $("#content_left").append(
      '<div id = box_5>'
      +'<div id=box_5_title >'
      +'<p>'+ hot[i].title + '</p>' 
      +'<img class="monkey monkey_'+hot[i].a_id+ '"  src="image/monkey.png"   name=' + hot[i].a_id + ' >'
      +'</div>'
      +'<div id="box_5_image" class="main" style='+"background-image:url('image/" +hot[i].category+".jpg');>"
      +'<div class="sub">come here</br></div>'
      +'</div>'
      +'<div id="box_5_bottom">'
      +'<div id="box_5_text">'
      +'<div id="box_5_info">' 
      +'<p id="act_content">'
      +'<a id="money">日期:</a>'
      +hot[i].date 
      +'</br>'
      +'<a id="money">人數:</a>'
      +hot[i].amount
      +'/'
      +'</p>'
      +'</div>'
      +'<div id="box_5_button">'
      +'<button type="button" href="#" id=test'+ hot[i].a_id  +' class="orange" name=' + hot[i].a_id + '>我要參加</button>'
      +'<button type="button" href="#" id=discard'+ hot[i].a_id  +' class="orange1" name=' + hot[i].a_id + '>取消參加</button>'
      +'</div>'
      +'</div>' 
      +'</div>' 
      +'</div>');
     i--;
  }
  for(var i=1;i<hot.length;i++){
    $("#test"+hot[i].a_id).click(function(){
      if($.cookie('id') == null){
	alert('please login!!!');
      }
      else{
	$( "#join_page" ).dialog( "open" );
	$.ajax({
	  data:{
	    a_id:$(this).attr('name'),
	  u_id:$.cookie('id')
	  },
	  url:'attending_list.php', // CGI URL
	  success:function(data){
	    var join=JSON.parse(data);
	    for(var k=1;k<hot.length;k++){
	      if(join.a_id==hot[k].a_id) {
		$("#join_page").empty();
		$("#join_page").append("標題"+"  "+hot[k].title+"</br>"+
		  "出遊時間"+"   "+hot[k].date+"</br>"+
		  "需求總數"+"    "+hot[k].amount+"</br>"+
		  "簡介"+"    "+hot[k].introduction);
		$("#join_page").attr("name",join.a_id);
	      }
	    }
	  },
	  error:function (xhr, ajaxOptions, thrownError) {
	    alert(console.log(xhr));        
	  }
	}); 
    }
  });
  }
}


function display_reminder(data, newest){
  var i = 1;
  var hot = JSON.parse(data);
  while(i < 5){
    $('.reminder').css({"display":"block"});
  $('#reminder').append(
      '<div class=\'reminder_box\' id=\'reminder_box_'+i+'\'>yoyoman</div>');
  $('#'+'reminder_box_'+i).css({"top":$(window).height()-$(window).height()*0.1*i-10});
  $('#'+'reminder_box_'+i).animate({opacity:1}, 1000);
    $('#'+'reminder_box_'+i).animate({opacity:0}, 500, function(){
    });
  i++;
  }
}

