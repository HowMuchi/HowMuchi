<?php

$db_host = 'merry.ee.ncku.edu.tw';
$db_user = 'nckucampus';
$db_pwd = 'yoman';
$db_name = 'nckucampus';

$conn = mysql_connect($db_host, $db_user, $db_pwd) or die('Error with MySQL connection');
mysql_query("SET NAMES utf8;", $conn);
mysql_select_db($db_name)or die(mysql_error());

$query ="SELECT * FROM  `5_activity` ";
$result =mysql_query($query);

$cur_user = $_REQUEST['u_id'];
$mysql_query = "SELECT a_id from 5_follow where f_id='$u_id'";

$condition_result = mysql_query($mysql_query);

$return_arr = array();
while($data=mysql_fetch_array($result))
{
//  $row_array = array();
/*  while($data2 = mysql_fetch_array($condition_result)){
    if($data['a_id']==$data2['a_id']){
      $row_array['att_status']=1;
    break;
    }
    else
      $row_array['att_status']=0;
}*/
  $row_array['a_id']=$data['a_id'];
  $row_array['title']=urlencode($data['title']);
  $row_array['h_id']=$data['h_id'];
  $row_array['category']=$data['category'];
  $row_array['amount']=$data['amount'];
  $row_array['date']=$data['date'];
  $row_array['introduction']=urlencode($data['introduction']);
  array_push($return_arr,$row_array);
}
echo urldecode(json_encode($return_arr));
 
// while($data2 = mysql_fetch_array($condition_result)){
 //	echo $data2[0];
// }
?>

