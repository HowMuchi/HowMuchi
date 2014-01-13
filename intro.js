
$('#logo').mouseover(function(){

  $(this).addClass('animated shake');
}).mouseout(function(){
  $(this).removeClass('animated shake');
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
	$('#sign_in_information').css({"display":"inline","opacity":"1"});
	$('#sign_in_information').animate({opacity:0},600, function(){$('#sign_in_information').css({"display":"none"});});
	$('#member').css({"display":"none"});
	$('#member_after').css({"display":"inline"});
      }
      else{
	$('#sign_in_form').css({"display":"none"});
	$('#sign_in_information').css({"display":"inline","opacity":"1"});
	$('#sign_in_information').animate({opacity:0},600, function(){$('#sign_in_information').css({"display":"none"});});
      }
    },
    error:function (xhr, ajaxOptions, thrownError) {
      alert(console.log(xhr));        
    }
  });
  jQuery('#user_info').html("<img src='ajax-loader.gif'>");
});

$('#menu_login').click(
	function(){
	$("#sign_in_form").css({"display":"inline"});
	});

$('#menu_logout').click(function(){
  $.removeCookie('name');
  $('#member_after').css({"display":"none"});
  $('#member').css({"display":"inline"});
});

$(function() {
  $( ".datepicker" ).datepicker({
	dateFormat: 'yy-mm-dd',
  	inline:true,
  	showOtherMonths:true,
  	dayNamesMin:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  });
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
	    title:$('input[name=title]').val(),
	  people:$('input[name=people]').val(),
	  date:$('input[name=date]').val(),
	  introduction:$('textarea[name=introduction]').val(),
	  },
	  url:'open_act.php', // CGI URL
	  success:function(data){
	    //var post = JSON.parse(data);
	    alert('success');
	    location.reload();
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
    $('#sign_up_tips').html('Please sign!!');
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

$( "#sign_up_dialog" ).dialog({
  autoOpen: false,
height: 462,
width: 400,
modal: true,
position: {my: "center", at: "top+10%", of: window },
create:function(event,ui){
  //check account is used or not 
  $('input#SUaccount').keyup(function(){                                                                                          
    $.ajax({
      data:{account:jQuery('input#SUaccount').val()},
    url:'account_ajax.cgi', // CGI URL
    success:function(data){
      $('#signUp_info').html(data);
    }
    });
    jQuery('#signUp_info').html("<img src='ajax-loader.gif'>");
  }); 
},
buttons: {
  "Create an account": function() {
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
	  alert('sign Up success');
	},
	  error:function (xhr, ajaxOptions, thrownError) {
	    alert(console.log(xhr));        
	  }
      });
      $( this ).dialog( "close" );
    }
  },
  Cancel: function() {
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
$('.orange').click(function(){
});
/* 
   $(function(){
   $.ajax({
   data:{},
   url:'get_act.php', // CGI URL
   success:function(data){
   alert(data);
   }
   });
   });*/
/*
$.get('get_act.php',function(data){
  
  var hot = JSON.parse(data); 
  var i=hot.length-1;
  //$('.image').muImageResize({width: 150, height:150}); 
  while(i>=0){
    $("#content").append("<div " + "id= " + "box_5 " + ">"
      +"<div " + "id= " + "box_5_title " + ">"
      +"<p>" + "[開團]"+ hot[i].title + "</p>"  
      +"</div>"
      +"<div " + "id=" + "box_5_image" + " class=" + "main" + " style=" 
      +"background-image:url('image/" + i+".jpg');"+ ">"
      +"<div " + "class=" + "sub" + " >"
      + "come here" + "</br>"
      +"</div>" + "</div>"
      +"<div " + "id=" + "box_5_bottom" + " >"
      +"<div " + "id=" + "box_5_text" + " >"
      +"<p" + " id=" + "ss" +">" + "<a" + " id=" + "money" + ">" + "日期:"  + "</a>"+hot[i].date 
      +"</br>"+ "<a" + " id=" + "money" + ">" + "人數:" + "</a>"+hot[i].amount
      +"</p>"
      +"</div>" + "<div>"
      +"<a " + "href=" + "#" + " id=" + "orange_button "
      +"class=" + "orange"
      + ">" + "我要參加" + "</a>"
      +"</div>" + "</div>" + "</div>"
      );
    i--; 
    }
});*/
