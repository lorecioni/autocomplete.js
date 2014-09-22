var proposals = ['at', 'boat', 'bear', 'chief', 'dog', 'drink', 'elephant', 'fruit', 'grave',
					'hotel', 'illness', 'London', 'motorbike'];
					
function createProposals(check){
	var word = "^" + check + ".*";
	var result = "";
	for(var test in proposals){
		if(proposals[test].match(word)){
			result += '<a href="#" data="' + proposals[test] + '" class="proposal"><li>' + proposals[test] + '</li></a>'
		}
	}
	$('#proposal-list').html(result);
}

$(document).ready(function(){
	$('#search-form').autocomplete({
		dataSource: proposals
	});
	/*
	$('#text-input').bind("change paste keyup", function(){
		
		if($('#text-input').val() == ''){
			$('#proposal-list').html('');
		}
		if($('#text-input').val() != ''){
			createProposals($('#text-input').val());
		}
	});*/

});

$(document).on('click', '.proposal', function(e) {
	e.preventDefault();
	var value = $(this).attr('data');
	$('#text-input').val('');
	$('#proposal-list').html('');
	$('#message').html('You choose: ' + value);
	
});