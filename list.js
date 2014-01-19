
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
  $('html,body').scrollTop(0);
  FollowOrHost(1);
}); 

$('#user_created').click(function(){
  abc(-2);
  $('html,body').scrollTop(0);
  FollowOrHost(2);
});

$('#recent_act').click(function(){
  $.ajax({
	  data:{
	    u_id:$.cookie('id')
	  },
	  url:'get_recent_act.php', // CGI URL
	  success:function(data){
	    //alert(data);
	    content_fadeInOut(data,0);
	  },
	  error:function (xhr, ajaxOptions, thrownError) {
	    alert(console.log(xhr));        
	  }
	}); 
});
function FollowOrHost(state){
	if(state == 1){
	  	//change  user_followed to dark red
		$('#user_followed').css({"background-color":"rgba(148,38,38,0.61)",});
		//change user_created to default
		$('#user_created').css({"background-color":"rgba(216,104,122,0.61)",});
		//change user_followed to default
		$('#recent_act').css({"background-color":"rgba(216,104,122,0.61)",});
	}
	else if(state == 2){
		//change user_followed to default
		$('#user_followed').css({"background-color":"rgba(216,104,122,0.61)",});
	  	//change user_created to dark red
		$('#user_created').css({"background-color":"rgba(148,38,38,0.61)",});
		//change user_followed to default
		$('#recent_act').css({"background-color":"rgba(216,104,122,0.61)",});
	}
	else if(state ==3){
		//change user_followed to default
		$('#user_followed').css({"background-color":"rgba(216,104,122,0.61)",});
		//change user_followed to default
		$('#user_created').css({"background-color":"rgba(216,104,122,0.61)",});
	  	//change user_created to dark red
		$('#recent_act').css({"background-color":"rgba(148,38,38,0.61)",});
	
	}
}

function abc(category){
  //select category
  if(category > 0){	
  $.ajax({
	  data:{
	    category:category
	  },
	  url:'get_cate.php', // CGI URL
	  success:function(data){
	    content_fadeInOut(data, 1);
	  },
	  error:function (xhr, ajaxOptions, thrownError) {
	    alert(console.log(xhr));        
	  }
	}); 
  }
  //show follow activity
  else if(category == -1){
  $.ajax({
	  data:{
	    u_id:$.cookie('id')
	  },
	  url:'get_user_post.php', // CGI URL
	  success:function(data){
	    content_fadeInOut(data, 0);
	  },
	  error:function (xhr, ajaxOptions, thrownError) {
	    alert(console.log(xhr));        
	  }
	}); 
  }
  else if(category == -2){
  $.ajax({
	  data:{
	    u_id:$.cookie('id')
	  },
	  url:'get_host_list.php', // CGI URL
	  success:function(data){
	    content_fadeInOut(data, -1);
	  },
	  error:function (xhr, ajaxOptions, thrownError) {
	    alert(console.log(xhr));        
	  }
	}); 
  }
  //show all activity
  else if(category == 0){
  $.ajax({
	  data:{},
	  url:'get_act.php', // CGI URL
	  success:function(data){
	    content_fadeInOut(data, 1);
	  },
	  error:function (xhr, ajaxOptions, thrownError) {
	    alert(console.log(xhr));        
	  }
	}); 
  }

}

function content_fadeInOut(data, type){
  $('#content_left').addClass("animated fadeOutDown");
  $('#content_left').animate({opacity:1}, 1000, function(){
    $('#content_left').removeClass("animated fadeOutDown");
    $('#content_left').html("");
    $('#content_left').css({"opacity":"0"});
    display_content(data, type);
    $('#content_left').addClass('animated fadeInUp');
  });

}

$(document).ready(function(){
  get_follow_post();
  get_host();
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
      var i = 0;
      var newest = [];
      var cur_time = new Date();
      while(i < hot.length){
	//time += hot[i].date + ',\n';
	var time = new Date(hot[i].date) ;
	if((time - cur_time) > 0)
	    newest.push(i);
	i++;
      }
      display_reminder(data, newest);
    },
    error:function(xhr, ajaxOptions, throwError) {
      alert(console.log(xhr));
	  }
  });
  }
}

function get_host(){
  $.ajax({
    data:{
    u_id:$.cookie('id')
    },
    url:'get_host_list.php',
    success:function(data){
    },
    error:function(xhr, ajaxOptions, throwError) {
      alert(console.log(xhr));
	  }
  });

}

function cancel_followed(a_id, request, u_id){
  $.ajax({
  data:{
	a_id:a_id,
  	action:request,
	u_id:$.cookie('id')
    },
  url:'delete_act.php',
  success:function(){
    alert('delete success!!');
    $('.act'+a_id).addClass("animated fadeOutDown");
    if(request == 2)
    	abc(-1);
    else
    	abc(-2);
  },
  error:function(xhr, ajaxOptions, throwError){
    alert(console.log(xhr));
  }
  });
}

//fromwhere
//1: from category
//0: from attended
function display_content(data, fromwhere){
  var hot = JSON.parse(data); 
  var but;
  var button_name;
  var i=(hot.length-1);
  var id_name = new Array(1000);
  var test;
  var image;
  var message;
  $("#content_left").html('');
  if(fromwhere == 1){
    message = '我要參加';
  }else if(fromwhere == 0){
    message = '取消參加';
  }else if(fromwhere == -1){
    message = '解散開團';
  }
  while(i>-1){
    if(IsFileExist('image2/'+hot[i].a_id+'.jpg'))
      file_exist = hot[i].a_id;
    else
      file_exist = hot[i].category;
    id_name[i] = hot[i].a_id;
    $("#content_left").append(
	'<div id = "box_5" class="act'
	+hot[i].a_id+'">'
	+'<div id=box_5_title >'
	+'<p>'+ hot[i].title + '</p>'
	+'</div>'
	+'<div id="box_5_content">'
	+'<div id="box_5_image" >'
	+'<img src="image2/'+file_exist+'.jpg">'
	+'</div>'
	+'<div id="box_5_text">'
	+'<div id="box_5_info">'
	+'<p>'
	+'<a id="money">日期:</a>'
	+hot[i].date 
	+'</br>'
	+'<a id="money">人數:</a>'
	+'/'
	+hot[i].amount
	+'</p>'
	+'</div>'
	+'<div id="box_5_button">'
	+'<button type="button" href="#" id=test'+ hot[i].a_id  +' class="orange" name=' + hot[i].a_id + '>'+message+'</button>'
	+'</div>'
	+'</div>'
	+'</div>'
	);
    i--;
  }
  for(var i=0;i<hot.length;i++){
    $("#test"+hot[i].a_id).click(function(){
      if($.cookie('id') == null){
	alert('請登入!!!');
      }
      else if(fromwhere == 1){
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
		  "目前情況:"+"    "+join.cur_people+"/"+join.need_people+"</br>"+
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
    else if(fromwhere == 0){
      $('#delete_confirm').html('確定要刪除嗎?');
      var temp = $(this).attr('name');
      $('#delete_confirm').data('a_id', temp).data('request', '2').dialog("open");
    }
    else if(fromwhere == -1){
      $('#delete_confirm').html('確定要刪除嗎?');
      var temp = $(this).attr('name');
      $('#delete_confirm').data('a_id', temp).data('request', '1').dialog("open");
      }
  });
  }
}

$(function() {
  $( "#activity_info_dialog" ).dialog({
    autoOpen: false,
  height: 500,
  width: 600,
  modal:true,
  buttons: {
    "朕知道了": function() {
      $( this ).dialog( "close" );
    }
  },
  position: {my:"center", at:"top", of:window },
  show: {
    duration: 300
  },
  hide: {
    duration: 300
  }
  })
});

$(function() {
  $( "#delete_confirm" ).dialog({
    autoOpen: false,
    height: 500,
    width: 600,
    modal:true,
    buttons: {
      "確定":function(){
	cancel_followed($('#delete_confirm').data('a_id'), $('#delete_confirm').data('request'), $.cookie('id'));
	$( this ).dialog( "close" );
      },
    "取消": function() {
      $( this ).dialog( "close" );
    }
    },
    position: {my:"center", at:"top", of:window },
    show: {
      duration: 300
    },
    hide: {
      duration: 300
    }
  })
});


function display_reminder(data, newest){
  var i = 1;
  var hot = JSON.parse(data);
  $.each(newest, function(index, value){
    var box_name = '#reminder_box_' + index;
    $('.reminder').css({"display":"block"});
    $('#reminder').append(
      '<div class=\'reminder_box\' id=\'reminder_box_'+index+'\'>'+hot[value].title+'</div>');
    $("#activity_info_dialog").attr("name",hot[value].a_id);
    $(box_name).click(function(){
      $( "#activity_info_dialog" ).empty();
      $("#activity_info_dialog").append("標題"+"  "+hot[value].title+"</br>"+
	"出遊時間"+"   "+hot[value].date+"</br>"+
	"需求總數"+"    "+hot[value].amount+"</br>"+
	"簡介"+"    "+hot[value].introduction);
      $( "#activity_info_dialog" ).dialog( "open" );
    });
    $(box_name).css({"top":$(window).height()-60*(index+1)-5*(index)});
    $(box_name).hover(function(){
      $(box_name).stop(true, false);
      $(box_name).css({opacity:1});
    },function(){
      $(box_name).css({opacity:0.7});
      $(box_name).delay(3000);
      $(box_name).animate({opacity:0}, 2000, function(){$(box_name).remove();});
    });
    $(box_name).delay(3000);
    $(box_name).animate({opacity:0}, 2000, function(){$(box_name).remove();});
    i++;
  });
}


