<?php

$db_host = 'localhost';
$db_user = 'laboratorio';
$db_pass = 'test';
$db_name = 'ajax_search';

// connect to db
$db_connect = mysql_connect($db_host,$db_user , $db_pass);
if (!$db_connect) {
    die('Not connected : ' . mysql_error());
}

if (! mysql_select_db($db_name) ) {
    die ('Can\'t use foo : ' . mysql_error());
}


?>