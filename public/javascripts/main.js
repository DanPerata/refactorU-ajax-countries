// console.log("Testing to see main.js is working");
$(document).on('ready', function() {
	$(document).on('click', '.button', function(){
		$.get('/countries', function(countries){
			// console.log(countries);
			var list = $('<ul>');
			var listItems = countries.map(function(country){
				return $('<li class="countryName">' + country.name + '</li>')
			});
			// console.log(listItems);
			list.append(listItems);
			$('body').append(list);
		});
		
	});

})	