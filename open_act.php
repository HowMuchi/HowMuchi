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
$return_aid_query = "SELECT MAX(a_id) from 5_activity";
$result = mysql_query($return_aid_query);
$cur_aid;
while($data=mysql_fetch_array($result)){
  $cur_aid=$data[0];
  echo $data[0];
}
$mysql2 = "insert into 5_follow (a_id,f_id,if_host) values ($cur_aid,$h_id,1)";
mysql_query($mysql2);

?>
