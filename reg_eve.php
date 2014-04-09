<?php  session_start(); include('../../db/db_config.php'); $user = $_SESSION['username']; $tag = $_SESSION['tag'];
if($_POST){
   $eve = $_POST['eve'];
   $k = mysql_query($link, "UPDATE reg_mem SET $eve = '1' WHERE tag='$tag'");
}

?>