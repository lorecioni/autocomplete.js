$(document).ready(function(){
	$('#text-input').bind("change paste keyup", function(){
		var url = 'proposal.php?input=' + $('#text-input').val();
		if($('#text-input').val() == ''){
			$('#proposal-list').html('');
		}
		if($('#text-input').val() != ''){
			$.ajax({
				url : url,
				method : "GET",
				dataType : "html",
				success : function(data) {
					$('#proposal-list').html(data);
				},
				error : function(err) {
					console.log("Error: " + err);
				}
			});
		}
	});

});

$(document).on('click', '.proposal', function(e) {
	e.preventDefault();
	var value = $(this).attr('data');
	$('#text-input').val(value);
	console.log(value);
	$('#search-form').submit();
	
});