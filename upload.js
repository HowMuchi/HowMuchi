$(document).ready(function() { 
  // bind 'myForm' and provide a simple callback function 
  $('#myForm').ajaxForm(function(e) { 
    //url:'upload.php',
    //alert("your file has been uploaded"); 
  }); 
});
/*
_submit = $('#_submit')[0];
_file = $('#_file')[0];
_progress = $('#_progress')[0];

//_progress = $('#_progress');
var upload = function(){

if(_file.files.length === 0){
return;
}

var data = new FormData();
data.append('SelectedFile', _file.files[0]);

var request = new XMLHttpRequest();
request.onreadystatechange = function(){
if(request.readyState == 4){
try {
var resp = JSON.parse(request.response);
} catch (e){
var resp = {
status: 'error',
data: 'Unknown error occurred: [' + request.responseText + ']'
};
}
console.log(resp.status + ': ' + resp.data);
}
};

request.upload.addEventListener('progress', function(e){
_progress.style.width = Math.ceil(e.loaded/e.total) * 100 + '%';
}, false);

//request.open('POST', 'upload.php');
//request.send(data);
$.post('upload.php',data,function(){
console.log('sus');
});
}

o
_submit.addEventListener('click', upload);*/
