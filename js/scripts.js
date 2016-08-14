$(function() {
	
	var url = "https://restcountries.eu/rest/v1/name/",
		countriesList = $('#countries');
	
	function searchCountries() {
		var countryName = $('#country-name').val();
		
		if (!countryName.length) countryName = "Poland";
		
		$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList,
			error: function() {
				$('<tr>').appendTo(countriesList)
				.append(
					'<td>Brak danych</td>' + 
					'<td>Brak danych</td>' + 
					'<td>Brak danych</td>' + 
					'<td>Brak danych</td>' + 
					'<td>Brak danych</td>'
				);;
			}
		});
	}
	
	function showCountriesList(resp) {
		countriesList.empty();
		resp.forEach(function(item) {
			$('<tr>').appendTo(countriesList)
				.append(
					'<td>' + item.name + '</td>' + 
					'<td>' + item.capital + '</td>' + 
					'<td>' + item.population + '</td>' + 
					'<td>' + item.currencies + '</td>' + 
					'<td>' + item.region + '</td>'
				);
		});
	}
	
	$('#search').click(searchCountries);
	
});