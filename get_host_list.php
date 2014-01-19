<?php
//get_host_open_activity

<<<<<<< HEAD
/*$db_host = 'merry.ee.ncku.edu.tw';
$db_user = 'nckucampus';
$db_pwd = 'yoman';
$db_name = 'nckucampus';
mysql_connect($db_host, $db_user, $db_pwd) or die('Error with MySQL connection');
mysql_query("SET NAMES utf8;", $conn);
mysql_select_db($db_name)or die(mysql_error());

$u_id=$_REQUEST['u_id'];

$query = "SELECT a_id from 5_follow where f_id='$u_id' and if_host=1";
$result = mysql_query($query);
$rows = array();
while($data=mysql_fetch_array($result)){
	//echo $data['a_id'];
	$rows[] = $data['a_id'];
}
$result_final=json_encode($rows);
    echo $result_final;
 */
    //get_host_open_activity
    
=======
>>>>>>> d77f2ac542a3174368e36b82c5fafb771415e88e
    $db_host = 'merry.ee.ncku.edu.tw';
    $db_user = 'nckucampus';
    $db_pwd = 'yoman';
    $db_name = 'nckucampus';
    $conn = mysql_connect($db_host, $db_user, $db_pwd) or die('Error with MySQL connection');
    mysql_query("SET NAMES utf8;", $conn);
    mysql_select_db($db_name)or die(mysql_error());
    
    $u_id=$_REQUEST['u_id'];
    
    $query = "SELECT * from 5_activity,5_follow where h_id='$u_id and if_host=1'";
    $result = mysql_query($query)or die(mysql_error());
    $return_arr = array();
    while($data=mysql_fetch_array($result)){
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
?>

