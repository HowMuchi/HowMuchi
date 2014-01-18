<?php
//get_host_open_activity

$db_host = 'merry.ee.ncku.edu.tw';
$db_user = 'nckucampus';
$db_pwd = 'yoman';
$db_name = 'nckucampus';
mysql_connect($db_host, $db_user, $db_pwd) or die('Error with MySQL connection')
mysql_query("SET NAMES utf8;", $conn);
mysql_select_db($db_name)or die(mysql_error());
if (!$attend_data = mysql_query($attend_ct_query, $conn)){
    die (mysql_error());
}

$u_id=$_REQUEST['u_id'];

$query = "SELECT a_id from 5_follow where f_id='$u_id' and if_host=1";
$result = mysql_query($query);
while($data=mysql_fetch_array($result)){
        echo $data['a_id'];
}
?>