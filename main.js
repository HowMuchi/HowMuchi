$('#logo').mouseover(function(){

  $(this).addClass('animated shake');
}).mouseout(function(){
  $(this).removeClass('animated shake');
});
$('#menu_login').click(
    function(){
      $("#sign_in_form").css({"display":"inline"});
    });

$('#login').click(function(){
  $.ajax({
    data:{
      account:$('input[name=SIaccount]').val(),
    password:$('input[name=SIpassword]').val()
    },
    url:'signIn.cgi', // CGI URL
    success:function(data){
      jQuery('#sign_in_information').html(data);
      if(data == 'success'){
	$('#sign_in_form input').val('');
	$('#sign_in_form').css({"display":"none"});
	$('#sign_in_information').css({"display":"inline"});
	$('#sign_in_information').animate({opacity:0},600, function(){
	  $("#sign_in_information").css({"opacity":"1", "display":"none"});
	});
	$('#member').css({"display":"none"});
	$('#member_after').css({"display":"inline"});
	get_follow_post();
      }
      else{
	$('#sign_in_information').html(data);
	$('#sign_in_form').css({"display":"none"});
	$('#sign_in_information').css({"display":"inline"});
	$('#sign_in_information').animate({opacity:0},600, function(){
	  $("#sign_in_information").css({"opacity":"1", "display":"none"});
	});
      }

    },
    error:function (xhr, ajaxOptions, thrownError) {
      alert(console.log(xhr));        
    }
  });
  jQuery('#user_info').html("<img src='ajax-loader.gif'>");
});

$("#in").keypress(function(e){
  if(e.which == 13){
    if($("#in_1").val() == ""){
      alert("Password is required!!");
    }
    else{
      $.ajax({
	data:{
	  account:$('input[name=SIaccount]').val(),
	password:$('input[name=SIpassword]').val()
	},
	url:'signIn.cgi', // CGI URL
	success:function(data){
	  jQuery('#sign_in_information').html(data);
	  if(data == 'success'){
	    $('#sign_in_form input').val('');
	    $('#sign_in_form').css({"display":"none"});
	    $('#sign_in_information').css({"display":"inline"});
	    $('#sign_in_information').animate({opacity:0},600, function(){
	      $("#sign_in_information").css({"opacity":"1", "display":"none"});
	    });
	    $('#member').css({"display":"none"});
	    $('#member_after').css({"display":"inline"});
	  }
	  else{
	    $('#sign_in_information').html(data);
	    $('#sign_in_form').css({"display":"none"});
	    $('#sign_in_information').css({"display":"inline"});
	    $('#sign_in_information').animate({opacity:0},600, function(){
	      $("#sign_in_information").css({"opacity":"1", "display":"none"});
	    });
	  }

	},
	  error:function (xhr, ajaxOptions, thrownError) {
	    alert(console.log(xhr));        
	  }
      });
      jQuery('#user_info').html("<img src='ajax-loader.gif'>");
    }
  }
});

$("#in_1").keypress(function(e){
  if(e.which == 13){
    if($("#in").val() == ""){
      alert("未填寫帳號");
    }
    else{
      $.ajax({
	data:{
	  account:$('input[name=SIaccount]').val(),
	password:$('input[name=SIpassword]').val()
	},
	url:'signIn.cgi', // CGI URL
	success:function(data){
	  jQuery('#sign_in_information').html(data);
	  if(data == 'success'){
	    $('#sign_in_form input').val('');
	    $('#sign_in_form').css({"display":"none"});
	    $('#sign_in_information').css({"display":"block"});
	    $('#sign_in_information').animate({opacity:0},600, function(){
	      $("#sign_in_information").css({"opacity":"1", "display":"none"});
	    });
	    $('#member').css({"display":"none"});
	    $('#member_after').css({"display":"block"});
	  }
	  else{
	    $('#sign_in_information').html(data);
	    $('#sign_in_form').css({"display":"none"});
	    $('#sign_in_information').css({"display":"block"});
	    $('#sign_in_information').animate({opacity:0},600, function(){
	      $("#sign_in_information").css({"opacity":"1", "display":"none"});
	    });
	  }

	},
	  error:function (xhr, ajaxOptions, thrownError) {
	    alert(console.log(xhr));        
	  }
      });
      jQuery('#user_info').html("<img src='ajax-loader.gif'>");
    }
  }
});

$('body').keypress(function(e){
  // alert(e.keycode);
  if(e.which == 13){
    $('#sign_in_form').css({'display':'none'});
  }
});
$('#menu_logout').click(function(){
  $.removeCookie('name');
  $.removeCookie('id');
  $('#member_after').css({"display":"none"});
  $('#member').css({"display":"block"});
});

$(function() {
  $( ".datepicker" ).datepicker({
    minDate:0, 
    dateFormat: 'yy-mm-dd'});
});
$(function() {
  $( "#tabs" ).tabs();
});
$('#home_page_btn').click(function(){
  $('#content').html();
});

$(function() {
  $( "#open_act_page" ).dialog({
    autoOpen: false,
    height: 500,
    width: 600,
    modal:true,
    buttons: {
      "Create": function() {
	$.ajax({
	  data:{
	    category: $("#items option:selected").val(),
	h_id: $.cookie('id'),
	title:$('input[name=title]').val(),
	people:$('input[name=people]').val(),
	date:$('input[name=date]').val(),
	introduction:$('textarea[name=introduction]').val()
	  },
	url:'open_act.php', // CGI URL
	success:function(data){
	  alert(data);
	  document.getElementById('change_name').value=data;
	  alert(document.getElementById('change_name').value);
	  $(document).ready(function() { 
	    $('#myForm').submit();
	  });
	  location.reload(true);
	},
	error:function (xhr, ajaxOptions, thrownError) {
	  alert(console.log(xhr));        
	}
	});
	$( this ).dialog( "close" );
      },
      Cancel: function() {
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
  }
  );
  $( "#create_act_btn" ).click(function() {
    alert('12345');
    /*if($.cookie('name') != null) {
      $( "#open_act_page" ).dialog( "open" );
      }
      else{
      $('#sign_up_dialog').dialog("open");
      $('#sign_up_tips').html('Please sign!!');}*/
  });
});

function create_act(){
  if($.cookie('name') != null) {
    $( "#open_act_page" ).dialog( "open" );
  }
  else{
    $('#sign_up_dialog').dialog("open");
    $('#sign_up_tips').html('請登入!!');
  }
};


$('#items').change(function(){
  var a = '['+$('#items option:selected').text()+'] ';
  $('#title_input').attr('value', a);
});


$(function() {
  var name = $( "#name" ),
  email = $( "#email" ),
  account = $( "#SUaccount" )
  password = $( "#SUpassword" ),
  allFields = $( [] ).add( name ).add( email ).add( password ),
  tips = $( ".validateTips" );

function updateTips( t ) {
  tips
  .text( t )
  .addClass( "ui-state-highlight" );
setTimeout(function() {
  tips.removeClass( "ui-state-highlight", 1500 );
}, 500 );
}

function checkLength( o, n, min, max ) {
  if ( o.val().length > max || o.val().length < min ) {
    o.addClass( "ui-state-error" );
    updateTips( "Length of " + n + " must be between " +
      min + " and " + max + "." );
    return false;
  } else {
    o.removeClass( "ui-state-error" );
    return true;
  }
}

function checkRegexp( o, regexp, n ) {
  if ( !( regexp.test( o.val() ) ) ) {
    o.addClass( "ui-state-error" );
    updateTips( n );
    return false;
  } else {
    return true;
  }
}

$(function() {
  $( "#join_page" ).dialog({
    autoOpen: false,
  height: 500,
  width: 600,
  modal:true,
  buttons: {
    "參加": function() {
      $.ajax({
	data:{
	  a_id:$(this).attr('name'),
      u_id:$.cookie('id')
	},
      url:'attending_list.php', // CGI URL
      success:function(data){
	var state=JSON.parse(data);
      }
      });
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

$( "#sign_up_dialog" ).dialog({
  autoOpen: false,
  height: 550,
  width: 400,
  modal: true,
  position: {my: "center", at: "top+3%", of: window },
  create:function(event,ui){
    //check account is used or not 
    $('input#SUaccount').keyup(function(){                                                                                          
      if($('input#SUaccount').val().length > 5){
	$.ajax({
	  beforeSend:function(){$('#signUp_info').html("<img src='ajax-loader.gif'>");},
	  data:{account:jQuery('input#SUaccount').val()},
	  url:'account_ajax.cgi', // CGI URL
	  success:function(data){
	    $('#signUp_info').html(data);
	  }
	});
      }
      else{
	$('#signUp_info').html("帳號過短");
      }
    //    jQuery('#signUp_info').html("<img src='ajax-loader.gif'>");
    }); 
  },
  buttons: {
    "創立帳號": function() {
      var bValid = true;
      allFields.removeClass( "ui-state-error" );

      bValid = bValid && checkLength( account, "account", 5, 16 );
      bValid = bValid && checkLength( password, "password", 5, 16 );
      bValid = bValid && checkLength( email, "email", 6, 80 );
      bValid = bValid && checkLength( name, "username", 3, 16 );

      bValid = bValid && checkRegexp( account, /^([0-9a-zA-Z])+$/, "Account field only allow : a-z 0-9" );
      bValid = bValid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );
      // From jquery.validate.js (by joern), contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
      bValid = bValid && checkRegexp( email, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "eg. ui@jquery.com" );
      bValid = bValid && checkRegexp( name, /^[a-z]([0-9a-z_])+$/i, "Username may consist of a-z, 0-9, underscores, begin with a letter." );

      if ( bValid ) {
	$.ajax({
	  data:{
	    account:$('input#SUaccount').val(),
	  password:$('input#SUpassword').val(),
	  email:$('input#email').val(),
	  name:$('input#name').val()
	  },
	  url:'signUp.cgi', // CGI URL
	  success:function(data){
	    alert('創立帳號成功');
	  },
	  error:function (xhr, ajaxOptions, thrownError) {
	    alert(console.log(xhr));        
	  }
	});
	$( this ).dialog( "close" );
      }
    },
    "取消": function() {
      $( this ).dialog( "close" );
    }
  },
  close: function() {
    allFields.val( "" ).removeClass( "ui-state-error" );
  }
});
});


$("#create_user").click(function(){
  $( "#sign_up_dialog" ).dialog( "open" );
});
$(function(){
  $("#accordion").accordion({
    collapsible:true
  });
});

$(function(){
  $('#dropdown').hover(

    function () {

      //change the background of parent menu				
      $('#dropdown li a.parent').addClass('hover');

      //display the submenu
      $('#dropdown ul.children').show();

    },
    function () {
      //change the background of parent menu
      $('#dropdown li a.parent').removeClass('hover');			

      //display the submenu
      $('#dropdown ul.children').hide();	
    }
    )
});

$('.class_name[2]').click(function(){
});


$(".class_name[2]").click(function(){alert($(this).attr('name'))});

//see the image exist or not
function IsFileExist(filePath){
  var bo = false;
  $.ajax({
    url:filePath,
    type:'HEAD',
    async:false,
    success:function(){
      bo = true;
    },
    error:function(){
      bo = false;
    }
  });
  return bo;
}

$(function(){
  $.ajax({
    data:{
      // u_id: $.cookie('id')
    },
    url:'get_act.php', // CGI URL
    success:function(data){
      //     alert(data);
    }
  });
});
$.get('get_act.php',function(data){
  var hot = JSON.parse(data); 
  var but;
  var button_name;
  var i=(hot.length-1);
  var id_name = new Array(1000);
  var test;
  var image;
  var file_exist;
  //$('.image').muImageResize({width: 150, height:150}); 
  while(i>0){
    if(IsFileExist('image2/'+hot[i].a_id+'.jpg'))
     file_exist = hot[i].a_id;
   else
     file_exist = hot[i].category;
    id_name[i] = hot[i].a_id;
    $("#content_left").append(
	'<div id = box_5>'
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
	+'  '
	+'/'
	+hot[i].amount
	+'</p>'
	+'</div>'
	+'<div id="box_5_button">'
	+'<button type="button" href="#" id=test'+ hot[i].a_id  +' class="orange" name=' + hot[i].a_id + '>我要參加</button>'
	+'</div>'
	+'</div>'
	+'</div>'
	);
    i--;
  }
  for(var i=1;i<hot.length;i++){
    $("#test"+hot[i].a_id).click(function(){
      if($.cookie('id') == null){
	alert('請登入!!!');
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
		  "出遊時間:"+"   "+hot[k].date+"</br>"+
		  "目前情況:"+"    "+join.cur_people+"/"+join.need_people+"</br>"+
		  "簡介:"+"    "+hot[k].introduction);
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
    /*discard button*/
    $("#discard"+hot[i].a_id).click(function(){
      if($.cookie('id')== null){
	alert("請登入!!");
      }
      else{
	alert("Fuck U");
	$.ajax({
	  data:{
	    a_id:$(this).attr('name'),
	  u_id:$.cookie('id')
	  },
	  url:'get_specific_activity_datat.php', // CGI URL
	  success:function(data){
	    var join=JSON.parse(data);
	    for(var k=1;k<hot.length;k++){
	      if(join.a_id==hot[k].a_id) {
		$('#discard'+join.a_id).hide();
		$('#test'+join.a_id).show();
	      }
	    }
	  },
	  error:function (xhr, ajaxOptions, thrownError) {
	    alert(console.log(xhr));        
	  }
	}); 
	alert("Aloha");
      }

    });

  }
});


