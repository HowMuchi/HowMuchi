<?php
$db_host = 'merry.ee.ncku.edu.tw';
$db_user = 'nckucampus';
$db_pwd = 'yoman';
$db_name = 'nckucampus';
$conn = mysql_connect($db_host, $db_user, $db_pwd) or die('Error with Mysql connection');
mysql_query("SET NAMES utf8;", $conn);
mysql_select_db($db_name)or die(mysql_error());
$u_id = $_REQUEST['u_id'];

$mysql_query = "SELECT * from 5_follow,5_activity where f_id='$u_id' and 5_follow.a_id=5_activity.a_id";

$result = mysql_query($mysql_query);

$result_a = array();

while($data = mysql_fetch_array($result))
{
   $result_ar['a_id']=$data['a_id'];
   $result_ar['f_id']=$data['f_id'];
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
