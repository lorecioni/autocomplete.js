/**

A jQuery plugin for search hints

*/

(function($) {
	$.fn.autocomplete = function(params) {
		
		var currentSelection = -1;
		var currentProposals = [];
		
		//Default parameters
		params = $.extend({
			dataSource: [],
			placeholder: 'Search',
			width: 200,
			height: 16,
			buttonText: 'Search'
		}, params);

		//Build messagess
		this.each(function() {
			//Container
			var searchContainer = $('<div></div>')
				.addClass('autocomplete-container')
				.css('height', params.height * 2);	
				
			//Text input		
			var input = $('<input type="text" autocomplete="off" name="query">')
				.attr('placeholder', params.placeholder)
				.addClass('autocomplete-input')
				
				.css({
					'width' : params.width,
					'height' : params.height
				});

			//Proposals
			var proposals = $('<div></div>')
				.addClass('proposal-box')
				.css('width', params.width + 18)
				.css('top', input.height() + 20);
			var proposalList = $('<ul></ul>')
				.addClass('proposal-list');

			proposals.append(proposalList);
			
			//Search button
			var button = $('<div></div>')
				.addClass('autocomplete-button')
				.html(params.buttonText);
				
			input.keydown(function(e) {
				switch(e.which) {
					case 38: // Up arrow
					e.preventDefault();
					$('ul.proposal-list li').removeClass('selected');
					if((currentSelection - 1) >= 0){
						currentSelection--;
						$( "ul.proposal-list li:eq(" + currentSelection + ")" ).addClass('selected');
					} else {
						currentSelection = -1;
					}
					break;
					case 40: // Down arrow
					e.preventDefault();
					if((currentSelection + 1) < currentProposals.length){
						$('ul.proposal-list li').removeClass('selected');
						currentSelection++;
						$( "ul.proposal-list li:eq(" + currentSelection + ")" ).addClass('selected');
					}
					break;	
					case 27: // Esc button
					console.log('esc');
					break;
				}
			});
				
			input.bind("change paste keyup", function(e){
				if(e.which != 27 && e.which != 38 && e.which != 40){				
					currentProposals = [];
					currentSelection = -1;
					if(input.val() == ''){
						proposalList.empty();
					}
					if(input.val() != ''){
						var word = "^" + input.val() + ".*";
						var result = "";
						for(var test in params.dataSource){
							if(params.dataSource[test].match(word)){
								currentProposals.push(params.dataSource[test]);
								result += '<a href="#" data="' + params.dataSource[test] + '" class="proposal"><li>' + params.dataSource[test] + '</li></a>'
							}
						}
						proposalList.html(result);
					}
				}
			});
			
			$('.proposal').click(function(e){
				e.preventDefault();
				var value = $(this).attr('data');
				input.val('');
				proposalList.html('');
				$('#message').html('You choose: ' + value);
			});
			
			searchContainer.append(input);
			searchContainer.append(proposals);
			searchContainer.append(button);	
			$(this).append(searchContainer);	
			
			searchContainer.css('width', params.width + button.width() + 50);
		});

		return this;
	};

})(jQuery);