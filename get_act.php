<?php

$db_host = 'merry.ee.ncku.edu.tw';
$db_user = 'nckucampus';
$db_pwd = 'yoman';
$db_name = 'nckucampus';

$conn = mysql_connect($db_host, $db_user, $db_pwd) or die('Error with MySQL connection');
mysql_query("SET NAMES utf8;", $conn);
mysql_select_db($db_name)or die(mysql_error());

$cur_user = $_REQUEST['u_id'];
if($cur_user != '')
	$query ="select * from 5_activity where a_id not in (select a_id from 5_follow where f_id = '$cur_user' or if_host = '$cur_user')";
else{
	$query = "select * from 5_activity";
}
$result =mysql_query($query);

$return_arr = array();
while($data=mysql_fetch_array($result))
{
  $row_array['a_id']=$data['a_id'];
  $row_array['title']=urlencode($data['title']);
  $row_array['h_id']=$data['h_id'];
  $row_array['category']=$data['category'];
  $row_array['amount']=$data['amount'];
  $row_array['date']=$data['date'];
  $row_array['introduction']=urlencode($data['introduction']);

  $act_id = $data['a_id'];
  //query for the amount of joined people
  $amount_query = mysql_query("select count(*) from 5_follow where a_id= $act_id"); 
  while($now_amount=mysql_fetch_array($amount_query)){
    $row_array['now_amount']=$now_amount['count(*)'];
  }
  array_push($return_arr,$row_array);
}
echo urldecode(json_encode($return_arr));

// while($data2 = mysql_fetch_array($condition_result)){
//	echo $data2[0];
// }
?>

