<?php
//print $_REQUEST['nanoha'];
function outputJSON($msg, $status = 'error'){
  header('Content-Type: application/json');
  die(json_encode(array(
    'data' => $msg,
    'status' => $status
  )));
}

//change the file name with a_id
$a_id = $_POST['change_name'];
$file_name = $_FILES['SelectedFile']['name'];
$fn_array = explode(".",$file_name);
$main_name = $fn_array[0];
$sub_name = $fn_array[1];
//$user_id = 45678;
 
// Check for errors
if($_FILES['SelectedFile']['error'] > 0){
  outputJSON('An error ocurred when uploading.');
}

// Check filesize
if($_FILES['SelectedFile']['size'] > 500000){
  outputJSON('File uploaded exceeds maximum upload size.');
}

// Check if the file exists
/*
if(file_exists('upload/' . $_FILES['SelectedFile']['name'])){
	outputJSON('File with that name already exists.');
}*/
 
// Upload file
if(!move_uploaded_file($_FILES['SelectedFile']['tmp_name'], 'image2/' .  $a_id.'.'.$sub_name)){
 outputJSON('Error uploading file - check destination is writeable.');
}

// Success!
outputJSON('File uploaded successfully to "' . 'image2/' . $a_id.'.'.$sub_name. '".', 'success');
 
echo "$user_id";
?>
