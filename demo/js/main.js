var proposals = ['at', 'boat', 'bear', 'chief', 'dog', 'drink', 'elephant', 'fruit', 'grave',
					'hotel', 'illness', 'London', 'motorbike'];

$(document).ready(function(){
	$('#search-form').autocomplete({
		dataSource: proposals,
		onSubmit: function(text){
			console.log('hai cercato ' + text);
			$('#message').html('You choose: ' + text);			
		}
	});
});
