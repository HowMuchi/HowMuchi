<?php

$db_host = 'merry.ee.ncku.edu.tw';
$db_user = 'nckucampus';
$db_pwd = 'yoman';
$db_name = 'nckucampus';

$conn = mysql_connect($db_host, $db_user, $db_pwd) or die('Error with MySQL connection');
mysql_query("SET NAMES utf8;", $conn);
mysql_select_db($db_name)or die(mysql_error());

$category = $_REQUEST['category'];
$h_id = $_REQUEST['h_id'];
$title = $_REQUEST['title'];
$amount = $_REQUEST['people'];
$date = $_REQUEST['date'];
$introduction = $_REQUEST['introduction'];
$mysql = "insert into 5_activity (category,h_id,title,amount,date,introduction) values ($category,'$h_id','$title','$amount','$date','$introduction')"; 
if (!$queryResource = mysql_query($mysql))                                                                                      
  die (mysql_error());
//echo $title."</br>".$amount."</br>".$date;
//    echo $category."\n".$h_id."\n".$title."\n".$amount."\n".$date."\n";
//	echo $category;
$return_aid_query = "SELECT MAX(a_id) from 5_activity";
$result = mysql_query($return_aid_query);
while($data=mysql_fetch_array($result)){
  echo $data[0];
}

?>
