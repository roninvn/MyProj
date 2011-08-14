{literal}
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
		<title>Gathering Geolocation Data... Please Wait</title>

		<script language="javascript" type="text/javascript">
		var i=0;

		window.onload=function()
		{
			if (navigator.geolocation)
		getLocation();
		else
		{
		window.location.href='/search_nearby_zip.html';
		}
		}

			function getLocation() {
				// Get location no more than 10 minutes old. 600000 ms = 10 minutes.
				navigator.geolocation.getCurrentPosition(showLocation, showError, {enableHighAccuracy:true,maximumAge:600000});

			}

			function showError(error) {
				alert(error.code + ' ' + error.message);
			}



			function showLocation(position) {
			var url1='/search_nearby.html?lon='+position.coords.longitude+'&lat='+position.coords.latitude;
			{/literal}
			{if $catid}url1=url1+'&catid={$catid}';
			{/if}
			{literal}
		window.location.href=url1;


			}
		</script>
	</head>
	<body>



		<div id="geoinfo"></div>
	</body>
</html>
{/literal}