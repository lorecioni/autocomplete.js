<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Ajax Search</title>
	<link rel="stylesheet" href="css/style.css">
	<script type="text/javascript" src="lib/jquery-2.0.3.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</head>
<body>
  <div id="wrapper">
	<h1>Ajax Search</h1>
	<form id="search-form" action="result.php" method="get">
		<div id="search-box">
			<input type="text" id="text-input" name="query" placeholder="Search" autocomplete="off">
			<div id="proposal-box">
				<ul id="proposal-list">
				</ul>
			</div>
		</div>
		<input type="button" id="search-button" name="search" value="Search">
	</form>
  </div>
</body>
</html>