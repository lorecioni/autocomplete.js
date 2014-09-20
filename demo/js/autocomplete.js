/**

A jQuery plugin for search hints

*/

(function($) {
	$.fn.autocomplete = function(params) {
		
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
				.addClass('autocomplete-container');	
				
			//Text input		
			var input = $('<input type="text" autocomplete="off" name="query">')
				.attr('placeholder', params.placeholder)
				.addClass('autocomplete-input')
				.css({
					'width' : params.width,
					'height' : params.height,
					'line-height' : params.height
				});

			//Proposals
			var proposals = $('<div></div>')
				.addClass('proposal-box')
				.css('width', params.width + 14)
				.css('top', input.height());
			var proposalList = $('<ul></ul>')
				.addClass('proposal-list');

			proposals.append(proposalList);
			
			//Search button
			var button = $('<div></div>')
				.addClass('autocomplete-button')
				.html(params.buttonText);
				

			input.bind("change paste keyup", function(){	
				console.log('he');
				if(input.val() == ''){
					proposalList.html('');
				}
				if(input.val() != ''){
					var word = "^" + input.val() + ".*";
					var result = "";
					for(var test in params.dataSource){
						if(params.dataSource[test].match(word)){
							result += '<a href="#" data="' + params.dataSource[test] + '" class="proposal"><li>' + params.dataSource[test] + '</li></a>'
						}
					}
					proposalList.html(result);
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
		});

		return this;
	};

})(jQuery);