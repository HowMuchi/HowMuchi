<?php
//get specific activity detail
$db_host = 'merry.ee.ncku.edu.tw';
$db_user = 'nckucampus';
$db_pwd = 'yoman';
$db_name = 'nckucampus';
mysql_connect($db_host, $db_user, $db_pwd) or die('Error with MySQL connection');
mysql_query("SET NAMES utf8;", $conn);
mysql_select_db($db_name)or die(mysql_error());
if (!$attend_data = mysql_query($attend_ct_query, $conn)){
  die (mysql_error());
}   

$a_id=$_REQUEST['a_id'];

$mysql="SELECT * from 5_activity where a_id='$a_id'";

$result= mysql_query($mysql);
$result_a = array();
while($data=mysql_fetch_array($result)){
  $result_ar['a_id']=$data['a_id'];
  $result_ar['category']=$data['category'];
  $result_ar['h_id']=$data['h_id'];
  $result_ar['title']=$data['title'];
  $result_ar['amount']=$data['amount'];
  $result_ar['date']=$data['date'];
  $result_ar['introdution']=$data['introduction'];
  array_push($result_a,$result_ar);
}
echo urldecode(json_encode($result_a));
?>
