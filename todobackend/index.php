<!DOCTYPE html>
<html>
	<head>
		  <meta charset="UTF-8">
		  <meta name="description" content="Free Web tutorials">
		  <meta name="keywords" content="HTML,CSS,XML,JavaScript">
		  <meta name="author" content="John Doe">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">

			<link rel="stylesheet" href="styles.css"/>
			<script
			  src="https://code.jquery.com/jquery-3.3.1.min.js"
			  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
			  crossorigin="anonymous"></script>
			  
		
		<script>
			function btnclick()
			{
			var xhttp = new XMLHttpRequest();
				  xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
					  document.getElementById("demo").innerHTML = this.responseText;
					}
				  };
				xhttp.open("GET", "http://localhost:52371/api/status_table", true);
				xhttp.send(); 
			
			document.getElementById("demo").innerHTML="hi";
			}
			
		</script>
	
	
	</head>
	
	<body>
	<p id="demo"></p>
		<div class="calc_outer box_shadows">
				<div class="input_field" id="input_display">
				</div>
				<button onclick="btnclick();">Click</button>
		</div>
	</body>
</html>