
Hai cercato: 

<?php
echo $_GET['query'];

include('config.php');
$result = mysql_query("SELECT value, occurrency FROM proposals WHERE value ='" . $_GET['query'] . "'");

if(mysql_num_rows($result)==0){
	$query = mysql_query("INSERT INTO proposals (value, occurrency) VALUES ('".$_GET['query']."', 1)") or trigger_error(mysql_error());	
	echo '<br>Cercato per la prima volta.';
}
else {
	while($data = mysql_fetch_row($result)){
		$occurr = $data[1];
	}
		$occurr++;
		$query = mysql_query("UPDATE proposals SET occurrency =".$occurr." WHERE value = '".$_GET['query']."'") or trigger_error(mysql_error());
		echo '<br>Cercata '.$occurr.' volte.';
}

?>