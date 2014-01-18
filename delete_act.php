<?php
//delete activities(1)/cancel activities(2)
//request activity id (a_id)/action (action)
//action(1):delete activity
//action(2):cancel attended activity
$db_host = 'merry.ee.ncku.edu.tw';
$db_user = 'nckucampus';
$db_pwd = 'yoman';
$db_name = 'nckucampus';

$conn = mysql_connect($db_host, $db_user, $db_pwd) or die('Error with MySQL connection');
mysql_query("SET NAMES utf8;", $conn);
mysql_select_db($db_name)or die(mysql_error());

$a_id = $_REQUEST['a_id'];
$request = $_REQUEST['action'];
$u_id = $_REQUEST['u_id'];
  if($request==1){			//delete activity
    $check = "select h_id from 5_activity where a_id='$a_id' and h_id='$u_id'";
    $result = mysql_query($check);
    if($result->rowCount()>0){
    $sql= "delete from 5_activity where a_id='$a_id'";
    $sql2 = "delete from 5_follow where a_id='$a_id'";
    mysql_query($sql);
    mysql_query($sql2);
    echo "Activity deleted";
    }
    else{
    echo "You can't delete this act";
    }
  }
  else if($request==2){			//cancel attending activity
    $sql3 = "delete from 5_follow where a_id='$a_id' AND f_id='$u_id'";
    mysql_query($sql3);
    echo "activity canceled";
  }
   else{
   	echo "delete failed";
   }

?>
