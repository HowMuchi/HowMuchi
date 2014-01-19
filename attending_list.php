
<?php
//get current_atd_people, need_atd_people, atd_success
$db_host = 'merry.ee.ncku.edu.tw';
$db_user = 'nckucampus';
$db_pwd = 'yoman';
$db_name = 'nckucampus';
$conn = mysql_connect($db_host, $db_user, $db_pwd) or die('Error with MySQL connection');
mysql_query("SET NAMES utf8;", $conn);
mysql_select_db($db_name)or die(mysql_error());

$a_id = $_REQUEST['a_id'];
$f_id = $_REQUEST['u_id'];

$attend_ct_query = "SELECT count(f_id) from 5_follow where a_id=$a_id";
if (!$attend_data = mysql_query($attend_ct_query, $conn)){
  die (mysql_error());
}
$attend_size;
$attend_wanted_num;
$atd_status;
while($data = mysql_fetch_array($attend_data))
{
  $attend_size= $data[0];
  //	   echo "current attending people: " .$attend_size."\n";
}

$check_query = "SELECT amount from 5_activity where a_id=$a_id";
if (!$attend_data2 = mysql_query($check_query)){
  die (mysql_error());
}
while($data2=mysql_fetch_array($attend_data2)){
  $attend_wanted_num=$data2[0];
}	 
//	echo "wanted_people_amount: ".$attend_wanted_num."\n";
//$mysql = "insert into 5_follow(a_id , f_id,if_host) values ('$a_id', '$f_id',0)";
//        echo $a_id."  ".$f_id;
if($attend_size < $attend_wanted_num)
{
//  $check_if_attended = "select f_id from 5_follow where a_id='$a_id' and f_id='$f_id'";
//  $result=mysql_query($check_if_attended);
//  if (mysql_num_rows($result)>0) {
//    $atd_status=0;
//  }  
//  else{
 // if (!$queryResource = mysql_query($mysql)){
    //die (mysql_error());
    $mysql = "insert into 5_follow(a_id , f_id,if_host) values ('$a_id', '$f_id',0)";
    mysql_query($mysql);
    $atd_status=1;
 // }
}
else{
  //  echo "attend filed";
  $atd_status=0;
}
echo json_encode(array('a_id'=>$a_id,'cur_people'=>$attend_size,'need_people'=>$attend_wanted_num,'atd_status'=>$atd_status));
?>
