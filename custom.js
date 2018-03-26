//script to execute when user clicks compare button
$(document).ready(function(){
	$("#submitButton").click(function(e){
		e.preventDefault();
		document.getElementById("result").style.display = "none";
		var h1 = $("#handle1").val().toString();
		var h2 = $("#handle2").val().toString();
		if(h1 && h2){
			if(h1.toLowerCase() === h2.toLowerCase()){
				$('.result').html("Enter different handles.");
				document.getElementById("result").style.display = "block";
			} else {
				document.getElementById("loader").style.display = "block";
				document.getElementById("loader_text").style.display = "block";
				var url = `https://codechefcomparator.herokuapp.com/compare_rank/${h1}/${h2}`;
				$.get(url).done(function(data){
					$('.result').html(data);
					document.getElementById("loader").style.display = "none";
					document.getElementById("loader_text").style.display = "none";
					document.getElementById("result").style.display = "block";
				});
			}
		} else {
			$('.result').html("Enter both handles...!");
			document.getElementById("result").style.display = "block";
		}
	});
});