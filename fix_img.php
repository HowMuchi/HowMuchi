<?php

$PATH = 'image2/'.$a_id.'.jpg';
$a_id = $_REQUEST['a_id'];
$category = $_REQUEST['category'];
   if(file_exists($PATH)){
     echo $a_id;
   else
     echo $category;

?>
