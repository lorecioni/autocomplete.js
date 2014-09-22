#Autocomplete.js
*A jQuery plugin for search hints*

`Autocomplete.js` is jQuery plugin that improve your search with hints.

##Getting started
Make sure jQuery is included in your page, than include autocomplete.js and autocomplete.css inside the head tag.

```html
<head>
	<link rel="stylesheet" type="text/css" href="css/autocomplete.min.css"/>
	<script src="js/autocomplete.min.js"></script>
</head>
```

At least fill hints and call the plugin on selected HTML element

To add an Animotion programmatically:
```javascript
var words = ['boat', 'dog', 'drink', 'elephant', 'fruit', 'London'];

$(document).ready(function(){
	$('#yourElement').autocomplete(
		hints: words
	);
});
```

**Options** 

- `hints`: words array for displaying hints.
- `placeholder`: search input placeholder (default: 'Search').
- `width`: input text width.
- `height`: input text height.
- `showButton`: display search button (default: true).
- `buttonText`: button text (default: 'Search').
- `onSubmit`: function handler called on input submit.
- `onBlur`: function handler called on input losing focus.
- `height`: input text height.


##Demo
To view a simple demo click [here](http://lorecioni.github.io/autocomplete.js)

## License
Autocomplete.js is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## Contributing
Pull requests and feedbacks are welcome here!
