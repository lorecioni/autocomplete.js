<?php
include('config.php');

$input = $_GET['input'];

$result = mysql_query("SELECT value, occurrency FROM proposals WHERE value LIKE '".$input."%' ORDER BY occurrency DESC, value ASC") or trigger_error(mysql_error());

while($data = mysql_fetch_row($result)){
	echo '<a href="#" data="'.$data[0].'" class="proposal"><li>'.$data[0].'</li></a>';

}

?>